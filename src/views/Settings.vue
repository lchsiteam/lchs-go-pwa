<template>
  <div class="settings">
    <h2>App Settings</h2>
    <div class="settings-rows">
      <div class='settings-row'>
        <div class='sr-head'>
          <b class='sr-title'>Grade Level</b>
          <span class='sr-desc'>Change which grade is used for calculating schedules</span>
        </div>
        <div class='sr-option'>
          <select v-model="grade" @change="updateGrade()" class = "grade-select">
            <option v-for="grade in allGrades" :key="grade" :value="grade" class = "grade-select-item">{{strGrade(grade)}}</option>
          </select>
        </div>
      </div>
      <div class="settings-row">
        <div class="sr-head">
          <b class="sr-title">Desktop Notifications</b>
          <span class="sr-desc">Enable or disable desktop notifications</span>
        </div>
        <div class="sr-option">
          <div class="ex-selector">
            <div class="ex-selector-option" @click="notifyMe();"
              :class="{selected: this.$store.state.settings.notificationsOn}">Enable</div>
            <div class="ex-selector-option" @click="updateOptionBL('notificationsOn', false); showOff()"
              :class="{selected: !(this.$store.state.settings.notificationsOn)}">Disable</div>
          </div>
        </div>
        <div class="sr-option" v-if='this.$store.state.settings.notificationsOn'>
          <div class="ex-selector">
            <div class="ex-selector-option" @click='toggleShow'>{{ this.seeorhide }} advanced notification settings</div>
          </div>
        </div>
        <div class="settings-rows" v-if='show'>
          <!-- hidden section-->
          <div class='settings-row'>
            <div class='sr-head'>
              <b class='sr-title'>Warning time before period START</b>
              <span class='sr-desc'>How many minutes before the start of a period should we notify you that the period is starting?</span>
            </div>
            <div class='sr-option'>
              <select v-model="startTimeAmount" @change="updateStartTime()" class = "grade-select">
                <option v-for="time in allTimes" :key="time" :value="time" class = "grade-select-item">{{strTime(time)}}</option>
              </select>
            </div>
          </div>
          <div class='settings-row'>
            <div class='sr-head'>
              <b class='sr-title'>Warning time before period END</b>
              <span class='sr-desc'>How many minutes before the end of a period should we notify you that the period is ending?</span>
            </div>
            <div class='sr-option'>
              <select v-model="endTimeAmount" @change="updateEndTime()" class = "grade-select">
                <option v-for="time in allTimes" :key="time" :value="time" class = "grade-select-item">{{strTime(time)}}</option>
              </select>
            </div>
          </div>
          <div class="settings-row">
            <div class="sr-head">
              <b class="sr-title">Display Zero Period</b>
              <span class="sr-desc">Enable or disable notifications for zero period. (Disable this if you don't have a zero period)</span>
            </div>
            <div class="sr-option">
              <div class="ex-selector">
                <div class="ex-selector-option" @click="updateOptionBL('zeroEnabled', true)"
                  :class="{selected: this.$store.state.settings.zeroEnabled}">Notify for zero period</div>
                <div class="ex-selector-option" @click="updateOptionBL('zeroEnabled', false)"
                  :class="{selected: !this.$store.state.settings.zeroEnabled}">Do not notify for zero period</div>
              </div>
            </div>
          </div>
          <div class="settings-row">
            <div class="sr-head">
              <b class="sr-title">Display 6th Period</b>
              <span class="sr-desc">Enable or disable notifications for 6th period. (Disable this if you don't have a 6th period)</span>
            </div>
            <div class="sr-option">
              <div class="ex-selector">
                <div class="ex-selector-option" @click="updateOptionBL('sixthEnabled', true)"
                  :class="{selected: this.$store.state.settings.sixthEnabled}">Notify for 6th period</div>
                <div class="ex-selector-option" @click="updateOptionBL('sixthEnabled', false)"
                  :class="{selected: !this.$store.state.settings.sixthEnabled}">Do not notify for 6th period</div>
              </div>
            </div>
          </div>
          <div class="settings-row">
            <div class="sr-head">
              <b class="sr-title">Enable Notifications For Start OR End of Period</b>
              <span class="sr-desc">Choose if you want notifications for both the start and end of a period, or just one of them. (If you don't want notifications at all, you can disable them above)</span>
            </div>
            <div class="sr-option">
              <div class="ex-selector">
                <div class="ex-selector-option" @click="updateOptionBL('startorend', 'both')"
                  :class="{selected: (this.$store.state.settings.startorend=='both')}">Both</div>
                <div class="ex-selector-option" @click="updateOptionBL('startorend', 'start')"
                  :class="{selected: (this.$store.state.settings.startorend=='start')}">Notify at start of period</div>
                <div class="ex-selector-option" @click="updateOptionBL('startorend', 'end')"
                  :class="{selected: (this.$store.state.settings.startorend=='end')}">Notify at end of period</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="settings-row">
        <div class="sr-head">
          <b class="sr-title">Time Display</b>
          <span class="sr-desc">Change between 12h and 24h time</span>
        </div>
        <div class="sr-option">
          <div class="ex-selector">
            <div class="ex-selector-option" @click="updateOptionBL('useMilitaryTime', false)"
              :class="{selected: !this.$store.state.settings.useMilitaryTime}">12h</div>
            <div class="ex-selector-option" @click="updateOptionBL('useMilitaryTime', true)"
              :class="{selected: this.$store.state.settings.useMilitaryTime}">24h</div>
          </div>
        </div>
      </div>
      <div class="settings-row">
        <div class="sr-head">
          <b class="sr-title">Enable Theme Animations</b>
          <span class="sr-desc">Toggle fancy color fading</span>
        </div>
        <div class="sr-option">
          <div class="ex-selector">
            <div class="ex-selector-option" @click="updateOptionBL('enableThemeAnimations', true)"
              :class="{selected: this.$store.state.settings.enableThemeAnimations}">Enable</div>
            <div class="ex-selector-option" @click="updateOptionBL('enableThemeAnimations', false)"
              :class="{selected: !this.$store.state.settings.enableThemeAnimations}">Disable</div>
          </div>
        </div>
      </div>
      <div class="settings-row">
        <div class="sr-head">
          <b class="sr-title">Gradient Type</b>
          <span class="sr-desc">Switch between linear and radial color blend</span>
        </div>
        <div class="sr-option">
          <div class="ex-selector">
            <div class="ex-selector-option" @click="updateOptionBL('enableRadialGradient', true)"
              :class="{selected: this.$store.state.settings.enableRadialGradient}">Linear</div>
            <div class="ex-selector-option" @click="updateOptionBL('enableRadialGradient', false)"
              :class="{selected: !this.$store.state.settings.enableRadialGradient}">Radial</div>
          </div>
        </div>
      </div>
      <div class="settings-row">
        <div class="sr-head">
          <b class="sr-title">Enable Blinking</b>
          <span class="sr-desc">Toggle fancy blinking animations</span>
        </div>
        <div class="sr-option">
          <div class="ex-selector">
            <div class="ex-selector-option" @click="updateOptionBL('enableAnimations', true)"
              :class="{selected: this.$store.state.settings.enableAnimations}">Enable</div>
            <div class="ex-selector-option" @click="updateOptionBL('enableAnimations', false)"
              :class="{selected: !this.$store.state.settings.enableAnimations}">Disable</div>
          </div>
        </div>
      </div>
      <div class="settings-row">
        <div class="sr-head">
          <b class="sr-title">Show Hidden Periods</b>
            <span class="sr-desc">Show passing periods and times outside school on the bell schedule</span>
        </div>
        <div class="sr-option">
          <div class="ex-selector">
            <div class="ex-selector-option" @click="updateOptionBL('showExtraPeriods', true)"
              :class="{selected: this.$store.state.settings.showExtraPeriods}">Show</div>
            <div class="ex-selector-option" @click="updateOptionBL('showExtraPeriods', false)"
              :class="{selected: !this.$store.state.settings.showExtraPeriods}">Hide</div>
          </div>
        </div>
      </div>
      <div class="settings-row">
        <div class="sr-head">
          <b class="sr-title">Color Theme</b>
          <span class="sr-desc">Change the app's color scheme. Send an email to team@lciteam.club for suggestions.</span>
        </div>
        <div class="sr-option">
          <select v-model="colorThemeId" @change="updateTheme()" class="grade-select">
            <option v-for="theme in allThemes" :key="theme.id" :value="theme.id" class="grade-select-item">{{theme.name}}</option>
          </select>
        </div>
        <div class="settings-rows" v-if="showColorOptions">
          <!-- hidden section-->
          <div class="settings-row">
            <div class="sr-head">
              <b class="sr-title">Gradient/ Background Colors</b>
              <span class="sr-desc">These are the gradient colors of the background. 
                You can add more by clicking the plus and remove them by clicking the trash icon.</span>
            </div>
            <div class="sr-option">
              <div class="gradient-colors" id="gradientColors" style="padding-top: 20px">
                <span class="material-icons material-icons-outlined add-button" id="add-button" @click=" addColorRandom(); updateColor();">add_circle</span>
                <div>
                  <span class="material-icons material-icons-outlined qr-button" id="add-button" @click=" toggleQRCode();">qr_code</span>
                  <div id="qr-container" class="qr-container hidden">
                    <qrcode-vue :value="getQRValue()" size="200" level="H" />
                    <input @click="qrTextSelect($event)" :value="getQRValue()" class="url-text">
                  </div>
                </div>
                
                <div class="color-box">
                  <input class="color-selector" type="color" id="col1" />
                </div>
                <div class="color-box">
                  <input class="color-selector" type="color" id="col2" />
                </div>
              </div>
            </div>
          </div>
          <div class="settings-row">
            <div class="sr-head">
              <b class="sr-title">Large Button Color</b>
              <span class="sr-desc">Change the color of the large buttons.</span
              >
            </div>
            <div class="sr-option">
              <input class="color-selector" id="buttonColor" type="color" />
            </div>
          </div>
          <div class="settings-row">
            <div class="sr-head">
              <b class="sr-title">Small Button Color</b>
              <span class="sr-desc">Change the color of the small buttons.</span>
            </div>
            <div class="sr-option">
              <input class="color-selector" id="subButtonColor" type="color" />
            </div>
          </div>
          <div class="settings-row">
            <div class="sr-head">
              <b class="sr-title">Button Hover Color</b>
              <span class="sr-desc">Change the color of the buttons hover color.</span>
            </div>
            <div class="sr-option">
              <input class="color-selector" id="buttonHoverColor" type="color" />
            </div>
          </div>
          <div class="settings-row" style="padding-left:20%">
            <div id="nav">
              <router-link to="/home">Now</router-link>
              <!-- <router-link to="/today">Today</router-link> -->
              <router-link to="/about">About</router-link>
            </div>
            <div class="sub-nav">
              <router-link class="sub-nav-item" to="/home" exact>  Now  </router-link>
              <router-link class="sub-nav-item" to="/home/schedule">Bell Schedule</router-link>
              <router-link class="sub-nav-item" to="/home/settings">Settings</router-link>
            </div>
          </div>
        </div>
      </div>
      <div class="settings-row">
        <div class="sr-head">
          <b class="sr-title">App Version</b>
          <span class="sr-desc">Please include the full version in bug reports</span>
        </div>
        <div class="sr-option" style="cursor: text">{{appVersion}}</div>
      </div>
    </div>
    <h5>This web app was produced by iTeam, a technology service club at LCHS.</h5>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Themes } from '../themes';
import { allGrades } from '@/schedule';
import QrcodeVue from 'qrcode.vue'

@Component({
  components: {
    QrcodeVue
  }
})
export default class Home extends Vue {
  public appVersion = `v${process.env.VUE_APP_VERSION} (b${process.env.VUE_APP_COMMIT_COUNT.trim()}#${process.env.VUE_APP_COMMIT_SHASH.trim()})`;
  colorThemeId = this.$store.state.settings.colorTheme;
  startTimeAmount = this.$store.state.settings.startTime;
  endTimeAmount = this.$store.state.settings.endTime;
  notificationsStatus = this.$store.state.settings.notificationsOn;
  grade = allGrades[2];
  allGrades = allGrades;
  allThemes: any[] = [];
  showColorOptions = this.$store.state.settings.colorTheme === 'theme17';
  colorsPopulated = false;
  show = false;
  seeorhide = 'See';
  startorend = 'both';
  allTimes = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  // qrCode = new QRCode(document.getElementById("qrcode"), "http://jindo.dev.naver.com/collie");

  strGrade(grade: any){
    if (grade < 13 && grade > 3) {
      grade = String(grade);
      grade = grade.concat('th Grade');
    } else if (grade === 0) {
      grade = 'K/Pre K';
    } else if (grade === 1) {
      grade = '1st Grade';
    } else if (grade === 2) {
      grade = '2nd Grade';
    } else if (grade === 3) {
      grade = '3rd Grade';
    } else if (grade === 13) {
      grade = 'Event';
    }
    return grade;
  }

  strTime(time: any) {
    if (time === 1) {
      return (time.toString() + ' minute');
    } else {
      return (time.toString() + ' minutes');
    }
  }

  toggleShow() {
    if (this.$store.state.settings.notificationsOn) {
      this.show = !this.show;
      if (this.seeorhide === 'See') {
        this.seeorhide = 'Hide';
      } else {
        this.seeorhide = 'See';
      }
    } else {
      alert('Notifications must be on to edit advanced notification settings.');
    }
  }

  showOff() {
    this.show = false;
  }

  getNotifStatus() {
    // A way to refrence this boolean expression as a single variable
    // if (!(Notification.permission === "granted") && (this.$store.state.settings.notificationsOn)) {this.notifyMe()}
    // console.log('test');
    return (Notification.permission === 'granted') && (this.$store.state.settings.notificationsOn);
  }

  updateOptionBL(name: string, value: any): void {
    this.$store.commit('UPDATE_SETTING', { name, value });
  }

  updateColor = function() {
    var tempElements = document.getElementById("gradientColors")!.children;
    var elements = Array.from(tempElements).slice(2, tempElements.length);
    var colors = [];
    colors.push(document.getElementById("buttonColor")!.value);
    colors.push(document.getElementById("subButtonColor")!.value);
    colors.push(document.getElementById("buttonHoverColor")!.value);
    elements.forEach(function(element) {
      colors.push(element.querySelector("input").value);
    });
	  this.updateOptionBL('customColors', colors);
  }

  updateTheme() {
    this.updateOptionBL('colorTheme', this.colorThemeId);
    this.showColorOptions = this.$store.state.settings.colorTheme === 'theme17';
    this.colorsPopulated = false;

    if (this.showColorOptions && !this.colorsPopulated) {
      let self = this;
      setTimeout(function(){ self.populateColors(); }, 50);
    }
  }

  updateGrade() {
    this.updateOptionBL('grade', this.grade);
  }

  updateStartTime() {
    this.updateOptionBL('startTime', this.startTimeAmount);
  }

  updateEndTime() {
    this.updateOptionBL('endTime', this.endTimeAmount);
  }

  notifyMe() {
    // Let's check if the browser supports notifications
    let temp = this;
    if (!('Notification' in window)) {
      alert('This browser does not support desktop notification');
    }

    else if (Notification.permission === 'denied') {
      alert('You have blocked notifications for this website. In order to enable popup notifications, you must click on the lock symbol next to your address bar and set notifications to "allow"');
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
        tag: String(this.$store.state.settings.numberOfClicks),
      });
      temp.notificationsStatus = true;
      temp.show = true;
      temp.updateOptionBL('notificationsOn', true);
    }

    // Otherwise, we need to ask the user for permission
    else {
      Notification.requestPermission().then((permission) => {
        // If the user accepts, let's create a notification
        if (permission === 'granted') {
          let notification = new Notification('LCHS Go', {
            body: 'Notifications are now on!',
            badge: 'https://go.lciteam.club/favicon.ico',
            icon: 'https://go.lciteam.club/favicon.ico',
            vibrate: [200, 100, 200],
            silent: false,
            tag: String(temp.$store.state.settings.numberOfClicks),
          });
          temp.notificationsStatus = true;
          // console.log('test');
          temp.updateOptionBL('notificationsOn', true);
        }
        else {
          alert('In order to enable popup notifications, you must click allow. \n(If you don\'t want notifications, you can disable them in settings to avoid this popup)');
          temp.notificationsStatus = false;
        }
      });

      // At last, if the user has denied notifications, and you
      // want to be respectful there is no need to bother them any more.
    }
  }

  updateStats() {
    this.$store.state.settings.numberOfClicks = this.$store.state.settings.numberOfClicks + 1;
  }

  addColorRandom() {
    this.addColor('#' + Math.floor(Math.random() * 16777215).toString(16));
  }

  addColor(color: string) {
    let colors = document.getElementById("gradientColors");
    let div = document.createElement("div");

    div.className = "color-box";
  	div.innerHTML = "<input class=\"color-selector\" type=\"color\" value=\"" + color + "\"><span class=\"material-icons material-icons-outlined trash-button\">delete_outline</span>";
    

    colors.appendChild(div);
  }

  populateColors() {
    var col1 = document.getElementById("col1");
    var col2 = document.getElementById("col2");
    col1.value = this.$store.state.settings.customColors[3];
    col2.value = this.$store.state.settings.customColors[4];

    let colors = this.$store.state.settings.customColors.slice(5, this.$store.state.settings.customColors.length);
    for(let i = 0; i < colors.length; i++) {
      this.addColor(colors[i]);
    }

    var largB = document.getElementById("buttonColor")!;
    var smolB = document.getElementById("subButtonColor")!;
    var hovrB = document.getElementById("buttonHoverColor")!;
    largB.value = this.$store.state.settings.customColors[0];
    smolB.value = this.$store.state.settings.customColors[1];
    hovrB.value = this.$store.state.settings.customColors[2];

    this.colorsPopulated = true;
  }

  getQRValue() {
    const qrUrl = new URL("https://go.lciteam.club/home/settings");
    var customColors = this.$store.state.settings.customColors;

    qrUrl.searchParams.append("largeButton", customColors[0].replaceAll('#', ''));
    qrUrl.searchParams.append("smallButton", customColors[1].replaceAll('#', ''));
    qrUrl.searchParams.append("hoverButton", customColors[2].replaceAll('#', ''));
    qrUrl.searchParams.append("colors", customColors.slice(2, customColors.legth).toString().replaceAll('#', ''));

    return qrUrl.toString();
  }

  toggleQRCode() {
    document.getElementById("qr-container").classList.toggle("hidden");
  }

  qrTextSelect(event:Event) {
    console.log(event);
    console.log(event.target);
    event.target.select();
  }

  mounted() {
    let self = this;

    // this part is to prevent invalid grade values
    this.grade = this.$store.state.settings.grade;
    this.endTimeAmount = this.$store.state.settings.endTime;
    this.startTimeAmount = this.$store.state.settings.startTime;

    if (allGrades.indexOf(this.grade) === -1) {
      this.grade = allGrades[2];

      this.updateGrade();
    }

    setInterval(this.updateStats, 5000);
    this.updateStats();

    this.allThemes = Themes;

    document.addEventListener('click', function(event) {
        if (event.target && event.target.innerHTML == 'delete_outline') {
        var colors = document.getElementById("gradientColors");
        if (colors.children.length > 1) {
          event.target.parentElement.remove();
          self.updateColor();
        }
      }
      }
    );
	  document.addEventListener('input', function(event) {
      if (event.target && event.target.className == 'color-selector') {
        self.updateColor();
      }
    });
    if (this.showColorOptions && !this.colorsPopulated) {
      const queryString = window.location.search;
      const urlParams = new URLSearchParams(queryString);

      const large = '#' + urlParams.get('largeButton');
      if (urlParams.has('largeButton')) {
        const small = '#' + urlParams.get('smallButton');
        const hover = '#' + urlParams.get('hoverButton');

        var colorArray = [large,small,hover];
        const colors = ('#' + urlParams.get('colors')!.replaceAll(',', ',#')).split(',');
        colorArray = colorArray.concat(colors);

        this.updateOptionBL('customColors', colorArray);
      }
      this.populateColors();
    }
  }
}
</script>

