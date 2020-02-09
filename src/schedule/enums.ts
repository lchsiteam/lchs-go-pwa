// enums.ts

// Here, I've defined some enums for the
// different day schedules, days of the week,
// and each period

enum Schedule {
  REGULAR,
  BLOCK_ODD,
  BLOCK_EVEN,
  SBAC_BLOCK_ODD,
  SBAC_BLOCK_EVEN,
  SBAC_SPECIAL_BLOCK_ODD,
  SBAC_SPECIAL_BLOCK_EVEN,
  EARLY_RELEASE,
  PRE_FINALS_3264,
  PRE_FINALS_2156,
  PRE_FINALS_1345,
  FINAL_ASSEMBLY,
  FINALS_34,
  FINALS_15,
  FINALS_26,
  FINALS_TBD,
  ASSEMBLY,
  MINIMUM,
  SUMMER_SCHOOL,
  NONE,
  NOEVENT,
  HSBACKTOSCHOOLNIGHT,
  WEIRD_ASSEMBLY,
}

enum Day {
  MONDAY = 1,
  TUESDAY = 2,
  WEDNESDAY = 3,
  THURSDAY = 4,
  FRIDAY = 5,
  SATURDAY = 6,
  SUNDAY = 7,
}

// Passing break is defined here as the
// short break after a certain period/block
enum Period {
  PERIOD_0,
  PERIOD_0_PASSING,
  PERIOD_1,
  PERIOD_1_PASSING,
  PERIOD_2,
  PERIOD_2_PASSING,
  BREAK,
  BREAK_PASSING,
  PERIOD_3,
  PERIOD_3_PASSING,
  LUNCH,
  LUNCH_PASSING,
  STEP_ODD,
  STEP_EVEN,
  STEP_PASSING,
  HOMEROOM,
  HOMEROOM_PASSING,
  ASSEMBLY,
  ASSEMBLY_PASSING,
  PERIOD_4,
  PERIOD_4_PASSING,
  PERIOD_5,
  PERIOD_5_PASSING,
  PERIOD_6,
  PERIOD_6_PASSING,
  TBD,
  NONE,
  EVENTNOPE,
  DONE,
}

export function getPeriodName(period: Period) {
  if (period === Period.PERIOD_0) { return 'Period 0'; }
  else if (period === Period.PERIOD_0_PASSING) { return 'Passing After Period 0'; }
  else if (period === Period.PERIOD_1) { return 'Period 1'; }
  else if (period === Period.PERIOD_1_PASSING) { return 'Passing After Period 1'; }
  else if (period === Period.PERIOD_2) { return 'Period 2'; }
  else if (period === Period.PERIOD_2_PASSING) { return 'Passing after Period 2'; }
  else if (period === Period.BREAK) { return 'Break'; }
  else if (period === Period.BREAK_PASSING) { return 'Passing After Break'; }
  else if (period === Period.PERIOD_3) { return 'Period 3'; }
  else if (period === Period.PERIOD_3_PASSING) { return 'Passing After Period 3'; }
  else if (period === Period.LUNCH) { return 'Lunch'; }
  else if (period === Period.LUNCH_PASSING) { return 'Passing After Lunch'; }
  else if (period === Period.STEP_ODD) { return 'STEP (odd)'; }
  else if (period === Period.STEP_EVEN) { return 'STEP (even)'; }
  else if (period === Period.HOMEROOM) { return 'Homeroom'; }
  else if (period === Period.HOMEROOM_PASSING) { return 'Passing after Homeroom'; }
  else if (period === Period.STEP_PASSING) { return 'Passing After STEP'; }
  else if (period === Period.ASSEMBLY) { return 'Assembly Period'; }
  else if (period === Period.ASSEMBLY_PASSING) { return 'Passing after Assembly'; }
  else if (period === Period.PERIOD_4) { return 'Period 4'; }
  else if (period === Period.PERIOD_4_PASSING) { return 'Passing After Period 4'; }
  else if (period === Period.PERIOD_5) { return 'Period 5'; }
  else if (period === Period.PERIOD_5_PASSING) { return 'Passing After Period 5'; }
  else if (period === Period.PERIOD_6) { return 'Period 6'; }
  else if (period === Period.PERIOD_6_PASSING) { return 'Passing after Period 6'; }
  else if (period === Period.TBD) { return 'To Be Determined'; }
  else if (period === Period.NONE) { return 'No School'; }
  else if (period === Period.DONE) { return 'No School'; }
  else if (period === Period.EVENTNOPE) { return 'No Event'; }
  else { return '????'; }
}

export function getScheduleName(schedule: Schedule) {
  switch (schedule) {
    case Schedule.REGULAR:
      return 'regular schedule';
      break;
    case Schedule.BLOCK_ODD:
      return 'block schedule (1, 3, 5)';
      break;
    case Schedule.BLOCK_EVEN:
      return 'block schedule (2, 4, 6)';
      break;
    case Schedule.SBAC_BLOCK_ODD:
      return 'SBAC block schedule (1, 3, 5)';
      break;
    case Schedule.SBAC_BLOCK_EVEN:
      return 'SBAC block schedule (2, 4, 6)';
      break;
    case Schedule.SBAC_SPECIAL_BLOCK_ODD:
      return 'SBAC block schedule (3, 1, 5)';
      break;
    case Schedule.SBAC_SPECIAL_BLOCK_EVEN:
      return 'SBAC block schedule (4, 2, 6)';
      break;
    case Schedule.PRE_FINALS_3264:
      return 'pre-finals schedule (3, 2, 6, 4)';
      break;
    case Schedule.PRE_FINALS_2156:
      return 'pre-finals schedule (2, 1, 5, 6)';
      break;
    case Schedule.PRE_FINALS_1345:
      return 'pre-finals schedule (1, 3, 4, 5)';
      break;
    case Schedule.FINAL_ASSEMBLY:
      return 'final assembly schedule';
      break;
    case Schedule.FINALS_34:
      return 'finals schedule (3, 4)';
      break;
    case Schedule.FINALS_15:
      return 'finals schedule (1, 5)';
      break;
    case Schedule.FINALS_26:
      return 'finals schedule (2, 6)';
      break;
    case Schedule.ASSEMBLY:
      return 'assembly schedule';
      break;
    case Schedule.EARLY_RELEASE:
      return 'early release schedule';
      break;
    case Schedule.MINIMUM:
      return 'minimum schedule';
      break;
    case Schedule.FINALS_TBD:
      return 'finals schedule (TBD)';
      break;
    case Schedule.NONE:
      return 'free';
      break;
    case Schedule.SUMMER_SCHOOL:
      return 'summer school';
      break;
    case Schedule.NOEVENT:
      return 'No Special Events';
      break;
    case Schedule.HSBACKTOSCHOOLNIGHT:
      return 'High School Back to School Night';
    case Schedule.WEIRD_ASSEMBLY:
      return 'Assembly Schedule';
    default:
      return 'error';
      break;
  }
}

export { Schedule, Day, Period };
