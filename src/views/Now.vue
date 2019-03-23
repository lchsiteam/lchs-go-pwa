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
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { DateTime } from 'luxon';

import { printTime, getScheduleFromDay, getPeriod } from '@/schedule'
import { Day, Schedule, Period, getPeriodName } from '@/schedule/enums'
import { RegularSchedule, BlockEvenSchedule, BlockOddSchedule } from '@/schedule/schedules'

@Component({})
export default class Home extends Vue {
  private minutes: number = 0
  private schedule: Schedule = Schedule.NONE
  private currentPeriod = { start: 0, end: 1440, period: Period.NONE }

  updateStats() {
    const currentDate = DateTime.local().setZone("America/Los_Angeles")
    this.minutes = currentDate.minute + (currentDate.hour * 60)
    this.schedule = getScheduleFromDay(currentDate.weekday)
    this.currentPeriod = getPeriod(this.minutes, this.schedule)
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
    if (this.schedule == Schedule.REGULAR) return "regular schedule."
    else if (this.schedule == Schedule.BLOCK_ODD) return "block schedule (1-3-5)."
    else if (this.schedule == Schedule.BLOCK_EVEN) return "block schedule (2-4-6)."
    else if (this.schedule == Schedule.ASSEMBLY) return "assembly schedule."
    else return "free."
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
    let new_hours = (hours === 0 ? 12 : hours % 12)     // Show 12:00 AM instead of 00:00 AM
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

  mounted() {
    setInterval(this.updateStats, 5000)
    this.updateStats()
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
