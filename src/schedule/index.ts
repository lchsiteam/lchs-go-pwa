// Original Author: Kai Bredemann
// Editor: Kevin Mo
// Copyright (c) iTeam 2019

import { Day, Schedule, Period } from './enums'; 
import { NoSchoolSchedule, RegularSchedule, BlockOddSchedule, BlockEvenSchedule, SpecialBlockOddSchedule, SpecialBlockEvenSchedule, 
        AssemblySchedule, RegularSchedule78, BlockOddSchedule78, BlockEvenSchedule78, NineTwelveBlockOddScheduleFor78, NineTwelveBlockEvenScheduleFor78, NineTwelveSpecialBlockOddScheduleFor78, NineTwelveSpecialBlockEvenScheduleFor78, AssemblySchedule7, AssemblySchedule8, MinimumSchedule } from './schedules';

// Native Javascript
export function getCurrentDate(): any {
  const now = new Date();
  return {
    hrs: now.getHours(),
    mins: now.getMinutes(),
    total_mins: now.getMinutes() + (now.getHours() * 60),
    day: now.getDay(),
  };
}

export const school_special_dates: any = {
  // month - day - year: schedule (something from the Schedule enum) 
  '4 - 19 - 2019': Schedule.MINIMUM, 
  '4 - 23 - 2019': Schedule.BLOCK_EVEN, 
  '4 - 25 - 2019': Schedule.REGULAR, 
  '5 - 27 - 2019': Schedule.NONE, 
  //no finals schedules yet
}; 

export const seven_eight_special_dates: any = {
  '4 - 16 - 2019': Schedule.NINE_TWELVE_BLOCK_EVEN_FOR_78, 
  '4 - 17 - 2019': Schedule.NINE_TWELVE_SPECIAL_BLOCK_ODD_FOR_78, 
  '4 - 18 - 2019': Schedule.NINE_TWELVE_SPECIAL_BLOCK_EVEN_FOR_78, 
} 

export const nine_twelve_special_dates: any = {
  '4 - 16 - 2019': Schedule.BLOCK_EVEN, 
  '4 - 17 - 2019': Schedule.SPECIAL_BLOCK_ODD, 
  '4 - 18 - 2019': Schedule.SPECIAL_BLOCK_EVEN, 
} 

export function getScheduleFromDay(month: number, day: number, year: number, week_day: number, grade: string): Schedule {
  let shed = Schedule.NONE; 
  let date = `${month} - ${day} - ${year}`; 
  let grade_special_dates: any = {}; 

  switch(grade) {
    case '7': 
    case '8': 
      grade_special_dates = seven_eight_special_dates; 
      break; 
    case '9-12': 
      grade_special_dates = nine_twelve_special_dates; 
      break; 
    default: 
      grade_special_dates = {}; 
      break; 
  } 

  if(date in grade_special_dates) {
    shed = grade_special_dates[date]; 
  } else if(date in school_special_dates) {
    shed = school_special_dates[date]; 
  } else {
    switch(week_day) {
      case Day.SUNDAY: 
      case Day.SATURDAY: 
        shed = Schedule.NONE; 
        break;
      case Day.MONDAY: 
      case Day.TUESDAY: 
      case Day.FRIDAY: 
        shed = Schedule.REGULAR;
        break;
      case Day.WEDNESDAY:
        shed = Schedule.BLOCK_ODD;
        break;
      case Day.THURSDAY:
        shed = Schedule.BLOCK_EVEN;
        break; 
    } 
  } 

  return shed;
}

export function toTime(hr: number, min: number) {
  return (hr * 60) + min;
}

