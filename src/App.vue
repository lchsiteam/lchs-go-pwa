<template>
  <div id="app-container" :style="getCSSColorScheme()" :class="{ toggleRadial: !this.$store.state.settings.enableRadialGradient, toggleOff: !this.$store.state.settings.enableThemeAnimations }">
  <div id="app">
      <div id="nav">
        <router-link to="/home">Now</router-link>
        <!-- <router-link to="/today">Today</router-link> -->
        <router-link to="/about">About</router-link>
      </div>
      <keep-alive>
        <router-view/>
      </keep-alive>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Themes } from './themes';
import { DateTime, Duration } from 'luxon';
import firebase from 'firebase';
import firebaseui from 'firebaseui';
import { printTime, getScheduleFromDay, getPeriod, getUpcomingPeriod, getPreviousPeriod, allGrades, plusDays, periodsFilter, allFilter, excludeZeroAndSix, excludeZero, excludeSix } from '@/schedule';
import { Day, Schedule, Period, getPeriodName, getScheduleName } from '@/schedule/enums';

@Component({})
export default class App extends Vue {
  private minutes: number = 0;
  private currentPeriod = { start: 0, end: 1440, period: Period.NONE };
  private notificationsStatus = this.$store.state.settings.notificationsOn;
  private schedule: Schedule = Schedule.NONE;
  private grade = allGrades[2];
  private currentDateTime: any;
  private uniqueMinute: number = 0;
  private nextPeriod = { start: 0, end: 1440, period: Period.NONE };
  private previousPeriod = { start: 0, end: 1440, period: Period.NONE };
  private filter = periodsFilter;

  getCurrentColorScheme() {
    return this.getColorSchemeFromId(this.$store.state.settings.colorTheme);
  }

  getColorSchemeFromId(themeId: string) {
    return Themes.filter((t) => t.id === themeId)[0] || Themes[0];
  }

  getCSSColorScheme() {
    let themeGradient;
    const currentColorScheme = this.getCurrentColorScheme();
    if (this.$store.state.settings.colorTheme === 'theme15') {
      const currentDate = DateTime.local().setZone('America/Los_Angeles');
      if (currentDate.hour >= 21 && currentDate.hour <= 4) {
        themeGradient = this.getColorSchemeFromId('theme12');
      } else if (currentDate.hour <= 9) {
        themeGradient = this.getColorSchemeFromId('theme14');
      } else if (currentDate.hour <= 11) {
        themeGradient = this.getColorSchemeFromId('theme4');
      } else if (currentDate.hour <= 15) {
        themeGradient = this.getColorSchemeFromId('theme6');
      } else if (currentDate.hour <= 17) {
        themeGradient = this.getColorSchemeFromId('theme7');
      } else {
        themeGradient = this.getColorSchemeFromId('theme1');
      }
    }
    else {
      themeGradient = currentColorScheme;
    }
    return {
      '--gradient-colors': themeGradient.gradientColors.join(', '),
      '--button-menu-color': themeGradient.btnMenuColor,
      '--button-submenu-color': themeGradient.btnSubmenuColor,
      '--button-hover-color': themeGradient.btnHoverColor,
      '--gradient-count': themeGradient.gradientColors.length,
    };
  }

  updateStats() {
    const currentDate = DateTime.local().setZone('America/Los_Angeles').plus(Duration.fromMillis(plusDays * 86400000));
    this.minutes = currentDate.minute + (currentDate.hour * 60);
    this.uniqueMinute = currentDate.minute + (currentDate.hour * 60) + (currentDate.ordinal * 60 * 24) + (currentDate.year * 365 * 60 * 24);
    this.currentDateTime = currentDate;
    this.grade = this.$store.state.settings.grade;
    // keep in mind, App.vue's implementation of this.currentPeriod, uses a filtered period list
    this.schedule = getScheduleFromDay(currentDate.month, currentDate.day, currentDate.year, currentDate.weekday, this.grade);
    this.currentPeriod = getPeriod(this.minutes, this.schedule, this.grade, this.filter);
    this.nextPeriod = getUpcomingPeriod(this.minutes, this.currentDateTime, this.schedule, this.grade, this.filter);
    this.previousPeriod = getPreviousPeriod(this.minutes, this.currentDateTime, this.schedule, this.grade, this.filter);
  }

