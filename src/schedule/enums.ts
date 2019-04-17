// enums.ts

// Here, I've defined some enums for the
// different day schedules, days of the week,
// and each period

enum Schedule {
  REGULAR,
  BLOCK_ODD,
  BLOCK_EVEN, 
  SPECIAL_BLOCK_ODD, 
  SPECIAL_BLOCK_EVEN, 
  NINE_TWELVE_BLOCK_ODD_FOR_78, 
  NINE_TWELVE_BLOCK_EVEN_FOR_78, 
  NINE_TWELVE_SPECIAL_BLOCK_ODD_FOR_78, 
  NINE_TWELVE_SPECIAL_BLOCK_EVEN_FOR_78, 
  ASSEMBLY, 
  MINIMUM,
  NONE,
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
  PERIOD_4,
  PERIOD_4_PASSING,
  PERIOD_5,
  PERIOD_5_PASSING,
  PERIOD_6, 
  PERIOD_6_PASSING, 
  NONE,
  DONE,
}

export function getPeriodName(period: Period) {
  if (period == Period.PERIOD_0) { return 'Period 0'; }
  else if (period == Period.PERIOD_0_PASSING) { return 'Passing After Period 0'; }
  else if (period == Period.PERIOD_1) { return 'Period 1'; }
  else if (period == Period.PERIOD_1_PASSING) { return 'Passing After Period 1'; }
  else if (period == Period.PERIOD_2) { return 'Period 2'; } 
  else if (period == Period.PERIOD_2_PASSING) { return 'Passing after Period 2'; }
  else if (period == Period.BREAK) { return 'Break'; }
  else if (period == Period.BREAK_PASSING) { return 'Passing After Break'; }
  else if (period == Period.PERIOD_3) { return 'Period 3'; }
  else if (period == Period.PERIOD_3_PASSING) { return 'Passing After Period 3'; }
  else if (period == Period.LUNCH) { return 'Lunch'; }
  else if (period == Period.LUNCH_PASSING) { return 'Passing After Lunch'; }
  else if (period == Period.STEP_ODD) { return 'STEP (odd)'; }
  else if (period == Period.STEP_EVEN) { return 'STEP (even)'; }
  else if (period == Period.HOMEROOM) { return 'Homeroom'; }
  else if (period == Period.HOMEROOM_PASSING) { return 'Passing after Homeroom'; }
  else if (period == Period.STEP_PASSING) { return 'Passing After STEP'; }
  else if (period == Period.ASSEMBLY) { return 'Assembly Period'; } 
  else if (period == Period.PERIOD_4) { return 'Period 4'; }
  else if (period == Period.PERIOD_4_PASSING) { return 'Passing After Period 4'; }
  else if (period == Period.PERIOD_5) { return 'Period 5'; }
  else if (period == Period.PERIOD_5_PASSING) { return 'Passing After Period 5'; }
  else if (period == Period.PERIOD_6) { return 'Period 6'; } 
  else if (period == Period.PERIOD_6_PASSING) { return 'Passing after Period 6'; } 
  else if (period == Period.NONE) { return 'No School'; }
  else if (period == Period.DONE) { return 'No School'; }
  else { return '????'; }
} 

export function getScheduleName(schedule: Schedule) {
  switch(schedule) {
    case Schedule.REGULAR: 
      return 'regular schedule'; 
      break; 
    case Schedule.BLOCK_ODD: 
      return 'block schedule (1, 3, 5)'; 
      break; 
    case Schedule.BLOCK_EVEN: 
      return 'block schedule (2, 4, 6)'; 
      break; 
    case Schedule.SPECIAL_BLOCK_ODD: 
      return 'block schedule (3, 1, 5)'; 
      break; 
    case Schedule.SPECIAL_BLOCK_EVEN: 
      return 'block schedule (4, 2, 6)'; 
      break; 
    case Schedule.NINE_TWELVE_BLOCK_ODD_FOR_78: 
      return 'high school block schedule (1, 3, 5)'; 
      break; 
    case Schedule.NINE_TWELVE_BLOCK_EVEN_FOR_78: 
      return 'high school block schedule (2, 4, 6)'; 
      break; 
    case Schedule.NINE_TWELVE_SPECIAL_BLOCK_ODD_FOR_78: 
      return 'high school block schedule (3, 1, 5)'; 
      break; 
    case Schedule.NINE_TWELVE_SPECIAL_BLOCK_EVEN_FOR_78: 
      return 'high school block schedule (4, 2, 6)'; 
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

export { Schedule, Day, Period };
