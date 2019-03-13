// enums.ts

// Here, I've defined some enums for the
// different day schedules, days of the week,
// and each period

enum Schedule {
  REGULAR,
  BLOCK_ODD,
  BLOCK_EVEN,
  ASSEMBLY,
  NONE,
}

enum Day {
  MONDAY,
  TUESDAY,
  WEDNESDAY,
  THURSDAY,
  FRIDAY,
  SATURDAY,
  SUNDAY
}

// Passing break is defined here as the
// short break after a certain period/block
enum Period {
  PERIOD_0,
  PERIOD_0_PASSING,
  PERIOD_1,
  PERIOD_1_PASSING,
  PERIOD_2,
  BREAK,
  BREAK_PASSING,
  PERIOD_3,
  PERIOD_3_PASSING,
  LUNCH,
  LUNCH_PASSING,
  STEP_ODD,
  STEP_EVEN,
  STEP_PASSING,
  ASSEMBLY,
  PERIOD_4,
  PERIOD_4_PASSING,
  PERIOD_5,
  PERIOD_5_PASSING,
  PERIOD_6,
  NONE,
  DONE
}

export function getPeriodName(period: Period) {
  if (period == Period.PERIOD_0) return "Period 0"
  else if (period == Period.PERIOD_0_PASSING) return "Passing After Period 0"
  else if (period == Period.PERIOD_1) return "Period 1"
  else if (period == Period.PERIOD_1_PASSING) return "Passing After Period 1"
  else if (period == Period.PERIOD_2) return "Period 2"
  else if (period == Period.BREAK) return "Break"
  else if (period == Period.BREAK_PASSING) return "Passing After Break"
  else if (period == Period.PERIOD_3) return "Period 3"
  else if (period == Period.PERIOD_3_PASSING) return "Passing After Period 3"
  else if (period == Period.LUNCH) return "Lunch"
  else if (period == Period.LUNCH_PASSING) return "Passing After Lunch"
  else if (period == Period.STEP_ODD) return "STEP (1-3-5)"
  else if (period == Period.STEP_EVEN) return "STEP (2-4-6)"
  else if (period == Period.STEP_PASSING) return "Passing After STEP"
  else if (period == Period.ASSEMBLY) return "Assembly Period"
  else if (period == Period.PERIOD_4) return "Period 4"
  else if (period == Period.PERIOD_4_PASSING) return "Passing After Period 4"
  else if (period == Period.PERIOD_5) return "Period 5"
  else if (period == Period.PERIOD_5_PASSING) return "Passing After Period 5"
  else if (period == Period.PERIOD_6) return "Period 6"
  else if (period == Period.NONE) return "No School"
  else if (period == Period.DONE) return "No School"
  else return "????"
}

export { Schedule, Day, Period }