  updateFilter() {
    if (this.$store.state.settings.sixthEnabled) {
      if (this.$store.state.settings.zeroEnabled) {
        this.filter = periodsFilter;
      } else {
        this.filter = excludeZero;
      }
    } else if (this.$store.state.settings.zeroEnabled) {
      this.filter = excludeSix;
    } else {
      this.filter = excludeZeroAndSix;
    }
  }

  sendNotifications() {
    // console.log(this.uniqueMinute);
    // console.log(this.minutes);
    //console.log(this.nextPeriod.start);
    //console.log(this.currentPeriod.period);
    //console.log(getPeriodName(this.nextPeriod.period));
    // console.log(getPeriodName(this.nextPeriod.period));
    // console.log(this.$store.state.settings.notificationSent);
    //console.log(this.$store.state.settings.startTime);
    //console.log(this.$store.state.settings.endTime);
    if (((this.minutes === this.previousPeriod.end-this.$store.state.settings.endTime) && (!this.$store.state.settings.notificationSent) && (this.$store.state.settings.startorend != 'start')) && (this.$store.state.settings.endTime === 0)) {
      this.$store.state.settings.notificationSent = true;
      this.createNotification('Attention: ' + getPeriodName(this.previousPeriod.period) + ' is ending in ' + this.$store.state.settings.endTime + ' minute(s)', this.previousPeriod);
    }
    else if (((this.minutes === this.currentPeriod.start-this.$store.state.settings.startTime) && (!this.$store.state.settings.notificationSent) && (this.$store.state.settings.startorend != 'end')) && (this.$store.state.settings.startTime === 0)) {
      this.$store.state.settings.notificationSent = true;
      this.createNotification('Attention: ' + getPeriodName(this.currentPeriod.period) + ' is starting in ' + this.$store.state.settings.startTime + ' minute(s)', this.currentPeriod);
    }
    else if ((this.minutes === this.nextPeriod.start-this.$store.state.settings.startTime) && (!this.$store.state.settings.notificationSent) && (this.$store.state.settings.startorend != 'end')) {
      this.$store.state.settings.notificationSent = true;
      this.createNotification('Attention: ' + getPeriodName(this.nextPeriod.period) + ' is starting in ' + this.$store.state.settings.startTime + ' minute(s)', this.nextPeriod);
    }
    else if ((this.minutes === this.currentPeriod.end-this.$store.state.settings.endTime) && (!this.$store.state.settings.notificationSent) && (this.$store.state.settings.startorend != 'start')){
      this.$store.state.settings.notificationSent = true;
      this.createNotification('Attention: ' + getPeriodName(this.currentPeriod.period) + ' is ending in ' + this.$store.state.settings.endTime + ' minute(s)', this.currentPeriod);
    }
    else {
      if ((this.minutes !== this.nextPeriod.start-this.$store.state.settings.startTime) && (this.minutes !== this.currentPeriod.end-this.$store.state.settings.endTime) && (this.minutes !== this.previousPeriod.end-this.$store.state.settings.endTime) && (this.minutes !== this.currentPeriod.start-this.$store.state.settings.startTime)) {
        this.$store.state.settings.notificationSent = false;
      }
    }
    if (Notification.permission === 'denied') {
      this.$store.state.settings.notificationsOn = false;
    }
    else if (!(Notification.permission === 'granted') && (this.$store.state.settings.notificationsOn)) {
      this.notifyMe();
    }
  }

  createNotification(message: string, period: any) {
    // console.log(this.$store.state.settings.notificationsOn);
    if ((Notification.permission === 'granted') && (this.$store.state.settings.notificationsOn)) {
      // If it's okay let's create a notification
      console.log('testing');
      let tempNotif = new Notification('LCHS Go', {
        body: String(message),
        badge: 'https://go.lciteam.club/favicon.ico',
        icon: 'https://go.lciteam.club/favicon.ico',
        vibrate: [200, 100, 200],
        silent: false,
        tag: String(this.uniqueMinute),
      });
    }
  }

  updateOptionBL(name: string, value: any): void {
    this.$store.commit('UPDATE_SETTING', { name, value });
  }

