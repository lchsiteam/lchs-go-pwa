<template>
  <div class="bell-schedule-pg">
    <!-- Place the table in the Bell Schedule page for now -->
    <h3>Schedule: {{getCurrentScheduleName()}}</h3>
    <p class="gradeMessage">You are viewing the</p>
    <select v-model="grade" @change="changeGrade()" class = "grade-select">
      <option v-for="grade in allGrades" :key="grade" :value="grade" class = "grade-select-item">{{strGrade(grade)}}</option> 
    </select>
    <p class="gradeMessage">schedule.</p>
    <!-- Please replace this! -->
    <div class='bell-schedule-datepicker'>
      <div v-if='canUseLeft()' class="blsch-dp-left" @click="updateShift(-1)">&#8592;</div>
      <div class="blsch-dp-status">
        <vc-date-picker @input="updateStats(); updateStats()"
          class='date-picker'
          v-model="date"
          value="null"
          color="red"
          is-dark
          :min-date='minDate'
          :max-date='maxDate'
          :show-day-popover=true>
          <input type="text" name="intexts" :value="'Viewing '+ getCurrentShiftMsg()" disabled></input>
        </vc-date-picker>
      </div>
      <div v-if='canUseRight()' class="blsch-dp-right" @click="updateShift(1)">&#8594;</div>
    </div>
    
    <div class="bell-schedule" v-if="getCurrentScheduleName() != 'free'">
      <div class="blsch-period-hd">
        <div class="blsch-period-title">Period</div>
        <div class="blsch-period-start">Start</div>
        <div class="blsch-period-end">End</div>
      </div>
      <div class="blsch-period-container" v-for="period of getFullSchedule()" :key="period.period">
        <div class="blsch-period" :class="{ selected: selected(period) }">
          <div class="blsch-period-title">{{getPeriodName(period.period)}}</div>
          <div class="blsch-period-start">{{getCertainTime(period.start)}}</div>  
          <div class="blsch-period-end">{{getCertainTime(period.end)}}</div>
        </div>
      </div>
    </div>
    <div v-else>
      There is no bell schedule on this day.
    </div>
  </div>
</template>

<style lang="scss" scoped>
div.bell-schedule {
  text-align: left;

  div.blsch-period, .blsch-period-hd {
    & > div { display: inline-block; }
    .blsch-period-title,
    .blsch-period-start,
    .blsch-period-end { padding: 6px 16px; box-sizing: border-box; }
    .blsch-period-title { min-width: 80px; width: 50%; }
    .blsch-period-start { min-width: 40px; width: 25%; }
    .blsch-period-end { min-width: 40px; width: 25%; }
    transition: 150ms ease;
  }

  div.blsch-period-hd {
    background: rgba(0, 0, 0, .25);
  }

  div.blsch-period-container:nth-child(2n) > .blsch-period {
    background: rgba(0, 0, 0, .05);
  }

  div.blsch-period-container:nth-child(2n+1) > .blsch-period{
    background: rgba(0, 0, 0, .1);
  }

  div.blsch-period.selected {
    background: rgba(0, 0, 0, .4) !important;
    transform: scale(1.05);
  }
}

div.gradeMessage {
  font-size: 15px;
}

.bell-schedule-datepicker {
  padding: 10px;
  div {
    display: inline-block;
  }
  .blsch-dp-left,
  .blsch-dp-right {
    font-weight: bold;
    padding: 0 5px;
    cursor: pointer;
    transition: 150ms ease;
  }
  .blsch-dp-left:hover {
    transform: translateX(-5px);
  }
  .blsch-dp-right:hover {
    transform: translateX(5px);
  }
  .blsch-dp-status {
    min-width: 220px;
    cursor: pointer;
    border-radius: 4px;
    padding: 0 10px;
    font-weight: bold;
  }
}

