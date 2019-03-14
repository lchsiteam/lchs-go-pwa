// Original Author: Kai Bredemann
// Editor: Kevin Mo
// Copyright (c) iTeam 2019

import { Day, Schedule, Period } from './enums';
import { RegularSchedule, BlockEvenSchedule, BlockOddSchedule } from './schedules';

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

export function getScheduleFromDay(day: number): Schedule {
  let shed = Schedule.NONE;

  switch (day) {
    case Day.SUNDAY:
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
      shed = Schedule.REGULAR;
      break;
    case Day.SATURDAY:
      shed = Schedule.NONE;
      break;
  }

  return shed;
}

export function toTime(hr: number, min: number) {
  return (hr * 60) + min;
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

/*
switch(period)
{
  case Period.NONE:
  console.log("School has not yet started. School will start in");
  break;
  case Period.PERIOD_0:
  console.log("It is zero period. Zero period ends in");
  break;
  case Period.PERIOD_0_PASSING:
  console.log("It is the passing period before first period. First period starts in");
  break;
  case Period.PERIOD_1:
  console.log("It is first period. First period ends in");
  break;
  case Period.PERIOD_1_PASSING:
  console.log("It is the passing period before second period. Second period starts in");
  break;
  case Period.PERIOD_2:
  console.log("It is second period. Second period ends in");
  break;
  case Period.BREAK:
  console.log("It is break. Break period ends in");
  break;
  case Period.BREAK_PASSING:
  console.log("It is the passing period before third period. Third period starts in");
  break;
  case Period.PERIOD_3:
  console.log("It is third period. Third period ends in");
  break;
  case Period.LUNCH:
  console.log("It is lunch. Lunch ends in");
  break;
  case Period.LUNCH_PASSING:
  console.log("It is the passing period before fourth period. Fourth period starts in");
  break;
  case Period.PERIOD_4:
  console.log("It is fourth period. Fourth period ends in");
  break;
  case Period.PERIOD_4_PASSING:
  console.log("It is the passing period before fifth period. Fifth period starts in");
  break;
  case Period.PERIOD_5:
  console.log("It is fifth period. Fifth period ends in");
  break;
  case Period.PERIOD_5_PASSING:
  console.log("It is the passing period before sixth period. Sixth period starts in");
  break;
  case Period.PERIOD_6:
  console.log("It is sixth period. Sixth period ends in");
  break;
  case Period.DONE:
  console.log("The school day is over. The next day begins in");
  break;
  default:
  console.log("Unknown period.")
}

printTime(end - getCurrentDate().mins)
*/
