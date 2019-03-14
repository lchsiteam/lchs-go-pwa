import { Period } from './enums'

function toTime(hr: number, min: number) {
  return (hr * 60) + min;
}

// Note: the script will only consider
// the `end` paramater for now. (when each period ends).
// When the program reads this fake ".csv", it will 
// give precedence to the period that is listed first.
export const RegularSchedule: any[] = [
  { start: toTime(0, 0), end: toTime(7, 28), period: Period.NONE },
  { start: toTime(7, 28), end: toTime(8, 24), period: Period.PERIOD_0 },
  { start: toTime(8, 24), end: toTime(8, 30), period: Period.PERIOD_0_PASSING },
  { start: toTime(8, 30), end: toTime(9, 26), period: Period.PERIOD_1 },
  { start: toTime(9, 26), end: toTime(9, 32), period: Period.PERIOD_1_PASSING },
  { start: toTime(9, 32), end: toTime(10, 28), period: Period.PERIOD_2 },
  { start: toTime(10, 28), end: toTime(10, 38), period: Period.BREAK },
  { start: toTime(10, 38), end: toTime(10, 43), period: Period.BREAK_PASSING },
  { start: toTime(10, 43), end: toTime(11, 39), period: Period.PERIOD_3 },
  { start: toTime(11, 39), end: toTime(12, 9), period: Period.LUNCH },
  { start: toTime(12, 9), end: toTime(12, 14), period: Period.LUNCH_PASSING },
  { start: toTime(12, 14), end: toTime(13, 10), period: Period.PERIOD_4 },
  { start: toTime(13, 10), end: toTime(13, 16), period: Period.PERIOD_4_PASSING },
  { start: toTime(13, 16), end: toTime(14, 12), period: Period.PERIOD_5 },
  { start: toTime(14, 12), end: toTime(14, 18), period: Period.PERIOD_5_PASSING },
  { start: toTime(14, 18), end: toTime(15, 14), period: Period.PERIOD_6 },
  { start: toTime(15, 14), end: toTime(24, 0), period: Period.DONE },
]

export const BlockOddSchedule: any[] = [
  { start: toTime(0, 0), end: toTime(7, 28), period: Period.NONE },
  { start: toTime(7, 28), end: toTime(8, 24), period: Period.PERIOD_0 },
  { start: toTime(8, 24), end: toTime(8, 30), period: Period.PERIOD_0_PASSING },
  { start: toTime(8, 30), end: toTime(10, 14), period: Period.PERIOD_1 },
  { start: toTime(10, 14), end: toTime(10, 24), period: Period.BREAK },
  { start: toTime(10, 24), end: toTime(10, 29), period: Period.BREAK_PASSING },
  { start: toTime(10, 29), end: toTime(12, 13), period: Period.PERIOD_3 },
  { start: toTime(12, 13), end: toTime(12, 19), period: Period.PERIOD_3_PASSING },
  { start: toTime(12, 19), end: toTime(12, 54), period: Period.STEP_ODD },
  { start: toTime(12, 54), end: toTime(13, 24), period: Period.LUNCH },
  { start: toTime(13, 24), end: toTime(13, 29), period: Period.LUNCH_PASSING },
  { start: toTime(13, 29), end: toTime(15, 13), period: Period.PERIOD_5 },
  { start: toTime(15, 14), end: toTime(24, 0), period: Period.DONE },
]

export const BlockEvenSchedule: any[] = [
  { start: toTime(0, 0), end: toTime(7, 28), period: Period.NONE },
  { start: toTime(7, 28), end: toTime(8, 24), period: Period.PERIOD_0 },
  { start: toTime(8, 24), end: toTime(8, 30), period: Period.PERIOD_0_PASSING },
  { start: toTime(8, 30), end: toTime(10, 14), period: Period.PERIOD_2 },
  { start: toTime(10, 14), end: toTime(10, 24), period: Period.BREAK },
  { start: toTime(10, 24), end: toTime(10, 29), period: Period.BREAK_PASSING },
  { start: toTime(10, 29), end: toTime(12, 13), period: Period.PERIOD_4 },
  { start: toTime(12, 13), end: toTime(12, 19), period: Period.PERIOD_4_PASSING },
  { start: toTime(12, 19), end: toTime(12, 54), period: Period.STEP_ODD },
  { start: toTime(12, 54), end: toTime(13, 24), period: Period.LUNCH },
  { start: toTime(13, 24), end: toTime(13, 29), period: Period.LUNCH_PASSING },
  { start: toTime(13, 29), end: toTime(15, 13), period: Period.PERIOD_6 },
  { start: toTime(15, 14), end: toTime(24, 0), period: Period.DONE },
]