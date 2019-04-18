<template>
  <div class="now">
    <h3>{{getGreeting()}} Today is {{getCurrentScheduleName()}}</h3>
    <div class="grid-fmr">
      <div class="grid-fmr-helper">CURRENT PERIOD</div>
      <div class="grid-fmr-value">{{getCurrentPeriodName()}}</div>
    </div>
    <div class="grid-fmr">
      <div class="grid-fmr-helper">REMAINING TIME</div>
      <div class="grid-fmr-value">
        <div>
          <span class="cd-num">{{getFormattedTimeUntilNext()}}</span>
          <span class="cd-txt">{{getUnitUntilNext()}} until {{getUntilNextName()}}</span>
        </div>
        <div class="cd-txt-h">
          <b>{{getCertainTime(currentPeriod.start)}} - {{getCertainTime(currentPeriod.end)}}</b>
        </div>
        <div class="cd-txt-h">({{Math.round(getCurrentPercentage() * 100)}}% completed)</div>
      </div>
    </div>
    <div class="grid-fmr">
      <div class="grid-fmr-helper">CURRENT TIME / LAST UPDATED</div>
      <div class="grid-fmr-value">
        <div>{{getCurrentTimeParts().hr}}<span class="cd-blink" :class="{disabled: !this.$store.state.settings.enableAnimations}">:</span>{{getCurrentTimeParts().min}}</div>
        <div class="cd-txt-h">(This page updates time automatically)</div>
      </div>
    </div>
    <div class="grid-fmr grid-fmr-mini-click" @click="goToChangelog()" v-if="shouldShowUpdateLog()">
      <div class="grid-fmr-helper">UNREAD UPDATES</div>
      <div class="grid-fmr-value">LCHS Go has a new settings page + Chrome extension! Tap/click here to read more.</div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { DateTime } from 'luxon';

import { printTime, getScheduleFromDay, getPeriod } from '@/schedule';
import { Day, Schedule, Period, getPeriodName } from '@/schedule/enums';
import { RegularSchedule, BlockEvenSchedule, BlockOddSchedule } from '@/schedule/schedules';
import { Changelog } from '../changelog'

@Component({})
export default class Home extends Vue {
  private minutes: number = 0
  private schedule: Schedule = Schedule.NONE
  private currentPeriod = { start: 0, end: 1440, period: Period.NONE }
  private allLogs: any[] = []

  updateStats() {
    const currentDate = DateTime.local().setZone("America/Los_Angeles")
    this.minutes = currentDate.minute + (currentDate.hour * 60)
    this.schedule = getScheduleFromDay(currentDate.month, currentDate.day, currentDate.year, currentDate.weekday)
    this.currentPeriod = getPeriod(this.minutes, this.schedule)
  }

  goToChangelog() {
    this.$router.push('/about/changelog')
  }

  shouldShowUpdateLog() {
    return !this.$store.state.isExtension && 
      this.allLogs.map(l => l.id).filter(id => this.$store.state.changelog.readUpdates.indexOf(id) === -1).length > 0
  }

  getGreeting() {
    if (this.minutes <= 330) return "Good late evening." 
    else if (this.minutes <= 720) return "Good morning." 
    else if (this.minutes <= 1050) return "Good afternoon." 
    else if (this.minutes <= 1440) return "Good evening." 
    else return "Hello, student."
  }

  printTime(time: number) {
    return printTime(time)
  }

  getCurrentPeriodName() {
    return getPeriodName(this.currentPeriod.period)
  }

  getFormattedTimeUntilNext() {
    return this.getTimeUntilNext() >= 120 ? Math.ceil(this.getTimeUntilNext() / 60) : this.getTimeUntilNext()
  }

  getCurrentScheduleName() {
    switch(this.schedule) {
      case Schedule.REGULAR: 
        return 'regular schedule'; 
        break; 
      case Schedule.BLOCK_ODD: 
        return 'block schedule (1, 3, 5) '; 
        break; 
      case Schedule.BLOCK_EVEN: 
        return 'block schedule (2, 4, 6) '; 
        break; 
      case Schedule.SPECIAL_BLOCK_ODD: 
        return 'block schedule (3, 1, 5) '; 
        break; 
      case Schedule.SPECIAL_BLOCK_EVEN: 
        return 'block schedule (4, 2, 6) '; 
        break; 
      case Schedule.ASSEMBLY: 
        return 'assembly schedule'; 
        break; 
      case Schedule.MINIMUM: 
        return 'minimum schedule'; 
        break; 
      case Schedule.NONE: 
        return 'free'; 
        break; 
      default: 
        return 'error'; 
        break; 
    } 
  }

  getTimeUntilNext() {
    return this.currentPeriod.end - this.minutes
  }

  getUnitUntilNext() {
    return this.currentPeriod.end - this.minutes >= 120 ? "hr." : "min."
  }

  getUntilNextName() {
    return this.currentPeriod.period == Period.DONE ? "next day" : "next period"
  }

  getCurrentTime24() {
    return ("0000" + Math.floor(this.minutes / 60)).substr(-2) + ":" + ("0000" + (this.minutes % 60)).substr(-2)
  }
 
  getCurrentTime12() {
    let end_string = "AM"
    let hours = Math.floor(this.minutes / 60)
    let new_hours = (hours % 12 === 0 ? 12 : hours % 12)     // Show 12:00 AM instead of 00:00 AM
    if (hours >= 12) {
      end_string = "PM"
    }
    return `${new_hours + ":" + ("0000" + (this.minutes % 60)).substr(-2)} ${end_string}`
  }
   
  getCurrentTime() {
    if (this.$store.state.settings.useMilitaryTime === false) {
      return this.getCurrentTime12()
    }
    else {
      return this.getCurrentTime24()
    }
  }

