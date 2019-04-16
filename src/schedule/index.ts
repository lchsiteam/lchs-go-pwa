// Original Author: Kai Bredemann
// Editor: Kevin Mo
// Copyright (c) iTeam 2019

import { Day, Schedule, Period } from './enums'; 
import { NoSchoolSchedule, RegularSchedule, BlockOddSchedule, BlockEvenSchedule, SpecialBlockOddSchedule, SpecialBlockEvenSchedule, 
        AssemblySchedule, RegularSchedule78, BlockOddSchedule78, BlockEvenSchedule78, SpecialBlockOddSchedule78, SpecialBlockEvenSchedule78, AssemblySchedule7, AssemblySchedule8, MinimumSchedule} from './schedules';

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

// Chad moment.js
/* function getCurrentDate() {
  const now = moment().tz('America/Los_Angeles')
  return {
    hrs: now.hours(),
    mins: now.minutes(),
    total_mins: now.minutes() + (now.hours() * 60),
    day: now.day()
  } 
} */ 

export const special_dates: any = {
  //month - day - year: schedule (something from the Schedule enum) 
  '4 - 15 - 2019': Schedule.BLOCK_ODD, 
  '4 - 16 - 2019': Schedule.BLOCK_EVEN, 
  '4 - 17 - 2019': Schedule.SPECIAL_BLOCK_ODD, 
  '4 - 18 - 2019': Schedule.SPECIAL_BLOCK_EVEN, 
  '4 - 19 - 2019': Schedule.MINIMUM, 
  '4 - 23 - 2019': Schedule.BLOCK_EVEN, 
  '4 - 25 - 2019': Schedule.REGULAR, 
  '5 - 27 - 2019': Schedule.NONE, 
  //no finals schedules yet
}; 

export function getScheduleFromDay(month: number, day: number, year: number, week_day: number): Schedule {
  let shed = Schedule.NONE; 
  let date = `${month} - ${day} - ${year}`; 
  
  if(date in special_dates) {
    shed = special_dates[date]; 
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
    case Schedule.SPECIAL_BLOCK_ODD: 
      return grade == '9-12' ? SpecialBlockOddSchedule : SpecialBlockOddSchedule78; 
      break; 
    case Schedule.SPECIAL_BLOCK_EVEN: 
      return grade == '9-12' ? SpecialBlockEvenSchedule : SpecialBlockEvenSchedule78; 
      break; 
    case Schedule.ASSEMBLY: 
      if(grade == '9-12') {
        return AssemblySchedule; 
      } else if(grade == '8') {
        return AssemblySchedule8; 
      } else {
        return AssemblySchedule7; 
      } 
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
  let fullSchedule = getFullSchedule(schedule, grade); 
  
  return fullSchedule.find((p: any) => (p.start <= time && p.end > time)); 
  
  /* 
  if (schedule == Schedule.NONE) {
    return { start: 0, end: 1440, period: Period.DONE };
  } else if (schedule == Schedule.REGULAR) {
    return RegularSchedule.find((p) => (p.start <= time && p.end > time));
  } else if (schedule == Schedule.BLOCK_ODD) {
    return BlockOddSchedule.find((p) => (p.start <= time && p.end > time));
  } else if (schedule == Schedule.BLOCK_EVEN) {
    return BlockEvenSchedule.find((p) => (p.start <= time && p.end > time));
  } else if (schedule == Schedule.ASSEMBLY) {
    return AssemblySchedule.find((p) => (p.start <= time && p.end > time));
  } // TODO: Add more schedules

  return { start: 0, end: 1440, period: Period.DONE }; 
  */ 
}

// const { period, end } = getPeriod(getCurrentDate().mins, getScheduleFromDay(getCurrentDate().day))

// This works so far, not touching.
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
