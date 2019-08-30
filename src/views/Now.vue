   <div class="grid-fmr-helper">REMAINING TIME</div>
      <div class="grid-fmr-value">
        <div>
          <span class="cd-num" v-if="(getFormattedTimeUntilNext()[0]!=0)">{{getFormattedTimeUntilNext()[0]}}</span>
          <span class="cd-txt" v-if="(getFormattedTimeUntilNext()[0]!=0)">hr. </span>
          <span class="cd-num">{{getFormattedTimeUntilNext()[1]}}</span>
          <span class="cd-txt">min.</span>
          <span class="cd-txt">until {{getUntilNextName()}}</span>
        </div>
        <div class="cd-txt-h">({{Math.round(getCurrentPercentage() * 100)}}% completed)</div>
      </div>
      <div class="grid-fmr-absmode">
        <span v-if="useNextPeriodStartAsEnd">UNTIL NEXT (BETA)</span>
        <span v-else>PERIOD END</span>
      </div>
    </div>
    <div class="grid-fmr">
      <div class="grid-fmr-helper">CURRENT TIME / LAST UPDATED</div>
      <div class="grid-fmr-value">
        <div>{{getCurrentTimeParts().hr}}<span class="cd-blink" :class="{disabled: !this.$store.state.settings.enableAnimations}">:</span>{{getCurrentTimeParts().min}}</div>
        <div class="cd-txt-h">(This page updates time automatically)</div>
      </div>
    </div>
    <p>Today is <a class="a">{{currentDate}}% completed</a>.</p>
    <div class='grid-fmr grid-fmr-mini-click' v-if="shouldShowUpdateLog()" @click='goToChangelog()'>
      <div class="grid-fmr-helper">UNREAD UPDATES</div> 
      <div v-for='entry in getUnreadUpdates()' :key='entry.id'>○ {{entry.title}}</div> 
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { DateTime, Duration } from 'luxon';
import { printTime, getScheduleFromDay, getPeriod, getUpcomingPeriod, allGrades, plus_days } from '@/schedule';
import { Day, Schedule, Period, getPeriodName, getScheduleName } from '@/schedule/enums';
import { RegularSchedule, BlockEvenSchedule, BlockOddSchedule } from '@/schedule/schedules';
import { Changelog } from '../changelog'; 
@Component({})
export default class Now extends Vue {
  private minutes: number = 0
  private currentDateTime: any
  private schedule: Schedule = Schedule.NONE; 
  private grade = allGrades[2]; 
  private currentPeriod = { start: 0, end: 1440, period: Period.NONE }; 
  private allLogs: any[] = []
  public useNextPeriodStartAsEnd = false    // TODO: Find a better variable name
@@ -271,28 +270,25 @@
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
.gradeMessage {
  font-size: 15px; 
  
  a.a {
  color: rgb(168, 230, 255);
}
</style>