  getCertainTime12(time: number) {
    let end_string = "AM"
    let hours = Math.floor(time / 60)
    let new_hours = (hours % 12 === 0 ? 12 : hours % 12)     // Show 12:00 AM instead of 00:00 AM
    if (hours >= 12 && hours <= 23) {
      end_string = "PM"
    }
    return `${new_hours + ":" + ("0000" + (time % 60)).substr(-2)} ${end_string}`
  }

  getCertainTime24(time: number) {
    return ("0000" + Math.floor(time / 60)).substr(-2) + ":" + ("0000" + (time % 60)).substr(-2)
  }

  getCertainTime(time: number) {
    return this.$store.state.settings.useMilitaryTime ? this.getCertainTime24(time) : this.getCertainTime12(time)
  }

  getCurrentPercentage() {
    return 1 - (this.getTimeUntilNext() / (this.currentPeriod.end - this.currentPeriod.start))
  }

  getCurrentTimeParts24() {
    return {
      hr: ("0000" + Math.floor(this.minutes / 60)).substr(-2),
      min: ("0000" + (this.minutes % 60)).substr(-2)
    }
  }
 
  getCurrentTimeParts12() {
    let end_string = "AM"
    let hours = Math.floor(this.minutes / 60)
    let new_hours = (hours % 12 === 0 ? 12 : hours % 12)     // Show 12:00 AM instead of 00:00 AM
    if (hours >= 12) {
      end_string = "PM"
    }
    return {
      hr: new_hours,
      min: `${("0000" + (this.minutes % 60)).substr(-2)} ${end_string}`
    }
  }
 
  getCurrentTimeParts() {
    //to do: replace "12hourplaceholder" with object/variable that determines if 12-hour mode is turned on
    if (this.$store.state.settings.useMilitaryTime === false) {
      return this.getCurrentTimeParts12()
    }
    else {
      return this.getCurrentTimeParts24()
    }
  }
  
  //The following section will need yearly updates, if schedule changes, and an update when minimum day and finals scuedule are implemented

getDaysUntil() {

  const currentDate = DateTime.local().setZone("America/Los_Angeles")

  let currentMinutes = this.minutes % 60
  let currentHours = Math.floor(this.minutes/60)
  let day = currentDate.day
  let month = currentDate.month
  let year = currentDate.year

  var break_dates = { // first element in string is month 0-11, and second is day 1-31
    // replace w/ break days when implmented (the below is temporary)
    Summer_Break: "6,5",
    Spring_Break: "3,30",
    Assembly: "4,12",
    Memorial_Day: "5,27"
  };
  let closest = "13,1";
  for (var key in break_dates) {
      if ((parseInt(break_dates[key]).substring(0,1) < month) || ((parseInt(break_dates[key]).substring(0,1) === month) && (parseInt(break_dates[key]).substring(2,1) <= day))) {
          if((parseInt(break_dates[key]).substring(0,1) < parseInt(closest).substring(0,1)) || ((parseInt(break_dates[key]).substring(0,1) === parseInt(closest).substring(0,1)) && (parseInt(break_dates[key]).substring(2,1) < parseInt(closest).substring(2,1)))) {
              let closest = break_dates[key];
              let closest_name = key
          }
      }
  }

  const currentSchedule = getFullSchedule(getScheduleFromDay(DateTime.local(year, parseInt(closest.substring(0,1)), parseInt(closest.substring(2,1)), 0, 0).weekday()))
  let endTime = 0
  for (let period of currentSchedule) {
    if (period.period === Period.DONE) {
      let endTime = period.start
    }
  }

  //note: the above section of code will need to be changed for finals and minimum days when they are implemented
  // when creating custom date, is timezone adjustment needed?
  let closest_date_object = DateTime.local(year, parseInt(closest.substring(0,1)), parseInt(closest.substring(2,1))) //hour, //minute)
  let difference = closest_date_object.diff(currentDate, ["days", "hours", "minutes"])
  
  return difference[days] + " days, " + difference[hours] + " hours, and" + difference[minutes] + "minutes seconds of school remaining until " + closest_name.replace("_", " ") + "!"
}

  mounted() {
    setInterval(this.updateStats, 5000)
    this.updateStats()

    Changelog.forEach(version => {
      this.allLogs = this.allLogs.concat(version.entries)
    })
    this.allLogs = this.allLogs.filter(log => log.isPublic) 
  }
}
</script>

<style lang="scss" scoped>
.home {
  padding: 0 20px;
}
.cd-num {
  font-size: 36px;
}
.cd-txt {
  font-size: 18px;
  margin-left: 8px;
}
.cd-txt-h {
  font-size: 14px;
  font-weight: 400;
}

.grid-fmr {
  text-align: left;
  margin: 10px auto;
  padding: 6px 10px;
  background-color: rgba(0, 0, 0, .1);
  border: 1px solid rgba(0, 0, 0, .3);
}

.grid-fmr-helper {
  font-size: 12px;
  font-weight: 600;
  opacity: 0.6;
}

.grid-fmr-mini-click {
  background-color: rgba(0, 0, 0, .3);
  border: none;
  padding: 10px;
  cursor: pointer;
  transition: 100ms ease;

  &:hover { background-color: rgba(0, 0, 0, .4); }

  .grid-fmr-value {
    text-align: left;
    font-size: 14px;
  }
}

.grid-fmr-value {
  font-size: 36px;
  font-weight: bold;
  text-align: center;
}

@keyframes blinking {
  0% { opacity: 1; }
  50% { opacity: 0; }
  100% { opacity: 1; }
}

.cd-blink {
  animation: blinking 1s ease-in-out infinite;

  &.disabled { animation: none; }
}

a {
  color: rgb(168, 230, 255);
}
</style>
