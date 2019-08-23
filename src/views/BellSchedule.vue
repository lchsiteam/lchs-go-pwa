<template>
  <div class="bell-schedule-pg">
    <!-- Place the table in the Bell Schedule page for now -->
    <h3>Today: {{getCurrentScheduleName()}}</h3> 
    <p class="gradeMessage">You are viewing the {{this.grade}}th grade schedule. To change grades, go to About -> Settings. </p> 
    <p>Click the black arrow to display a calendar selection.</p>
    <label for="start">Enter date:</label>
    <input type="date" id="start" name="day-of-school"
      v-model="this.date"
      min="2019-07-01" max="2020-5-3">
    <p>{{this.date}}</p>
    
    <div class="bell-schedule" v-if="getCurrentScheduleName() != 'free'">
      <div class="blsch-period-hd">
        <div class="blsch-period-title">Period</div>
        <div class="blsch-period-start">Start</div>
        <div class="blsch-period-end">End</div>
      </div>
      <div class="blsch-period-container" v-for="period of getFullSchedule()" :key="period.period">
        <div class="blsch-period" :class="{ selected: currentPeriod.period === period.period }">
          <div class="blsch-period-title">{{getPeriodName(period.period)}}</div>
          <div class="blsch-period-start">{{getCertainTime(period.start)}}</div>
          <div class="blsch-period-end">{{getCertainTime(period.end)}}</div>
        </div>
      </div>
    </div>
    <div v-else>
      There is no bell schedule today.
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bell-schedule {
  text-align: left;

  .blsch-period, .blsch-period-hd {
    & > div { display: inline-block; }
    .blsch-period-title,
    .blsch-period-start,
    .blsch-period-end { padding: 6px 16px; box-sizing: border-box; }
    .blsch-period-title { min-width: 80px; width: 50%; }
    .blsch-period-start { min-width: 40px; width: 25%; }
    .blsch-period-end { min-width: 40px; width: 25%; }
    transition: 150ms ease;
  }

  .blsch-period-hd {
    background: rgba(0, 0, 0, .25);
  }

  .blsch-period-container:nth-child(2n) > .blsch-period {
    background: rgba(0, 0, 0, .05);
  }

  .blsch-period-container:nth-child(2n+1) > .blsch-period{
    background: rgba(0, 0, 0, .1);
  }

  .blsch-period.selected {
    background: rgba(0, 0, 0, .4) !important;
    transform: scale(1.05);
  } 
} 

.gradeMessage {
  font-size: 15px; 
}
</style>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { DateTime, Duration } from 'luxon'

import { printTime, getScheduleFromDay, getPeriod, getFullSchedule, allGrades, 
plus_days } from '@/schedule'
import { Day, Schedule, Period, getPeriodName, getScheduleName } from '@/schedule/enums'
import { RegularSchedule, BlockEvenSchedule, BlockOddSchedule } from '@/schedule/schedules'; 

@Component({})
export default class Home extends Vue {
  private minutes: number = 0
  private schedule: Schedule = Schedule.NONE; 
  private grade = allGrades[2]; 
  private date = ""
  private currentPeriod = { start: 0, end: 1440, period: Period.NONE }; 


  updateStats() {
    const currentDate = DateTime.local().setZone("America/Los_Angeles").plus(Duration.fromMillis(plus_days * 86400000)); 
    this.minutes = currentDate.minute + (currentDate.hour * 60) 
    this.date = `${currentDate.year}-${currentDate.month}-${currentDate.day}`; 
    this.grade = this.$store.state.settings.grade; 
    this.schedule = getScheduleFromDay(currentDate.month, currentDate.day, currentDate.year, currentDate.weekday, this.grade); 
    this.currentPeriod = getPeriod(this.minutes, this.schedule, this.grade); 
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

  getPeriodName(period: Period): string {
    return getPeriodName(period)
  }

  getCurrentPeriodName() {
    return getPeriodName(this.currentPeriod.period)
  }

  getFormattedTimeUntilNext() {
    return this.getTimeUntilNext() >= 120 ? Math.ceil(this.getTimeUntilNext() / 60) : this.getTimeUntilNext()
  }

  // Prevent duplication
  // TODO: Consolidate schedule names into one place to follow DRY
  // DRY = Don't Repeat Yourself (eg: prevent duplication)
  getCurrentScheduleName() {
    return getScheduleName(this.schedule); 

    /*
    switch (this.schedule) {
      case Schedule.REGULAR:            return 'regular schedule'; 
      case Schedule.BLOCK_ODD:          return 'block schedule (1, 3, 5)'; 
      case Schedule.BLOCK_EVEN:         return 'block schedule (2, 4, 6)'; 
      case Schedule.SPECIAL_BLOCK_ODD:  return 'block schedule (3, 1, 5)'; 
      case Schedule.SPECIAL_BLOCK_EVEN: return 'block schedule (4, 2, 6)'; 
      case Schedule.ASSEMBLY:           return 'assembly schedule'; 
      case Schedule.MINIMUM:            return 'minimum schedule'; 
      case Schedule.NONE:               return 'no schedule';
      default:                          return 'error'; 
    } 
    */ 
  } 

  getTimeUntilNext() {
    return this.currentPeriod.end - this.minutes
  }

  getUnitUntilNext() {
    return this.currentPeriod.end - this.minutes >= 120 ? "hr." : "min."
  }

  getFullSchedule() {
    let grade = this.$store.state.settings.grade; 

    return getFullSchedule(this.schedule, grade).filter(({period} : any) => {
      // Dirty solution for filtering schedule.
      // TODO: Move this elsewhere.
      return [
        Period.PERIOD_0,
        Period.PERIOD_1,
        Period.PERIOD_2,
        Period.PERIOD_3,
        Period.PERIOD_4,
        Period.PERIOD_5,
        Period.PERIOD_6,
        Period.LUNCH,
        Period.BREAK,
        Period.STEP_ODD,
        Period.STEP_EVEN,
        Period.HOMEROOM, 
        Period.ASSEMBLY,
      ].indexOf(period) !== -1 || this.$store.state.settings.showExtraPeriods
    })
  }

  getCurrentTime() {
    return ("0000" + Math.floor(this.minutes / 60)).substr(-2) + ":" + ("0000" + (this.minutes % 60)).substr(-2)
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

  updateOptionBL(name: string, value: any): void {
    this.$store.commit('UPDATE_SETTING', { name, value }); 
  } 

  changeGrade(grade: number) {
    this.updateOptionBL('grade', grade); 
  } 

  mounted() {
    //correct invalid grade settings to 9th grade if any
    let grade = this.$store.state.settings.grade; 
    
    if(allGrades.indexOf(grade) == -1) {
      grade = allGrades[2]; 
      
      this.changeGrade(grade); 
    } 
    //note that this didn't make any assignments to this.grade. That's because this part is just to correct invalid settings. 
    
    setInterval(this.updateStats, 5000)
    this.updateStats()
  }
}
</script>