<style lang="scss">
.settings-rows {
  text-align: left;
}

.settings-row {
  padding: 10px 16px;
  border-radius: 4px;
  margin: 5px 0;
  cursor: default;

  &:hover {
    background-color: rgba(0, 0, 0, 0.04);
  }

  .sr-head {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }

  .sr-title {
    color: rgba(255, 255, 255, 0.8);
    display: inline;
    font-size: 1.2em;
    margin-right: 8px;
  }

  .sr-badge-new {
    background-color: rgba(18, 15, 43, 0.3);
    color: rgba(255, 255, 255, 0.8);
    border-radius: 2px;
    display: inline-block;
    font-size: 10px;
    padding: 2px 6px;
    margin-right: 8px;
  }

  .sr-desc {
    font-size: 0.9em;
    display: inline;
    color: rgba(255, 255, 255, 0.7);
  }

  .sr-option {
    font-weight: 600;
    margin: 8px 0;
  }
}

.ex-selector {
  background: rgba(0, 0, 0, 0.08);
  display: inline-block;
  padding: 4px 4px;
  border-radius: 2px;

  .ex-selector-option {
    // background: rgba(0, 0, 0, .1);
    display: inline-block;
    padding: 4px 12px;
    margin: 0 2px;
    min-width: 80px;
    text-align: center;
    border-radius: 2px;
    cursor: pointer;
    transition: 100ms ease;
    color: rgba(255, 255, 255, 0.7);
    box-sizing: border-box;

    &:hover {
      background: rgba(0, 0, 0, 0.05);
    }
    &.selected {
      background: rgba(0, 0, 0, 0.2);
      cursor: default;
      color: rgba(255, 255, 255, 1);
    }
  }
}

