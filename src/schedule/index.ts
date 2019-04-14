// Original Author: Kai Bredemann
// Editor: Kevin Mo
// Copyright (c) iTeam 2019

import { Day, Schedule, Period } from './enums';
import { RegularSchedule, BlockEvenSchedule, BlockOddSchedule, SpecialBlockOddSchedule, SpecialBlockEvenSchedule, AssemblySchedule, } from './schedules';

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

special_dates = {
  //month - day - year: schedule (something from the Schedule enum) 
} 

export function getScheduleFromDay(day: number): Schedule {
  let shed = Schedule.NONE;

  switch (day) {
    case Day.SUNDAY: 
    case Day.SATURDAY: 
      shed = Schedule.NONE; 
      break;
    case Day.MONDAY:
      shed = Schedule.REGULAR;
      break;
    case Day.TUESDAY:
      shed = Schedule.REGULAR;
      break;
    case Day.WEDNESDAY:
      shed = Schedule.BLOCK_ODD;
      break;
    case Day.THURSDAY:
      shed = Schedule.BLOCK_EVEN;
      break;
    case Day.FRIDAY:
      shed = Schedule.ASSEMBLY;
      break; 
  }

  return shed;
}

export function toTime(hr: number, min: number) {
  return (hr * 60) + min;
}

export function getFullSchedule(schedule: Schedule): any {
  if (schedule == Schedule.NONE) {
    return []
  } else if (schedule == Schedule.REGULAR) {
    return RegularSchedule
  } else if (schedule == Schedule.BLOCK_ODD) {
    return BlockOddSchedule
  } else if (schedule == Schedule.BLOCK_EVEN) {
    return BlockEvenSchedule
  } else if (schedule == Schedule.ASSEMBLY) {
    return AssemblySchedule
  } // TODO: Add more schedules

  return { start: 0, end: 1440, period: Period.DONE };
}

export function getPeriod(time: number, schedule: Schedule): any {
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
