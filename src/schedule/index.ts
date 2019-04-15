// Original Author: Kai Bredemann
// Editor: Kevin Mo
// Copyright (c) iTeam 2019

import { Day, Schedule, Period } from './enums'; 
import { NoSchoolSchedule, RegularSchedule, BlockEvenSchedule, BlockOddSchedule, SpecialBlockOddSchedule, SpecialBlockEvenSchedule, 
        AssemblySchedule, MinimumSchedule} from './schedules';

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
  '4 - 14 - 2019': Schedule.SPECIAL_BLOCK_EVEN, 
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
  
  console.log(date); 
  console.log(date in special_dates); 
  
  if(date in special_dates) {
    console.log('1'); 
    
    shed = special_dates[date]; 
    
    console.log(shed); 
  } else {
    console.log('2'); 
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

export function getFullSchedule(schedule: Schedule): any {
  if (schedule == Schedule.NONE) {
    return NoSchoolSchedule
  } else if (schedule == Schedule.REGULAR) {
    return RegularSchedule
  } else if (schedule == Schedule.BLOCK_ODD) {
    return BlockOddSchedule
  } else if (schedule == Schedule.BLOCK_EVEN) {
    return BlockEvenSchedule
  } else if (schedule == Schedule.SPECIAL_BLOCK_ODD) {
    return SpecialBlockOddSchedule
  } else if (schedule == Schedule.SPECIAL_BLOCK_EVEN) {
    return SpecialBlockEvenSchedule
  } else if (schedule == Schedule.ASSEMBLY) {
    return AssemblySchedule
  } else if (schedule == Schedule.MINIMUM) {
    return MinimumSchedule
  } // TODO: Add more schedules

  return { start: 0, end: 1440, period: Period.DONE };
}

export function getPeriod(time: number, schedule: Schedule): any {
  let fullSchedule = getFullSchedule(schedule) 
  
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