select.grade-select {
  color: #ffffff;
  background: rgba(0, 0, 0, 0.2);
  padding: 5px;
  text-decoration-color: white;
  font-weight: 600;
  font-family: Niramit, Avenir, sans-serif;
  border-color: rgba(0, 0, 0, 0);
  border-width: 1px;
  border-radius: 3px;
  outline: none;
}

option.grade-select-item {
  color: rgba(255, 255, 255, 0.6);

  background: var(--button-menu-color, #42b983);
  padding: 5px;
  text-decoration-color: white;
  font-weight: 600;
  font-family: Niramit, Avenir, sans-serif;
  border-color: rgba(0, 0, 0, 0);
  border-width: 1px;
  border-radius: 3px;
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
    background-color: var(--button-hover-color, rgba(#2f9768, 0.4));
  }

  &.router-link-exact-active {
    background-color: var(--button-submenu-color, #2f9768);
    box-shadow: 0 0 8px 4px rgba(100, 100, 100, 0.1);
  }
}

.gradient-colors {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  user-select: none;
}

.color-box {
  padding: 5px;
  background-color: rgba(0, 0, 0, 0.04);
  border-radius: 3px;
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  user-select: none;
}

.add-button {
  position: absolute;
  top: 0%;
  right: 0%;
  user-select: none;
  cursor: pointer;
}

.qr-button {
  position: absolute;
  top: 0%;
  right: 25px;
  user-select: none;
  cursor: pointer;
}

.qr-container {
  position: absolute;
  top: 25px;
  right: 25px;
  padding: 15px;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  transition-duration: 2000ms;
  transition: ease-in-out;
  transition-property: all;
  opacity: 100%;
  &.hidden {
    opacity: 0%;
    // display: none;
  }
  &>.url-text {
    box-sizing: border-box;
    width: 200px;
    overflow-x: scroll;
    white-space:nowrap;
    font: inherit;
    font-size: inherit;
    color: inherit;
    outline: none;
    border: none;
    background: none;
    user-select: none;
  }
}

.trash-button {
  user-select: none;
  cursor: pointer;
}

.color-selector {
  border-color: rgba(0, 0, 0, 0);
  border-radius: 3px;
  background-color: rgba(0, 0, 0, 0.1);
  width: 37px;
  height: 40px;
}
</style>