export function getFullSchedule(schedule: Schedule, grade: string): any {
  // TODO: Add more schedules
  switch(schedule) {
    case Schedule.NONE: 
      return NoSchoolSchedule; 
      break; 
    case Schedule.REGULAR: 
      return grade == '9-12' ? RegularSchedule : RegularSchedule78; 
      break; 
    case Schedule.BLOCK_ODD: 
      return grade == '9-12' ? BlockOddSchedule : BlockOddSchedule78; 
      break; 
    case Schedule.BLOCK_EVEN: 
      return grade == '9-12' ? BlockEvenSchedule : BlockEvenSchedule78; 
      break; 
    //the following two are exception schedules for 9/12 only, hence why there's no ternary operator
    case Schedule.SPECIAL_BLOCK_ODD: 
      return SpecialBlockOddSchedule; 
      break; 
    case Schedule.SPECIAL_BLOCK_EVEN: 
      return SpecialBlockEvenSchedule; 
      break; 
    //the following four are exception schedules for 7/8 only, hence why there's no ternary operator
    case Schedule.NINE_TWELVE_BLOCK_ODD_FOR_78: 
      return NineTwelveBlockOddScheduleFor78; 
      break; 
    case Schedule.NINE_TWELVE_BLOCK_EVEN_FOR_78: 
      return NineTwelveBlockEvenScheduleFor78; 
      break; 
    case Schedule.NINE_TWELVE_SPECIAL_BLOCK_ODD_FOR_78: 
      return NineTwelveSpecialBlockOddScheduleFor78; 
      break; 
    case Schedule.NINE_TWELVE_SPECIAL_BLOCK_EVEN_FOR_78: 
      return NineTwelveSpecialBlockEvenScheduleFor78; 
      break; 
    case Schedule.ASSEMBLY: 
      switch(grade) {
        case '7': 
          return AssemblySchedule7; 
          break; 
        case '8': 
          return AssemblySchedule8; 
          break; 
        case '9-12': 
          return AssemblySchedule; 
          break; 
        default: 
          return AssemblySchedule; 
          break; 
      } 
      
      /* 
      if(grade == '9-12') {
        return AssemblySchedule; 
      } else if(grade == '8') {
        return AssemblySchedule8; 
      } else {
        return AssemblySchedule7; 
      } 
      */ 
      
      break; 
    case Schedule.MINIMUM: 
      return MinimumSchedule; 
      break; 
    default: 
      return NoSchoolSchedule; 
      break; 
  } 
}

export function getPeriod(time: number, schedule: Schedule, grade: string): any {
  const fullSchedule = getFullSchedule(schedule, grade); 
  return fullSchedule.find((p: any) => (p.start <= time && p.end > time)); 
}

const periodsFilter = [
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
]

export function getUpcomingPeriod(time: number, dateTime: any, schedule: Schedule, grade: string, pAllow = periodsFilter): any {
  const fullSchedule = getFullSchedule(schedule, grade)
  const result = fullSchedule.find((p: any) => (p.start > time && pAllow.indexOf(p.period) !== -1))
  if (result) { return result }
  else {
    // Find the next period across next multiple days
    // TODO: remove the limit
    let daysSince = 1
    while (daysSince < 100) {
      const nextDate = dateTime.plus({ days: daysSince }).set({ hour: 0, minute: 0 })
      const nextSchedule = getFullSchedule(
        getScheduleFromDay(nextDate.month, nextDate.day, nextDate.year, nextDate.weekday, grade), grade
      )
      
      const result = nextSchedule.find((p: any) => (p.start > 0 && pAllow.indexOf(p.period) !== -1))

      if (result) { return {...result, daysSince } }
      else { daysSince += 1 }
    }

    // TODO: replace Period.NONE with something else
    return { start: 0, end: 1440, period: Period.NONE, daysSince: 100 }
  }
}

// This works so far, not touching.
// TODO: evaluate if needed
export function printTime(time: number) {
  let shortMins, hours, finalString;

  if (time > 59) {
    hours = Math.floor(time / 60);
    shortMins = time - hours * 60;
  } else {
    hours = 0;
    shortMins = time;
  }

  if (hours == 0) {
    if (shortMins == 1) {
      finalString = shortMins + ' minute';
    }
    else {
      finalString = shortMins + ' minutes';
    }
  } else if (hours == 1) {
    if (shortMins == 1) {
      finalString = hours + ' hour and ', shortMins + ' minute';
    }
    else {
      finalString = hours + ' hour and ' + shortMins + ' minutes';
    }
  } else {
    if (shortMins == 1) {
      finalString = hours + ' hours and ' + shortMins + ' minute';
    }
    else {
      finalString = hours + ' hours and ' + shortMins + ' minutes';
    }
  }

  return finalString;
}