  notifyMe() {
    // Let's check if the browser supports notifications
    let temp = this;
    if (!('Notification' in window)) {
      alert('This browser does not support desktop notification');
    }

    // Let's check whether notification permissions have already been granted
    else if (Notification.permission === 'granted') {
      // If it's okay let's create a notification
      let notification = new Notification('LCHS Go', {
        body: 'Notifications are now on!',
        badge: 'https://go.lciteam.club/favicon.ico',
        icon: 'https://go.lciteam.club/favicon.ico',
        vibrate: [200, 100, 200],
        silent: false,
      });
      temp.notificationsStatus = true;
      temp.updateOptionBL('notificationsOn', true);
    }

    // Otherwise, we need to ask the user for permission
    else if (Notification.permission !== 'denied') {
      Notification.requestPermission().then((permission) => {
        // If the user accepts, let's create a notification
        if (permission === 'granted') {
          let notification = new Notification('LCHS Go', {
            body: 'Notifications are now on!',
            badge: 'https://go.lciteam.club/favicon.ico',
            icon: 'https://go.lciteam.club/favicon.ico',
            vibrate: [200, 100, 200],
            silent: false,
          });
          temp.notificationsStatus = true;
          temp.updateOptionBL('notificationsOn', true);
        }
        else {
          alert('You must click allow, in order to enable desktop notifications. \n(If you don\'t want notifications, you can disable them in settings to avoid this popup)');
          temp.notificationsStatus = false;
        }
      });

    // At last, if the user has denied notifications, and you
    // want to be respectful there is no need to bother them any more.
    }
  }

  mounted() {
    setInterval(this.updateStats, 5000);
    this.updateStats();
    setInterval(this.sendNotifications, 5000);
    this.sendNotifications();
  }

}

  // Your web app's Firebase configuration
let firebaseConfig = {
    apiKey: 'AIzaSyDWaQp0SxDc4t_aaUIxdDI_Zb0rf8YWASc',
    authDomain: 'helloyeet-c3c84.firebaseapp.com',
    databaseURL: 'https://helloyeet-c3c84.firebaseio.com',
    projectId: 'helloyeet-c3c84',
    storageBucket: 'helloyeet-c3c84.appspot.com',
    messagingSenderId: '969131500601',
    appId: '1:969131500601:web:f47d01d3ff7c4eef',
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
</script>


<style lang="scss">

@keyframes AnimatedTheme {
  0% { background-position: 50% 0%; }
  50% { background-position: 51% 100%; }
  100% { background-position: 50% 0%; }
}

@keyframes AnimatedRadial {
  0% { background-size: 100% 100%; }
  50% { background-size: 200% 200%; }
  100% { background-size: 100% 100%; }
}

html, body, #app-container {
  height: auto;
  min-height: 100vh;
  width: 100%;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app-container {
  background: linear-gradient(to bottom, var(--gradient-colors, "#42b983, #2f9768"));
  background-size: 400% 400%;
  animation: AnimatedTheme 20s ease infinite;

  &.toggleRadial {
    background: radial-gradient(var(--gradient-colors, "#42b983, #2f9768"));
    background-size: 200%, 200%;
    background-position: center;
    animation: AnimatedRadial 10s ease infinite;  
  }

  &.toggleOff {
    background-size: 100% 100%;
    animation: none;
  }

}
#app {
  font-family: 'Niramit', Avenir, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
  max-width: 600px;
  margin: 0 auto;
  padding-bottom: 40px;
}

#nav {
  padding: 30px;
  a {
    background-color: var(--button-menu-color, #2c3e50);
    display: inline-block;
    padding: 16px 30px;
    font-weight: bold;
    color: rgba(255, 255, 255, 0.6);
    border-radius: 4px;
    text-decoration: none;
    vertical-align: middle;
    margin: 8px;
    box-shadow: 0 4px 16px 8px rgba(0, 0, 0, .15);
    transition: 150ms ease;

    &:before {
      display: inline-block;
      margin-left: -10px;
      margin-right: 15px;
      content: '';
      height: 24px;
      width: 8px;
      border-radius: 4px;
      background-color: #1c1e20;
      vertical-align: middle;
      transition: 150ms ease;
    }

    &.router-link-active {
      color: #fff;

      &:before { background-color: #d5dee7; }
    }
  }
}


.sub-nav-item {
  background-color: transparent;
  border-radius: 2px;
  font-size: 14px;
  display: inline-block;
  text-decoration: none;
  color: #fff;
  text-transform: uppercase;
  font-weight: 700;
  margin: 0 5px;
  padding: 6px 16px;
  transition: 150ms ease;

  &:hover {
    background-color: var(--button-hover-color, rgba(#2f9768, .4));
  }

  &.router-link-exact-active {
    background-color: var(--button-submenu-color, #2f9768);
    box-shadow: 0 0 8px 4px rgba(100, 100, 100, .1);
  }
}
</style>