.date-picker /deep/ input {
  display: block !important;
  width: 250px;
  color: rgba(255, 255, 255, 10) !important;
  background-color: var(--button-submenu-color, #2f9768) !important;
  background-clip: padding-box !important;
  border: 0px solid #ffffff !important;
  transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out !important;
  text-align: center;
  padding: .25rem 0rem !important;
  font-size: 1.0rem !important;
  line-height: 1.5 !important;
  border-radius: .4rem !important;
  box-shadow: 0 4px 16px 8px rgba(0, 0, 0, .15);
  align: center !important;
  margin-bottom: 20px;
  font-family: 'Niramit', Avenir, sans-serif;
  font-weight: bold;
}

.gradeMessage {
  font-size: 15px;
  display: inline;
  padding: 5px;
}
select.grade-select {
  color: #ffffff;
  background: rgba(0,0,0,.2);
  padding: 0px;
  text-decoration-color: white;
  font-weight: 600;
  font-family: Niramit,Avenir,sans-serif;
  border-color:rgba(0,0,0,0);
  border-width: 1px;
  border-radius: 3px;
} 
option.grade-select-item  {
color: rgba(255, 255, 255, 0.6);

  background: var(--button-menu-color, #42b983);
  padding: 5px;
  text-decoration-color: white;
  font-weight: 600;
  font-family: Niramit,Avenir,sans-serif;
  border-color:rgba(0,0,0,0);
  border-width: 1px;
  border-radius: 3px;
}

</style>

<script src='https://unpkg.com/vue/dist/vue.js'></script>
<script src='https://unpkg.com/v-calendar'></script>

<script lang="ts">
import { Themes } from '../themes';
import { Component, Vue } from 'vue-property-decorator';
import { DateTime, Duration } from 'luxon';

import { printTime, getScheduleFromDay, getPeriod, getFullSchedule, allGrades,
plusDays, plusMins } from '@/schedule';
import { Day, Schedule, Period, getPeriodName, getScheduleName } from '@/schedule/enums';
import { RegularSchedule, BlockEvenSchedule, BlockOddSchedule } from '@/schedule/schedules';
import { MDYDate } from '@/schedule/mdy_date';

import VCalendar from 'v-calendar';
import 'v-calendar/lib/v-calendar.min.css';

Vue.use(VCalendar, {
  componentPrefix: 'vc',
  data: {
    date: new Date(),
  },
});

@Component({})
export default class Home extends Vue {
  private allGrades = allGrades;
  private minDate = new Date(2020, 7, 1);
  private maxDate = new Date(2021, 4, 31);
  private minutes: number = 0;
  private schedule: Schedule = Schedule.NONE;
  private grade = allGrades[2];
  private currentPeriod = { start: 0, end: 1440, period: Period.NONE };
  private date = new Date();
  private daysShifted = 0;
  private arrowsUsed = true;

  public updateStats() {
    // console.log(plusDays);

    const currentDate = DateTime.local().setZone('America/Los_Angeles').plus(Duration.fromMillis((this.daysShifted + plusDays) * 86400000 + plusMins * 60 * 1000));
    this.minutes = currentDate.minute + (currentDate.hour * 60);

    this.grade = this.$store.state.settings.grade;
    this.schedule = getScheduleFromDay(currentDate.month, currentDate.day, currentDate.year, currentDate.weekday, this.grade);
    this.currentPeriod = getPeriod(this.minutes, this.schedule, this.grade);
    if (this.arrowsUsed) {
      this.date = new Date(new Date().valueOf() + this.daysShifted * 86400000);
    }
    this.arrowsUsed = false;
    this.daysShifted = Math.ceil((this.date.valueOf() - new Date().valueOf()) / 86400000);
  }

  selected(period: any) {
    return this.daysShifted === 0 && this.currentPeriod === period;
  }

  getGreeting() {
    if (this.minutes <= 330) { return 'Good late evening.'; }
    else if (this.minutes <= 720) { return 'Good morning.'; }
    else if (this.minutes <= 1050) { return 'Good afternoon.'; }
    else if (this.minutes <= 1440) { return 'Good evening.'; }
    else { return 'Hello, student.'; }
  }

  getCurrentShiftMsg() {
    // Stopgap solution for calendar!
    // You must implement the calendar properly!
    const today = DateTime.local().setZone('America/Los_Angeles');
    const shifted = today.plus(Duration.fromMillis(this.daysShifted * 86400000));

    if (this.daysShifted === 0) { return `Today (${shifted.month}/${shifted.day})`; }
    else if (this.daysShifted === 1) { return `Tomorrow (${shifted.month}/${shifted.day})`; }
    else if (this.daysShifted === -1) { return `Yesterday (${shifted.month}/${shifted.day})`; }
    else if (today.weekNumber - 1 === shifted.weekNumber) { return `last ${shifted.weekdayLong} (${shifted.month}/${shifted.day})`; }
    else if (today.weekNumber === shifted.weekNumber) { return `this ${shifted.weekdayLong} (${shifted.month}/${shifted.day})`; }
    else if (today.weekNumber + 1 === shifted.weekNumber) { return `next ${shifted.weekdayLong} (${shifted.month}/${shifted.day})`; }
    else { return `${shifted.monthShort} ${shifted.day}`; }
  }

  compareDates(first: Date, second: Date) {
    let firstObj = new MDYDate(first.getMonth(), first.getDate(), first.getFullYear());
    let secondObj = new MDYDate(second.getMonth(), second.getDate(), second.getFullYear());

    return firstObj.firstNonzero_diff(secondObj);
  }

  canUseLeft() {
    return this.compareDates(this.date, this.minDate) > 0;
  }

  canUseRight() {
    return this.compareDates(this.date, this.maxDate) < 0;
  }

  data() {
    return {
      date: new Date(new Date().valueOf() + this.daysShifted * 86400000),
    };
  }

  updateShift(shiftBy: number) {
    this.daysShifted += shiftBy;
    this.arrowsUsed = true;
    this.updateStats();
  }

  printTime(time: number) {
    return printTime(time);
  }

  getPeriodName(period: Period): string {
    return getPeriodName(period);
  }

  getCurrentPeriodName() {
    return getPeriodName(this.currentPeriod.period);
  }

  getFormattedTimeUntilNext() {
    return this.getTimeUntilNext() >= 120 ? Math.ceil(this.getTimeUntilNext() / 60) : this.getTimeUntilNext();
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
    return this.currentPeriod.end - this.minutes;
  }

  getUnitUntilNext() {
    return this.currentPeriod.end - this.minutes >= 120 ? 'hr.' : 'min.';
  }
  strGrade(grade: any){
    if (grade < 13 && grade > 3) {
      grade = String(grade);
      grade = grade.concat('th Grade');
    } else if (grade === 0) {
      grade = 'TK/K';
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

  getFullSchedule() {
    let grade = this.$store.state.settings.grade;

    return getFullSchedule(this.schedule, grade).filter(({period}: any) => {
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
        Period.TBD,
        Period.OFFICE,
        Period.SMALL_GROUP,
        Period.ARRIVAL,
        Period.ARRIVAL_A,
        Period.ARRIVAL_B,
        Period.RECESS,
        Period.RECESS_PE,
        Period.PREP,
        Period.SMALL_GROUP_P0,
        Period.SMALL_GROUP_P1,
        Period.SMALL_GROUP_P2,
        Period.SMALL_GROUP_P3,
        Period.SMALL_GROUP_P4,
        Period.SMALL_GROUP_P5,
        Period.SMALL_GROUP_P6,
        Period.SMALL_GROUP_CLUBS,
        Period.SMALL_GROUP_WELLNESS,
      ].indexOf(period) !== -1 || this.$store.state.settings.showExtraPeriods;
    });
  }

  getCurrentTime() {
    return ('0000' + Math.floor(this.minutes / 60)).substr(-2) + ':' + ('0000' + (this.minutes % 60)).substr(-2);
  }

  public getCertainTime12(time: number) {
    let endString = 'AM';
    let hours = Math.floor(time / 60);
    let newHours = (hours % 12 === 0 ? 12 : hours % 12);     // Show 12:00 AM instead of 00:00 AM
    if (hours >= 12 && hours <= 23) {
      endString = 'PM';
    }
    return `${newHours + ':' + ('0000' + (time % 60)).substr(-2)} ${endString}`;
  }

  public getCertainTime24(time: number) {
    return ('0000' + Math.floor(time / 60)).substr(-2) + ':' + ('0000' + (time % 60)).substr(-2);
  }

  public getCertainTime(time: number) {
    return this.$store.state.settings.useMilitaryTime ? this.getCertainTime24(time) : this.getCertainTime12(time);
  }

  public updateOptionBL(name: string, value: any): void {
    this.$store.commit('UPDATE_SETTING', { name, value });
  }

  public changeGrade(grade: number) {
    this.updateOptionBL('grade', this.grade);

    this.updateStats();
  }

  public mounted() {
    // correct invalid grade settings to 9th grade if any
    let grade = this.$store.state.settings.grade;

    if (allGrades.indexOf(grade) === -1) {
      grade = allGrades[2];

      this.changeGrade(grade);
    }
    // note that this didn't make any assignments to this.grade. That's because this part is just to correct invalid settings.

    setInterval(this.updateStats, 5000);
    this.updateStats();
  }
}
</script>
