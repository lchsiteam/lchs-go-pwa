import { Period } from './enums';

type PeriodSchedule = Array<{ start: number, end: number, period: Period }>

function toTime(hr: number, min: number) {
  return (hr * 60) + min;
}

/*
Note: the script will only consider
the `end` paramater for now. (when each period ends).
When the program reads this fake ".csv", it will
give precedence to the period that is listed first
*/

export const NoSchoolSchedule: PeriodSchedule = [
  { start: toTime(0, 0), end: toTime(24, 0), period: Period.DONE },
];

export const NoEventSchedule: PeriodSchedule = [
  { start: toTime(0, 0), end: toTime(24, 0), period: Period.EVENTNOPE },
];

export const RegularSchedule: PeriodSchedule = [ // Has no small groups
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
];

export const RegularSchedule78: PeriodSchedule = [
  { start: toTime(0, 0), end: toTime(7, 28), period: Period.NONE },
  { start: toTime(7, 28), end: toTime(8, 24), period: Period.PERIOD_0 },
  { start: toTime(8, 24), end: toTime(8, 30), period: Period.PERIOD_0_PASSING },
  { start: toTime(8, 30), end: toTime(9, 26), period: Period.PERIOD_1 },
  { start: toTime(9, 26), end: toTime(9, 32), period: Period.PERIOD_1_PASSING },
  { start: toTime(9, 32), end: toTime(10, 28), period: Period.PERIOD_2 },
  { start: toTime(10, 28), end: toTime(10, 38), period: Period.BREAK },
  { start: toTime(10, 38), end: toTime(10, 43), period: Period.BREAK_PASSING },
  { start: toTime(10, 43), end: toTime(11, 39), period: Period.PERIOD_3 },
  { start: toTime(11, 39), end: toTime(11, 45), period: Period.PERIOD_3_PASSING },
  { start: toTime(11, 45), end: toTime(12, 41), period: Period.PERIOD_4 },
  { start: toTime(12, 41), end: toTime(13, 11), period: Period.LUNCH },
  { start: toTime(13, 11), end: toTime(13, 16), period: Period.LUNCH_PASSING },
  { start: toTime(13, 16), end: toTime(14, 12), period: Period.PERIOD_5 },
  { start: toTime(14, 12), end: toTime(14, 18), period: Period.PERIOD_5_PASSING },
  { start: toTime(14, 18), end: toTime(15, 14), period: Period.PERIOD_6 },
  { start: toTime(15, 14), end: toTime(24, 0), period: Period.DONE },
];

// assumng that the schedule hasn't changed
export const PilotRegularSchedule: PeriodSchedule = [
  { start: toTime(0, 0), end: toTime(7, 30), period: Period.NONE },
  { start: toTime(7, 30), end: toTime(8, 24), period: Period.PERIOD_0 },
  { start: toTime(8, 24), end: toTime(8, 30), period: Period.PERIOD_0_PASSING },
  { start: toTime(8, 30), end: toTime(9, 24), period: Period.PERIOD_1 },
  { start: toTime(9, 24), end: toTime(9, 34), period: Period.PERIOD_1_PASSING },
  { start: toTime(9, 34), end: toTime(10, 28), period: Period.PERIOD_2 },
  { start: toTime(10, 28), end: toTime(10, 38), period: Period.PERIOD_2_PASSING },
  { start: toTime(10, 38), end: toTime(11, 32), period: Period.PERIOD_3 },
  { start: toTime(11, 32), end: toTime(11, 42), period: Period.PERIOD_3_PASSING },
  { start: toTime(11, 42), end: toTime(12, 36), period: Period.PERIOD_4 },
  { start: toTime(12, 36), end: toTime(1, 11), period: Period.LUNCH },
  { start: toTime(1, 11), end: toTime(1, 16), period: Period.LUNCH_PASSING },
  { start: toTime(1, 16), end: toTime(2, 10), period: Period.PERIOD_5 },
  { start: toTime(2, 10), end: toTime(2, 20), period: Period.PERIOD_5_PASSING },
  { start: toTime(2, 20), end: toTime(3, 14), period: Period.PERIOD_6 },
]

export const NinthRegistrationSchedule: PeriodSchedule = [
  { start: toTime(0, 0), end: toTime(8, 0), period: Period.NONE },
  { start: toTime(8, 0), end: toTime(9, 0), period: Period.ORIENTATION },
  { start: toTime(9, 0), end: toTime(11, 0), period: Period.REGISTRATION },
  { start: toTime(11, 0), end: toTime(24, 0), period: Period.DONE },
];

export const WeirdAssemblySchedule: PeriodSchedule = [
  { start: toTime(0, 0), end: toTime(7, 28), period: Period.NONE },
  { start: toTime(7, 28), end: toTime(8, 15), period: Period.PERIOD_0 },
  { start: toTime(8, 15), end: toTime(8, 30), period: Period.PERIOD_0_PASSING },
  { start: toTime(8, 30), end: toTime(9, 0), period: Period.PERIOD_1 },
  { start: toTime(9, 0), end: toTime(9, 5), period: Period.PERIOD_1_PASSING },
  { start: toTime(9, 5), end: toTime(10, 15), period: Period.ASSEMBLY },
  { start: toTime(10, 6), end: toTime(10, 26), period: Period.BREAK },
  { start: toTime(10, 26), end: toTime(10, 32), period: Period.BREAK_PASSING },
  { start: toTime(10, 32), end: toTime(11, 17), period: Period.PERIOD_2 },
  { start: toTime(11, 17), end: toTime(11, 23), period: Period.PERIOD_2_PASSING },
  { start: toTime(11, 23), end: toTime(12, 8), period: Period.PERIOD_3 },
  { start: toTime(12, 8), end: toTime(12, 14), period: Period.PERIOD_3_PASSING },
  { start: toTime(12, 14), end: toTime(12, 59), period: Period.PERIOD_4 },
  { start: toTime(12, 59), end: toTime(13, 33), period: Period.LUNCH },
  { start: toTime(13, 33), end: toTime(13, 39), period: Period.LUNCH_PASSING },
  { start: toTime(13, 39), end: toTime(14, 24), period: Period.PERIOD_5 },
  { start: toTime(14, 24), end: toTime(14, 30), period: Period.PERIOD_5_PASSING },
  { start: toTime(14, 30), end: toTime(15, 15), period: Period.PERIOD_6 },
  { start: toTime(15, 15), end: toTime(24, 0), period: Period.DONE },
];

export const WeirdAssemblySchedule78: PeriodSchedule = [
  { start: toTime(0, 0), end: toTime(7, 28), period: Period.NONE },
  { start: toTime(7, 28), end: toTime(8, 15), period: Period.PERIOD_0 },
  { start: toTime(8, 15), end: toTime(8, 30), period: Period.PERIOD_0_PASSING },
  { start: toTime(8, 30), end: toTime(9, 15), period: Period.PERIOD_1 },
  { start: toTime(9, 15), end: toTime(9, 21), period: Period.PERIOD_1_PASSING },
  { start: toTime(9, 21), end: toTime(10, 6), period: Period.PERIOD_6 },
  { start: toTime(10, 6), end: toTime(10, 26), period: Period.BREAK },
  { start: toTime(10, 26), end: toTime(10, 32), period: Period.BREAK_PASSING },
  { start: toTime(10, 32), end: toTime(11, 17), period: Period.PERIOD_2 },
  { start: toTime(11, 17), end: toTime(11, 23), period: Period.PERIOD_2_PASSING },
  { start: toTime(11, 23), end: toTime(12, 8), period: Period.PERIOD_3 },
  { start: toTime(12, 8), end: toTime(12, 42), period: Period.LUNCH },
  { start: toTime(12, 42), end: toTime(12, 48), period: Period.LUNCH_PASSING },
  { start: toTime(12, 48), end: toTime(13, 33), period: Period.PERIOD_4 },
  { start: toTime(13, 33), end: toTime(13, 39), period: Period.PERIOD_4_PASSING },
  { start: toTime(13, 39), end: toTime(14, 0), period: Period.PERIOD_5 },
  { start: toTime(14, 0), end: toTime(14, 5), period: Period.PERIOD_5_PASSING },
  { start: toTime(14, 5), end: toTime(15, 15), period: Period.ASSEMBLY },
  { start: toTime(15, 15), end: toTime(24, 0), period: Period.DONE },
];

// Hybrid Schedule

// O is online, A is cohort A, B is cohort B
export const HybridVirtualDay: PeriodSchedule = [ // Has no small groups
  { start: toTime(0, 0), end: toTime(7, 40), period: Period.NONE },
  { start: toTime(7, 40), end: toTime(8, 20), period: Period.PERIOD_0_O },
  { start: toTime(8, 20), end: toTime(8, 25), period: Period.PERIOD_0_PASSING },
  { start: toTime(8, 25), end: toTime(9, 5), period: Period.PERIOD_1_O },
  { start: toTime(9, 5), end: toTime(9, 15), period: Period.PERIOD_1_PASSING },
  { start: toTime(9, 15), end: toTime(9, 58), period: Period.PERIOD_2_O },
  { start: toTime(9, 58), end: toTime(10, 5), period: Period.PERIOD_2_PASSING },
  { start: toTime(10, 5), end: toTime(10, 45), period: Period.PERIOD_3_O },
  { start: toTime(10, 45), end: toTime(10, 55), period: Period.PERIOD_3_PASSING },
  { start: toTime(10, 55), end: toTime(11, 35), period: Period.PERIOD_4_O },
  { start: toTime(11, 35), end: toTime(12, 5), period: Period.LUNCH },
  { start: toTime(12, 5), end: toTime(12, 45), period: Period.PERIOD_5_O },
  { start: toTime(12, 45), end: toTime(12, 55), period: Period.PERIOD_5_PASSING },
  { start: toTime(12, 55), end: toTime(13, 35), period: Period.PERIOD_6_O },
  { start: toTime(13, 35), end: toTime(13, 45), period: Period.PERIOD_6_PASSING },
  { start: toTime(13, 45), end: toTime(14, 45), period: Period.OFFICE },
  { start: toTime(14, 45), end: toTime(15, 15), period: Period.PREP },
  { start: toTime(15, 15), end: toTime(24, 0), period: Period.DONE },
];
export const CohortABlockOdd: PeriodSchedule = [ // Has no small groups
  { start: toTime(0, 0), end: toTime(7, 40), period: Period.NONE },
  { start: toTime(7, 40), end: toTime(8, 20), period: Period.PERIOD_0_O },
  { start: toTime(8, 20), end: toTime(8, 30), period: Period.PERIOD_0_PASSING },
  { start: toTime(8, 30), end: toTime(9, 55), period: Period.PERIOD_1_A },
  { start: toTime(9, 55), end: toTime(10, 2), period: Period.PERIOD_1_PASSING },
  { start: toTime(10, 2), end: toTime(11, 22), period: Period.PERIOD_3_A },
  { start: toTime(11, 22), end: toTime(11, 33), period: Period.BREAK },
  { start: toTime(11, 33), end: toTime(11, 40), period: Period.BREAK_PASSING },
  { start: toTime(11, 40), end: toTime(13, 0), period: Period.PERIOD_5_A },
  { start: toTime(13, 0), end: toTime(13, 30), period: Period.G_G_LUNCH},
  { start: toTime(13, 30), end: toTime(13, 35), period: Period.OFFICE },
  { start: toTime(13, 35), end: toTime(14, 15), period: Period.PERIOD_OFFICE_HOURS_A },
  { start: toTime(14, 15), end: toTime(14, 40), period: Period.OFFICE },
  { start: toTime(14, 40), end: toTime(15, 20), period: Period.PREP },
  { start: toTime(15, 20), end: toTime(24, 0), period: Period.DONE },
];
export const CohortABlockEven: PeriodSchedule = [ // Has no small groups
  { start: toTime(0, 0), end: toTime(7, 40), period: Period.NONE },
  { start: toTime(7, 40), end: toTime(8, 20), period: Period.PERIOD_0_O },
  { start: toTime(8, 20), end: toTime(8, 30), period: Period.PERIOD_0_PASSING },
  { start: toTime(8, 30), end: toTime(9, 55), period: Period.PERIOD_2_A },
  { start: toTime(9, 55), end: toTime(10, 2), period: Period.PERIOD_2_PASSING },
  { start: toTime(10, 2), end: toTime(11, 22), period: Period.PERIOD_4_A },
  { start: toTime(11, 22), end: toTime(11, 33), period: Period.BREAK },
  { start: toTime(11, 33), end: toTime(11, 40), period: Period.BREAK_PASSING },
  { start: toTime(11, 40), end: toTime(13, 0), period: Period.PERIOD_6_A },
  { start: toTime(13, 0), end: toTime(13, 30), period: Period.G_G_LUNCH},
  { start: toTime(13, 30), end: toTime(13, 35), period: Period.OFFICE },
  { start: toTime(13, 35), end: toTime(14, 15), period: Period.PERIOD_OFFICE_HOURS_A },
  { start: toTime(14, 15), end: toTime(14, 40), period: Period.OFFICE },
  { start: toTime(14, 40), end: toTime(15, 20), period: Period.PREP },
  { start: toTime(15, 20), end: toTime(24, 0), period: Period.DONE },
];
export const CohortBBlockOdd: PeriodSchedule = [ // Has no small groups
  { start: toTime(0, 0), end: toTime(7, 40), period: Period.NONE },
  { start: toTime(7, 40), end: toTime(8, 20), period: Period.PERIOD_0_O },
  { start: toTime(8, 20), end: toTime(8, 30), period: Period.PERIOD_0_PASSING },
  { start: toTime(8, 30), end: toTime(9, 55), period: Period.PERIOD_1_B },
  { start: toTime(9, 55), end: toTime(10, 2), period: Period.PERIOD_1_PASSING },
  { start: toTime(10, 2), end: toTime(11, 22), period: Period.PERIOD_3_B },
  { start: toTime(11, 22), end: toTime(11, 33), period: Period.BREAK },
  { start: toTime(11, 33), end: toTime(11, 40), period: Period.BREAK_PASSING },
  { start: toTime(11, 40), end: toTime(13, 0), period: Period.PERIOD_5_B },
  { start: toTime(13, 0), end: toTime(13, 30), period: Period.G_G_LUNCH},
  { start: toTime(13, 30), end: toTime(13, 35), period: Period.OFFICE },
  { start: toTime(13, 35), end: toTime(14, 15), period: Period.PERIOD_OFFICE_HOURS_B },
  { start: toTime(14, 15), end: toTime(14, 40), period: Period.OFFICE },
  { start: toTime(14, 40), end: toTime(15, 20), period: Period.PREP },
  { start: toTime(15, 20), end: toTime(24, 0), period: Period.DONE },
];
export const CohortBBlockEven: PeriodSchedule = [ // Has no small groups
  { start: toTime(0, 0), end: toTime(7, 40), period: Period.NONE },
  { start: toTime(7, 40), end: toTime(8, 20), period: Period.PERIOD_0_O },
  { start: toTime(8, 20), end: toTime(8, 30), period: Period.PERIOD_0_PASSING },
  { start: toTime(8, 30), end: toTime(9, 55), period: Period.PERIOD_2_B },
  { start: toTime(9, 55), end: toTime(10, 2), period: Period.PERIOD_2_PASSING },
  { start: toTime(10, 2), end: toTime(11, 22), period: Period.PERIOD_4_B },
  { start: toTime(11, 22), end: toTime(11, 33), period: Period.BREAK },
  { start: toTime(11, 33), end: toTime(11, 40), period: Period.BREAK_PASSING },
  { start: toTime(11, 40), end: toTime(13, 0), period: Period.PERIOD_6_B },
  { start: toTime(13, 0), end: toTime(13, 30), period: Period.G_G_LUNCH},
  { start: toTime(13, 30), end: toTime(13, 35), period: Period.OFFICE },
  { start: toTime(13, 35), end: toTime(14, 15), period: Period.PERIOD_OFFICE_HOURS_B },
  { start: toTime(14, 15), end: toTime(14, 40), period: Period.OFFICE },
  { start: toTime(14, 40), end: toTime(15, 20), period: Period.PREP },
  { start: toTime(15, 20), end: toTime(24, 0), period: Period.DONE },
];
export const InPersonBlockOdd: PeriodSchedule = [ // Has no small groups
  { start: toTime(0, 0), end: toTime(7, 40), period: Period.NONE },
  { start: toTime(7, 40), end: toTime(8, 20), period: Period.PERIOD_0_O },
  { start: toTime(8, 20), end: toTime(8, 30), period: Period.PERIOD_0_PASSING },
  { start: toTime(8, 30), end: toTime(9, 55), period: Period.PERIOD_1_I },
  { start: toTime(9, 55), end: toTime(10, 2), period: Period.PERIOD_1_PASSING },
  { start: toTime(10, 2), end: toTime(11, 22), period: Period.PERIOD_3_I },
  { start: toTime(11, 22), end: toTime(11, 33), period: Period.BREAK },
  { start: toTime(11, 33), end: toTime(11, 40), period: Period.BREAK_PASSING },
  { start: toTime(11, 40), end: toTime(13, 0), period: Period.PERIOD_5_I },
  { start: toTime(13, 0), end: toTime(13, 30), period: Period.G_G_LUNCH},
  { start: toTime(13, 30), end: toTime(13, 35), period: Period.OFFICE },
  { start: toTime(13, 35), end: toTime(14, 15), period: Period.PERIOD_OFFICE_HOURS_I },
  { start: toTime(14, 15), end: toTime(14, 40), period: Period.OFFICE },
  { start: toTime(14, 40), end: toTime(15, 20), period: Period.PREP },
  { start: toTime(15, 20), end: toTime(24, 0), period: Period.DONE },
];
export const InPersonBlockEven: PeriodSchedule = [ // Has no small groups
  { start: toTime(0, 0), end: toTime(7, 40), period: Period.NONE },
  { start: toTime(7, 40), end: toTime(8, 20), period: Period.PERIOD_0_O },
  { start: toTime(8, 20), end: toTime(8, 30), period: Period.PERIOD_0_PASSING },
  { start: toTime(8, 30), end: toTime(9, 55), period: Period.PERIOD_2_I },
  { start: toTime(9, 55), end: toTime(10, 2), period: Period.PERIOD_2_PASSING },
  { start: toTime(10, 2), end: toTime(11, 22), period: Period.PERIOD_4_I },
  { start: toTime(11, 22), end: toTime(11, 33), period: Period.BREAK },
  { start: toTime(11, 33), end: toTime(11, 40), period: Period.BREAK_PASSING },
  { start: toTime(11, 40), end: toTime(13, 0), period: Period.PERIOD_6_I },
  { start: toTime(13, 0), end: toTime(13, 30), period: Period.G_G_LUNCH},
  { start: toTime(13, 30), end: toTime(13, 35), period: Period.OFFICE },
  { start: toTime(13, 35), end: toTime(14, 15), period: Period.PERIOD_OFFICE_HOURS_I },
  { start: toTime(14, 15), end: toTime(14, 40), period: Period.OFFICE },
  { start: toTime(14, 40), end: toTime(15, 20), period: Period.PREP },
  { start: toTime(15, 20), end: toTime(24, 0), period: Period.DONE },
];

/**
 *
 *
 *
 * Small Group Schedule
 *
 *
 *
 */

export const SmallGroups12: PeriodSchedule = [
  { start: toTime(0, 0), end: toTime(7, 40), period: Period.NONE },
  { start: toTime(7, 40), end: toTime(8, 20), period: Period.PERIOD_0 },
  { start: toTime(8, 20), end: toTime(8, 25), period: Period.PERIOD_0_PASSING },
  { start: toTime(8, 25), end: toTime(9, 5), period: Period.PERIOD_1 },
  { start: toTime(9, 5), end: toTime(9, 15), period: Period.PERIOD_1_PASSING },
  { start: toTime(9, 15), end: toTime(9, 55), period: Period.PERIOD_2 },
  { start: toTime(9, 55), end: toTime(10, 5), period: Period.PERIOD_2_PASSING },
  { start: toTime(10, 5), end: toTime(10, 45), period: Period.PERIOD_3 },
  { start: toTime(10, 45), end: toTime(10, 55), period: Period.PERIOD_3_PASSING },
  { start: toTime(10, 55), end: toTime(11, 35), period: Period.PERIOD_4 },
  { start: toTime(11, 35), end: toTime(12, 5), period: Period.LUNCH },
  { start: toTime(12, 5), end: toTime(12, 45), period: Period.PERIOD_5 },
  { start: toTime(12, 45), end: toTime(12, 55), period: Period.PERIOD_5_PASSING },
  { start: toTime(12, 55), end: toTime(13, 35), period: Period.PERIOD_6 },
  { start: toTime(13, 35), end: toTime(14, 5), period: Period.OFFICE },
  { start: toTime(14, 5), end: toTime(14, 35), period: Period.SMALL_GROUP_P1 },
  { start: toTime(14, 35), end: toTime(14, 45), period: Period.SMALL_GROUP_PASSING },
  { start: toTime(14, 45), end: toTime(15, 15), period: Period.SMALL_GROUP_P2 },
  { start: toTime(15, 15), end: toTime(24, 0), period: Period.DONE },
];
export const SmallGroups34: PeriodSchedule = [
  { start: toTime(0, 0), end: toTime(7, 40), period: Period.NONE },
  { start: toTime(7, 40), end: toTime(8, 20), period: Period.PERIOD_0 },
  { start: toTime(8, 20), end: toTime(8, 25), period: Period.PERIOD_0_PASSING },
  { start: toTime(8, 25), end: toTime(9, 5), period: Period.PERIOD_1 },
  { start: toTime(9, 5), end: toTime(9, 15), period: Period.PERIOD_1_PASSING },
  { start: toTime(9, 15), end: toTime(9, 55), period: Period.PERIOD_2 },
  { start: toTime(9, 55), end: toTime(10, 5), period: Period.PERIOD_2_PASSING },
  { start: toTime(10, 5), end: toTime(10, 45), period: Period.PERIOD_3 },
  { start: toTime(10, 45), end: toTime(10, 55), period: Period.PERIOD_3_PASSING },
  { start: toTime(10, 55), end: toTime(11, 35), period: Period.PERIOD_4 },
  { start: toTime(11, 35), end: toTime(12, 5), period: Period.LUNCH },
  { start: toTime(12, 5), end: toTime(12, 45), period: Period.PERIOD_5 },
  { start: toTime(12, 45), end: toTime(12, 55), period: Period.PERIOD_5_PASSING },
  { start: toTime(12, 55), end: toTime(13, 35), period: Period.PERIOD_6 },
  { start: toTime(13, 35), end: toTime(14, 5), period: Period.OFFICE },
  { start: toTime(14, 5), end: toTime(14, 35), period: Period.SMALL_GROUP_P3 },
  { start: toTime(14, 35), end: toTime(14, 45), period: Period.SMALL_GROUP_PASSING },
  { start: toTime(14, 45), end: toTime(15, 15), period: Period.SMALL_GROUP_P4 },
  { start: toTime(15, 15), end: toTime(24, 0), period: Period.DONE },
];
export const SmallGroups56: PeriodSchedule = [
  { start: toTime(0, 0), end: toTime(7, 40), period: Period.NONE },
  { start: toTime(7, 40), end: toTime(8, 20), period: Period.PERIOD_0 },
  { start: toTime(8, 20), end: toTime(8, 25), period: Period.PERIOD_0_PASSING },
  { start: toTime(8, 25), end: toTime(9, 5), period: Period.PERIOD_1 },
  { start: toTime(9, 5), end: toTime(9, 15), period: Period.PERIOD_1_PASSING },
  { start: toTime(9, 15), end: toTime(9, 55), period: Period.PERIOD_2 },
  { start: toTime(9, 55), end: toTime(10, 5), period: Period.PERIOD_2_PASSING },
  { start: toTime(10, 5), end: toTime(10, 45), period: Period.PERIOD_3 },
  { start: toTime(10, 45), end: toTime(10, 55), period: Period.PERIOD_3_PASSING },
  { start: toTime(10, 55), end: toTime(11, 35), period: Period.PERIOD_4 },
  { start: toTime(11, 35), end: toTime(12, 5), period: Period.LUNCH },
  { start: toTime(12, 5), end: toTime(12, 45), period: Period.PERIOD_5 },
  { start: toTime(12, 45), end: toTime(12, 55), period: Period.PERIOD_5_PASSING },
  { start: toTime(12, 55), end: toTime(13, 35), period: Period.PERIOD_6 },
  { start: toTime(13, 35), end: toTime(14, 5), period: Period.OFFICE },
  { start: toTime(14, 5), end: toTime(14, 35), period: Period.SMALL_GROUP_P5 },
  { start: toTime(14, 35), end: toTime(14, 45), period: Period.SMALL_GROUP_PASSING },
  { start: toTime(14, 45), end: toTime(15, 15), period: Period.SMALL_GROUP_P6 },
  { start: toTime(15, 15), end: toTime(24, 0), period: Period.DONE },
];
export const SmallGroupsWellnessClubs: PeriodSchedule = [
  { start: toTime(0, 0), end: toTime(7, 40), period: Period.NONE },
  { start: toTime(7, 40), end: toTime(8, 20), period: Period.PERIOD_0 },
  { start: toTime(8, 20), end: toTime(8, 30), period: Period.PERIOD_0_PASSING },
  { start: toTime(8, 30), end: toTime(9, 55), period: Period.PERIOD_1 },
  { start: toTime(9, 55), end: toTime(10, 5), period: Period.PERIOD_1_PASSING },
  { start: toTime(10, 5), end: toTime(11, 25), period: Period.PERIOD_3 },
  { start: toTime(11, 25), end: toTime(11, 55), period: Period.LUNCH },
  { start: toTime(11, 55), end: toTime(13, 15), period: Period.PERIOD_5 },
  { start: toTime(13, 15), end: toTime(13, 50), period: Period.OFFICE },
  { start: toTime(13, 50), end: toTime(14, 30), period: Period.SMALL_GROUP_WELLNESS },
  { start: toTime(14, 30), end: toTime(14, 35), period: Period.SMALL_GROUP_PASSING },
  { start: toTime(14, 35), end: toTime(15, 15), period: Period.SMALL_GROUP_CLUBS },
  { start: toTime(15, 15), end: toTime(24, 0), period: Period.DONE },
];
export const SmallGroups0Clubs: PeriodSchedule = [
  { start: toTime(0, 0), end: toTime(7, 40), period: Period.NONE },
  { start: toTime(7, 40), end: toTime(8, 20), period: Period.PERIOD_0 },
  { start: toTime(8, 20), end: toTime(8, 30), period: Period.PERIOD_0_PASSING },
  { start: toTime(8, 30), end: toTime(9, 55), period: Period.PERIOD_2 },
  { start: toTime(9, 55), end: toTime(10, 5), period: Period.PERIOD_2_PASSING },
  { start: toTime(10, 5), end: toTime(11, 25), period: Period.PERIOD_4 },
  { start: toTime(11, 25), end: toTime(11, 55), period: Period.LUNCH },
  { start: toTime(11, 55), end: toTime(13, 15), period: Period.PERIOD_6 },
  { start: toTime(13, 15), end: toTime(13, 50), period: Period.OFFICE },
  { start: toTime(13, 50), end: toTime(14, 30), period: Period.SMALL_GROUP_P0 },
  { start: toTime(14, 30), end: toTime(14, 35), period: Period.SMALL_GROUP_PASSING },
  { start: toTime(14, 35), end: toTime(15, 15), period: Period.SMALL_GROUP_CLUBS },
  { start: toTime(15, 15), end: toTime(24, 0), period: Period.DONE },
];

// End Small Group Schedule

export const BlockOddSchedule: PeriodSchedule = [
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
  { start: toTime(15, 13), end: toTime(24, 0), period: Period.DONE },
];

export const BlockEvenSchedule: PeriodSchedule = [
  { start: toTime(0, 0), end: toTime(7, 28), period: Period.NONE },
  { start: toTime(7, 28), end: toTime(8, 24), period: Period.PERIOD_0 },
  { start: toTime(8, 24), end: toTime(8, 30), period: Period.PERIOD_0_PASSING },
  { start: toTime(8, 30), end: toTime(10, 14), period: Period.PERIOD_2 },
  { start: toTime(10, 14), end: toTime(10, 24), period: Period.BREAK },
  { start: toTime(10, 24), end: toTime(10, 29), period: Period.BREAK_PASSING },
  { start: toTime(10, 29), end: toTime(12, 13), period: Period.PERIOD_4 },
  { start: toTime(12, 13), end: toTime(12, 19), period: Period.PERIOD_4_PASSING },
  { start: toTime(12, 19), end: toTime(12, 54), period: Period.STEP_EVEN },
  { start: toTime(12, 54), end: toTime(13, 24), period: Period.LUNCH },
  { start: toTime(13, 24), end: toTime(13, 29), period: Period.LUNCH_PASSING },
  { start: toTime(13, 29), end: toTime(15, 13), period: Period.PERIOD_6 },
  { start: toTime(15, 13), end: toTime(24, 0), period: Period.DONE },
];

/*
export const BlockOddSchedule: PeriodSchedule = [
  { start: toTime(0, 0), end: toTime(7, 45), period: Period.NONE },
  { start: toTime(7, 45), end: toTime(8, 25), period: Period.PERIOD_0 },
  { start: toTime(8, 20), end: toTime(8, 30), period: Period.PERIOD_0_PASSING },
  { start: toTime(8, 30), end: toTime(9, 55), period: Period.PERIOD_1 },
  { start: toTime(9, 55), end: toTime(10, 5), period: Period.PERIOD_1_PASSING },
  { start: toTime(10, 5), end: toTime(11, 25), period: Period.PERIOD_3 },
  { start: toTime(11, 25), end: toTime(11, 55), period: Period.LUNCH },
  { start: toTime(11, 55), end: toTime(13, 15), period: Period.PERIOD_5 },
  { start: toTime(13, 15), end: toTime(13, 25), period: Period.PERIOD_5_PASSING },
  { start: toTime(13, 25), end: toTime(14, 25), period: Period.OFFICE },
  { start: toTime(14, 25), end: toTime(15, 15), period: Period.PREP },
  { start: toTime(15, 15), end: toTime(24, 0), period: Period.DONE },
];
export const BlockEvenSchedule: PeriodSchedule = [
  { start: toTime(0, 0), end: toTime(7, 45), period: Period.NONE },
  { start: toTime(7, 45), end: toTime(8, 25), period: Period.PERIOD_0 },
  { start: toTime(8, 20), end: toTime(8, 30), period: Period.PERIOD_0_PASSING },
  { start: toTime(8, 30), end: toTime(9, 55), period: Period.PERIOD_2 },
  { start: toTime(9, 55), end: toTime(10, 5), period: Period.PERIOD_2_PASSING },
  { start: toTime(10, 5), end: toTime(11, 25), period: Period.PERIOD_4 },
  { start: toTime(11, 25), end: toTime(11, 55), period: Period.LUNCH },
  { start: toTime(11, 55), end: toTime(13, 15), period: Period.PERIOD_6 },
  { start: toTime(13, 15), end: toTime(13, 25), period: Period.PERIOD_6_PASSING },
  { start: toTime(13, 25), end: toTime(14, 25), period: Period.OFFICE },
  { start: toTime(14, 25), end: toTime(15, 15), period: Period.PREP },
  { start: toTime(15, 15), end: toTime(24, 0), period: Period.DONE },
];
*/

// reverse odd block schedules
export const ReverseBlockOddSchedule: PeriodSchedule = [
  { start: toTime(0, 0), end: toTime(7, 28), period: Period.NONE },
  { start: toTime(7, 28), end: toTime(8, 24), period: Period.PERIOD_0 },
  { start: toTime(8, 24), end: toTime(8, 30), period: Period.PERIOD_0_PASSING },
  { start: toTime(8, 30), end: toTime(10, 14), period: Period.PERIOD_5 },
  { start: toTime(10, 14), end: toTime(10, 24), period: Period.BREAK },
  { start: toTime(10, 24), end: toTime(10, 29), period: Period.BREAK_PASSING },
  { start: toTime(10, 29), end: toTime(12, 13), period: Period.PERIOD_3 },
  { start: toTime(12, 13), end: toTime(12, 19), period: Period.PERIOD_3_PASSING },
  { start: toTime(12, 19), end: toTime(12, 54), period: Period.STEP_ODD },
  { start: toTime(12, 54), end: toTime(13, 24), period: Period.LUNCH },
  { start: toTime(13, 24), end: toTime(13, 29), period: Period.LUNCH_PASSING },
  { start: toTime(13, 29), end: toTime(15, 13), period: Period.PERIOD_1 },
  { start: toTime(15, 13), end: toTime(24, 0), period: Period.DONE },
];
export const MinimumReverseBlockOddSchedule78: PeriodSchedule = [
  { start: toTime(0, 0), end: toTime(7, 28), period: Period.NONE },
  { start: toTime(7, 28), end: toTime(8, 24), period: Period.PERIOD_0 },
  { start: toTime(8, 24), end: toTime(8, 30), period: Period.PERIOD_0_PASSING },
  { start: toTime(8, 30), end: toTime(10, 14), period: Period.PERIOD_5 },
  { start: toTime(10, 14), end: toTime(10, 24), period: Period.BREAK },
  { start: toTime(10, 24), end: toTime(10, 29), period: Period.BREAK_PASSING },
  { start: toTime(10, 29), end: toTime(12, 13), period: Period.PERIOD_3 },
  { start: toTime(12, 13), end: toTime(24, 0), period: Period.DONE },
];

// special sbac 3, 1, 5 block
export const SpecialBlockOddSchedule: PeriodSchedule = [
  { start: toTime(0, 0), end: toTime(7, 28), period: Period.NONE },
  { start: toTime(7, 28), end: toTime(8, 24), period: Period.PERIOD_0 },
  { start: toTime(8, 24), end: toTime(8, 30), period: Period.PERIOD_0_PASSING },
  { start: toTime(8, 30), end: toTime(10, 14), period: Period.PERIOD_3},
  { start: toTime(10, 14), end: toTime(10, 24), period: Period.BREAK },
  { start: toTime(10, 24), end: toTime(10, 29), period: Period.BREAK_PASSING },
  { start: toTime(10, 29), end: toTime(12, 13), period: Period.PERIOD_1 },
  { start: toTime(12, 13), end: toTime(12, 19), period: Period.PERIOD_1_PASSING },
  { start: toTime(12, 19), end: toTime(12, 54), period: Period.STEP_ODD },
  { start: toTime(12, 54), end: toTime(13, 24), period: Period.LUNCH },
  { start: toTime(13, 24), end: toTime(13, 29), period: Period.LUNCH_PASSING },
  { start: toTime(13, 29), end: toTime(15, 13), period: Period.PERIOD_5 },
  { start: toTime(15, 13), end: toTime(24, 0), period: Period.DONE },
];

// special sbac 4, 2, 6 block
export const SpecialBlockEvenSchedule: PeriodSchedule = [
  { start: toTime(0, 0), end: toTime(7, 28), period: Period.NONE },
  { start: toTime(7, 28), end: toTime(8, 24), period: Period.PERIOD_0 },
  { start: toTime(8, 24), end: toTime(8, 30), period: Period.PERIOD_0_PASSING },
  { start: toTime(8, 30), end: toTime(10, 14), period: Period.PERIOD_4 },
  { start: toTime(10, 14), end: toTime(10, 24), period: Period.BREAK },
  { start: toTime(10, 24), end: toTime(10, 29), period: Period.BREAK_PASSING },
  { start: toTime(10, 29), end: toTime(12, 13), period: Period.PERIOD_2 },
  { start: toTime(12, 13), end: toTime(12, 19), period: Period.PERIOD_2_PASSING },
  { start: toTime(12, 19), end: toTime(12, 54), period: Period.STEP_EVEN },
  { start: toTime(12, 54), end: toTime(13, 24), period: Period.LUNCH },
  { start: toTime(13, 24), end: toTime(13, 29), period: Period.LUNCH_PASSING },
  { start: toTime(13, 29), end: toTime(15, 13), period: Period.PERIOD_6 },
  { start: toTime(15, 13), end: toTime(24, 0), period: Period.DONE },
];

export const AssemblySchedule: PeriodSchedule = [
  { start: toTime(0, 0), end: toTime(7, 28), period: Period.NONE },
  { start: toTime(7, 28), end: toTime(8, 15), period: Period.PERIOD_0 },
  { start: toTime(8, 15), end: toTime(8, 30), period: Period.PERIOD_0_PASSING },
  { start: toTime(8, 30), end: toTime(9, 18), period: Period.PERIOD_1 },
  { start: toTime(9, 18), end: toTime(9, 24), period: Period.PERIOD_1_PASSING },
  { start: toTime(9, 24), end: toTime(10, 12), period: Period.PERIOD_2 },
  { start: toTime(10, 12), end: toTime(11, 0), period: Period.ASSEMBLY },
  { start: toTime(11, 0), end: toTime(11, 9), period: Period.BREAK },
  { start: toTime(11, 9), end: toTime(11, 15), period: Period.BREAK_PASSING },
  { start: toTime(11, 15), end: toTime(12, 3), period: Period.PERIOD_3 },
  { start: toTime(12, 3), end: toTime(12, 9), period: Period.PERIOD_3_PASSING },
  { start: toTime(12, 9), end: toTime(12, 57), period: Period.PERIOD_4 },
  { start: toTime(12, 57), end: toTime(13, 27), period: Period.LUNCH },
  { start: toTime(13, 27), end: toTime(13, 33), period: Period.LUNCH_PASSING },
  { start: toTime(13, 33), end: toTime(14, 21), period: Period.PERIOD_5 },
  { start: toTime(14, 21), end: toTime(14, 27), period: Period.PERIOD_5_PASSING },
  { start: toTime(14, 27), end: toTime(15, 15), period: Period.PERIOD_6 },
  { start: toTime(15, 15), end: toTime(24, 0), period: Period.DONE },
];

export const BlockOddSchedule78: PeriodSchedule = [
  { start: toTime(0, 0), end: toTime(7, 28), period: Period.NONE },
  { start: toTime(7, 28), end: toTime(8, 24), period: Period.PERIOD_0 },
  { start: toTime(8, 24), end: toTime(8, 30), period: Period.PERIOD_0_PASSING },
  { start: toTime(8, 30), end: toTime(10, 14), period: Period.PERIOD_1 },
  { start: toTime(10, 14), end: toTime(10, 24), period: Period.BREAK },
  { start: toTime(10, 24), end: toTime(10, 29), period: Period.BREAK_PASSING },
  { start: toTime(10, 29), end: toTime(12, 13), period: Period.PERIOD_3 },
  { start: toTime(12, 13), end: toTime(12, 43), period: Period.LUNCH },
  { start: toTime(12, 43), end: toTime(12, 48), period: Period.LUNCH_PASSING },
  { start: toTime(12, 48), end: toTime(13, 23), period: Period.HOMEROOM },
  { start: toTime(13, 23), end: toTime(13, 29), period: Period.HOMEROOM_PASSING },
  { start: toTime(13, 29), end: toTime(15, 13), period: Period.PERIOD_5 },
  { start: toTime(15, 13), end: toTime(24, 0), period: Period.DONE },
];

export const BlockEvenSchedule78: PeriodSchedule = [
  { start: toTime(0, 0), end: toTime(7, 28), period: Period.NONE },
  { start: toTime(7, 28), end: toTime(8, 24), period: Period.PERIOD_0 },
  { start: toTime(8, 24), end: toTime(8, 30), period: Period.PERIOD_0_PASSING },
  { start: toTime(8, 30), end: toTime(10, 14), period: Period.PERIOD_2 },
  { start: toTime(10, 14), end: toTime(10, 24), period: Period.BREAK },
  { start: toTime(10, 24), end: toTime(10, 29), period: Period.BREAK_PASSING },
  { start: toTime(10, 29), end: toTime(12, 13), period: Period.PERIOD_4 },
  { start: toTime(12, 13), end: toTime(12, 43), period: Period.LUNCH },
  { start: toTime(12, 43), end: toTime(12, 48), period: Period.LUNCH_PASSING },
  { start: toTime(12, 48), end: toTime(13, 23), period: Period.HOMEROOM },
  { start: toTime(13, 23), end: toTime(13, 29), period: Period.HOMEROOM_PASSING },
  { start: toTime(13, 29), end: toTime(15, 13), period: Period.PERIOD_6 },
  { start: toTime(15, 13), end: toTime(24, 0), period: Period.DONE },
];

export const HSBlockOddScheduleFor78: PeriodSchedule = [
  { start: toTime(0, 0), end: toTime(7, 28), period: Period.NONE },
  { start: toTime(7, 28), end: toTime(8, 24), period: Period.PERIOD_0 },
  { start: toTime(8, 24), end: toTime(8, 30), period: Period.PERIOD_0_PASSING },
  { start: toTime(8, 30), end: toTime(10, 14), period: Period.PERIOD_1 },
  { start: toTime(10, 14), end: toTime(10, 24), period: Period.BREAK },
  { start: toTime(10, 24), end: toTime(10, 29), period: Period.BREAK_PASSING },
  { start: toTime(10, 29), end: toTime(12, 13), period: Period.PERIOD_3 },
  { start: toTime(12, 13), end: toTime(12, 19), period: Period.PERIOD_3_PASSING },
  { start: toTime(12, 19), end: toTime(12, 54), period: Period.HOMEROOM },
  { start: toTime(12, 54), end: toTime(13, 24), period: Period.LUNCH },
  { start: toTime(13, 24), end: toTime(13, 29), period: Period.LUNCH_PASSING },
  { start: toTime(13, 29), end: toTime(15, 13), period: Period.PERIOD_5 },
  { start: toTime(15, 13), end: toTime(24, 0), period: Period.DONE },
];

export const HSBlockEvenScheduleFor78: PeriodSchedule = [
  { start: toTime(0, 0), end: toTime(7, 28), period: Period.NONE },
  { start: toTime(7, 28), end: toTime(8, 24), period: Period.PERIOD_0 },
  { start: toTime(8, 24), end: toTime(8, 30), period: Period.PERIOD_0_PASSING },
  { start: toTime(8, 30), end: toTime(10, 14), period: Period.PERIOD_2 },
  { start: toTime(10, 14), end: toTime(10, 24), period: Period.BREAK },
  { start: toTime(10, 24), end: toTime(10, 29), period: Period.BREAK_PASSING },
  { start: toTime(10, 29), end: toTime(12, 13), period: Period.PERIOD_4 },
  { start: toTime(12, 13), end: toTime(12, 19), period: Period.PERIOD_4_PASSING },
  { start: toTime(12, 19), end: toTime(12, 54), period: Period.HOMEROOM },
  { start: toTime(12, 54), end: toTime(13, 24), period: Period.LUNCH },
  { start: toTime(13, 24), end: toTime(13, 29), period: Period.LUNCH_PASSING },
  { start: toTime(13, 29), end: toTime(15, 13), period: Period.PERIOD_6 },
  { start: toTime(15, 13), end: toTime(24, 0), period: Period.DONE },
];

// special sbac 3, 1, 5 block for 7/8
export const HSSpecialBlockOddScheduleFor78: PeriodSchedule = [
  { start: toTime(0, 0), end: toTime(7, 28), period: Period.NONE },
  { start: toTime(7, 28), end: toTime(8, 24), period: Period.PERIOD_0 },
  { start: toTime(8, 24), end: toTime(8, 30), period: Period.PERIOD_0_PASSING },
  { start: toTime(8, 30), end: toTime(10, 14), period: Period.PERIOD_3},
  { start: toTime(10, 14), end: toTime(10, 24), period: Period.BREAK },
  { start: toTime(10, 24), end: toTime(10, 29), period: Period.BREAK_PASSING },
  { start: toTime(10, 29), end: toTime(12, 13), period: Period.PERIOD_1 },
  { start: toTime(12, 13), end: toTime(12, 19), period: Period.PERIOD_1_PASSING },
  { start: toTime(12, 19), end: toTime(12, 54), period: Period.HOMEROOM },
  { start: toTime(12, 54), end: toTime(13, 24), period: Period.LUNCH },
  { start: toTime(13, 24), end: toTime(13, 29), period: Period.LUNCH_PASSING },
  { start: toTime(13, 29), end: toTime(15, 13), period: Period.PERIOD_5 },
  { start: toTime(15, 13), end: toTime(24, 0), period: Period.DONE },
];

// special sbac 4, 2, 6 block for 7/8
export const HSSpecialBlockEvenScheduleFor78: PeriodSchedule = [
  { start: toTime(0, 0), end: toTime(7, 28), period: Period.NONE },
  { start: toTime(7, 28), end: toTime(8, 24), period: Period.PERIOD_0 },
  { start: toTime(8, 24), end: toTime(8, 30), period: Period.PERIOD_0_PASSING },
  { start: toTime(8, 30), end: toTime(10, 14), period: Period.PERIOD_4 },
  { start: toTime(10, 14), end: toTime(10, 24), period: Period.BREAK },
  { start: toTime(10, 24), end: toTime(10, 29), period: Period.BREAK_PASSING },
  { start: toTime(10, 29), end: toTime(12, 13), period: Period.PERIOD_2 },
  { start: toTime(12, 13), end: toTime(12, 19), period: Period.PERIOD_2_PASSING },
  { start: toTime(12, 19), end: toTime(12, 54), period: Period.HOMEROOM },
  { start: toTime(12, 54), end: toTime(13, 24), period: Period.LUNCH },
  { start: toTime(13, 24), end: toTime(13, 29), period: Period.LUNCH_PASSING },
  { start: toTime(13, 29), end: toTime(15, 13), period: Period.PERIOD_6 },
  { start: toTime(15, 13), end: toTime(24, 0), period: Period.DONE },
];

/*
//special sbac 3, 1, 5, block for 7/8
export const SpecialBlockOddSchedule78: PeriodSchedule = [
  { start: toTime(0, 0), end: toTime(7, 28), period: Period.NONE },
  { start: toTime(7, 28), end: toTime(8, 24), period: Period.PERIOD_0 },
  { start: toTime(8, 24), end: toTime(8, 30), period: Period.PERIOD_0_PASSING },
  { start: toTime(8, 30), end: toTime(10, 14), period: Period.PERIOD_3 },
  { start: toTime(10, 14), end: toTime(10, 24), period: Period.BREAK },
  { start: toTime(10, 24), end: toTime(10, 29), period: Period.BREAK_PASSING },
  { start: toTime(10, 29), end: toTime(12, 13), period: Period.PERIOD_1 },
  { start: toTime(12, 13), end: toTime(12, 43), period: Period.LUNCH },
  { start: toTime(12, 43), end: toTime(12, 48), period: Period.LUNCH_PASSING },
  { start: toTime(12, 48), end: toTime(13, 23), period: Period.HOMEROOM },
  { start: toTime(13, 23), end: toTime(13, 29), period: Period.HOMEROOM_PASSING },
  { start: toTime(13, 29), end: toTime(15, 13), period: Period.PERIOD_5 },
  { start: toTime(15, 13), end: toTime(24, 0), period: Period.DONE },
];

//special sbac 4, 2, 6 block for 7/8
export const SpecialBlockEvenSchedule78: PeriodSchedule = [
  { start: toTime(0, 0), end: toTime(7, 28), period: Period.NONE },
  { start: toTime(7, 28), end: toTime(8, 24), period: Period.PERIOD_0 },
  { start: toTime(8, 24), end: toTime(8, 30), period: Period.PERIOD_0_PASSING },
  { start: toTime(8, 30), end: toTime(10, 14), period: Period.PERIOD_4 },
  { start: toTime(10, 14), end: toTime(10, 24), period: Period.BREAK },
  { start: toTime(10, 24), end: toTime(10, 29), period: Period.BREAK_PASSING },
  { start: toTime(10, 29), end: toTime(12, 13), period: Period.PERIOD_2 },
  { start: toTime(12, 13), end: toTime(12, 43), period: Period.LUNCH },
  { start: toTime(12, 43), end: toTime(12, 48), period: Period.LUNCH_PASSING },
  { start: toTime(12, 48), end: toTime(13, 23), period: Period.HOMEROOM },
  { start: toTime(13, 23), end: toTime(13, 29), period: Period.HOMEROOM_PASSING },
  { start: toTime(13, 29), end: toTime(15, 13), period: Period.PERIOD_6 },
  { start: toTime(15, 13), end: toTime(24, 0), period: Period.DONE },
];
*/

export const AssemblySchedule7: PeriodSchedule = [
  { start: toTime(0, 0), end: toTime(7, 28), period: Period.NONE },
  { start: toTime(7, 28), end: toTime(8, 15), period: Period.PERIOD_0 },
  { start: toTime(8, 15), end: toTime(8, 30), period: Period.PERIOD_0_PASSING },
  { start: toTime(8, 30), end: toTime(9, 18), period: Period.PERIOD_1 },
  { start: toTime(9, 18), end: toTime(9, 24), period: Period.PERIOD_1_PASSING },
  { start: toTime(9, 24), end: toTime(10, 12), period: Period.PERIOD_2 },
  { start: toTime(10, 12), end: toTime(11, 0), period: Period.ASSEMBLY },
  { start: toTime(11, 0), end: toTime(11, 9), period: Period.BREAK },
  { start: toTime(11, 9), end: toTime(11, 15), period: Period.BREAK_PASSING },
  { start: toTime(11, 15), end: toTime(12, 3), period: Period.PERIOD_3 },
  { start: toTime(12, 3), end: toTime(12, 33), period: Period.LUNCH },
  { start: toTime(12, 33), end: toTime(12, 39), period: Period.LUNCH_PASSING },
  { start: toTime(12, 39), end: toTime(13, 27), period: Period.PERIOD_4 },
  { start: toTime(13, 27), end: toTime(13, 33), period: Period.PERIOD_4_PASSING },
  { start: toTime(13, 33), end: toTime(14, 21), period: Period.PERIOD_5 },
  { start: toTime(14, 21), end: toTime(14, 27), period: Period.PERIOD_5_PASSING },
  { start: toTime(14, 27), end: toTime(15, 15), period: Period.PERIOD_6 },
  { start: toTime(15, 15), end: toTime(24, 0), period: Period.DONE },
];

export const AssemblySchedule8: PeriodSchedule = [
  { start: toTime(0, 0), end: toTime(7, 28), period: Period.NONE },
  { start: toTime(7, 28), end: toTime(8, 15), period: Period.PERIOD_0 },
  { start: toTime(8, 15), end: toTime(8, 30), period: Period.PERIOD_0_PASSING },
  { start: toTime(8, 30), end: toTime(9, 18), period: Period.PERIOD_1 },
  { start: toTime(9, 18), end: toTime(9, 24), period: Period.PERIOD_1_PASSING },
  { start: toTime(9, 24), end: toTime(10, 12), period: Period.PERIOD_2 },
  { start: toTime(10, 12), end: toTime(11, 0), period: Period.ASSEMBLY },
  { start: toTime(11, 0), end: toTime(11, 9), period: Period.BREAK },
  { start: toTime(11, 9), end: toTime(11, 15), period: Period.BREAK_PASSING },
  { start: toTime(11, 15), end: toTime(12, 3), period: Period.PERIOD_3 },
  { start: toTime(12, 3), end: toTime(12, 33), period: Period.LUNCH },
  { start: toTime(12, 33), end: toTime(12, 39), period: Period.LUNCH_PASSING },
  { start: toTime(12, 39), end: toTime(13, 27), period: Period.PERIOD_4 },
  { start: toTime(13, 27), end: toTime(13, 33), period: Period.PERIOD_4_PASSING },
  { start: toTime(13, 33), end: toTime(14, 21), period: Period.PERIOD_5 },
  { start: toTime(14, 21), end: toTime(14, 27), period: Period.PERIOD_5_PASSING },
  { start: toTime(14, 27), end: toTime(15, 15), period: Period.PERIOD_6 },
  { start: toTime(15, 15), end: toTime(24, 0), period: Period.DONE },
];

export const EarlyReleaseSchedule78: PeriodSchedule = [
  { start: toTime(0, 0), end: toTime(7, 28), period: Period.NONE },
  { start: toTime(7, 28), end: toTime(8, 24), period: Period.PERIOD_0 },
  { start: toTime(8, 24), end: toTime(8, 30), period: Period.PERIOD_0_PASSING },
  { start: toTime(8, 30), end: toTime(9, 26), period: Period.PERIOD_1 },
  { start: toTime(9, 26), end: toTime(9, 32), period: Period.PERIOD_1_PASSING },
  { start: toTime(9, 32), end: toTime(10, 28), period: Period.PERIOD_2 },
  { start: toTime(10, 28), end: toTime(10, 38), period: Period.BREAK },
  { start: toTime(10, 38), end: toTime(10, 43), period: Period.BREAK_PASSING },
  { start: toTime(10, 43), end: toTime(11, 39), period: Period.PERIOD_3 },
  { start: toTime(11, 39), end: toTime(11, 45), period: Period.PERIOD_3_PASSING },
  { start: toTime(11, 45), end: toTime(12, 41), period: Period.PERIOD_4 },
  { start: toTime(12, 41), end: toTime(24, 0), period: Period.DONE },
];

/*
*
* Pre-Finals Schedule 2019 - 2020
*
*/

/*

export const PreFinals3264Schedule: PeriodSchedule = [
  { start: toTime(0, 0), end: toTime(8, 30), period: Period.NONE },
  { start: toTime(8, 30), end: toTime(10, 35), period: Period.PERIOD_3 },
  { start: toTime(10, 35), end: toTime(10, 45), period: Period.BREAK },
  { start: toTime(10, 45), end: toTime(10, 50), period: Period.BREAK_PASSING },
  { start: toTime(10, 50), end: toTime(11, 38), period: Period.PERIOD_2 },
  { start: toTime(11, 38), end: toTime(11, 44), period: Period.PERIOD_2_PASSING },
  { start: toTime(11, 44), end: toTime(12, 32), period: Period.PERIOD_6 },
  { start: toTime(12, 32), end: toTime(13, 2), period: Period.LUNCH },
  { start: toTime(13, 2), end: toTime(13, 8), period: Period.LUNCH_PASSING },
  { start: toTime(13, 8), end: toTime(15, 13), period: Period.PERIOD_4 },
  { start: toTime(15, 13), end: toTime(24, 0), period: Period.DONE },
];

export const PreFinals2156Schedule: PeriodSchedule = [
  { start: toTime(0, 0), end: toTime(8, 30), period: Period.NONE },
  { start: toTime(8, 30), end: toTime(10, 35), period: Period.PERIOD_2 },
  { start: toTime(10, 35), end: toTime(10, 45), period: Period.BREAK },
  { start: toTime(10, 45), end: toTime(10, 50), period: Period.BREAK_PASSING },
  { start: toTime(10, 50), end: toTime(11, 38), period: Period.PERIOD_1 },
  { start: toTime(11, 38), end: toTime(11, 44), period: Period.PERIOD_1_PASSING },
  { start: toTime(11, 44), end: toTime(12, 32), period: Period.PERIOD_5 },
  { start: toTime(12, 32), end: toTime(13, 2), period: Period.LUNCH },
  { start: toTime(13, 2), end: toTime(13, 8), period: Period.LUNCH_PASSING },
  { start: toTime(13, 8), end: toTime(15, 13), period: Period.PERIOD_6 },
  { start: toTime(15, 13), end: toTime(24, 0), period: Period.DONE },
];

export const PreFinals1345Schedule: PeriodSchedule = [
  { start: toTime(0, 0), end: toTime(8, 30), period: Period.NONE },
  { start: toTime(8, 30), end: toTime(10, 35), period: Period.PERIOD_1 },
  { start: toTime(10, 35), end: toTime(10, 45), period: Period.BREAK },
  { start: toTime(10, 45), end: toTime(10, 50), period: Period.BREAK_PASSING },
  { start: toTime(10, 50), end: toTime(11, 38), period: Period.PERIOD_3 },
  { start: toTime(11, 38), end: toTime(11, 44), period: Period.PERIOD_3_PASSING },
  { start: toTime(11, 44), end: toTime(12, 32), period: Period.PERIOD_4 },
  { start: toTime(12, 32), end: toTime(13, 2), period: Period.LUNCH },
  { start: toTime(13, 2), end: toTime(13, 8), period: Period.LUNCH_PASSING },
  { start: toTime(13, 8), end: toTime(15, 13), period: Period.PERIOD_5 },
  { start: toTime(15, 13), end: toTime(24, 0), period: Period.DONE },
];

*/

export const FinalAssemblySchedule78: PeriodSchedule = [
  { start: toTime(0, 0), end: toTime(7, 28), period: Period.NONE },
  { start: toTime(7, 28), end: toTime(8, 15), period: Period.PERIOD_0 },
  { start: toTime(8, 15), end: toTime(8, 30), period: Period.PERIOD_0_PASSING },
  { start: toTime(8, 30), end: toTime(9, 18), period: Period.PERIOD_1 },
  { start: toTime(9, 18), end: toTime(9, 24), period: Period.PERIOD_1_PASSING },
  { start: toTime(9, 24), end: toTime(10, 12), period: Period.PERIOD_2 },
  { start: toTime(10, 12), end: toTime(11, 0), period: Period.ASSEMBLY },
  { start: toTime(11, 0), end: toTime(11, 9), period: Period.BREAK },
  { start: toTime(11, 9), end: toTime(11, 15), period: Period.BREAK_PASSING },
  { start: toTime(11, 15), end: toTime(12, 3), period: Period.PERIOD_3 },
  { start: toTime(12, 3), end: toTime(12, 9), period: Period.PERIOD_3_PASSING },
  { start: toTime(12, 9), end: toTime(12, 57), period: Period.PERIOD_4 },
  { start: toTime(12, 57), end: toTime(13, 27), period: Period.LUNCH },
  { start: toTime(13, 27), end: toTime(13, 33), period: Period.LUNCH_PASSING },
  { start: toTime(13, 33), end: toTime(14, 21), period: Period.PERIOD_5 },
  { start: toTime(14, 21), end: toTime(14, 27), period: Period.PERIOD_5_PASSING },
  { start: toTime(14, 27), end: toTime(15, 15), period: Period.PERIOD_6 },
  { start: toTime(15, 15), end: toTime(24, 0), period: Period.DONE },
];

export const FinalAssemblySchedule12: PeriodSchedule = [
  { start: toTime(0, 0), end: toTime(7, 28), period: Period.NONE },
  { start: toTime(7, 28), end: toTime(8, 15), period: Period.PERIOD_0 },
  { start: toTime(8, 15), end: toTime(8, 30), period: Period.PERIOD_0_PASSING },
  { start: toTime(8, 30), end: toTime(9, 18), period: Period.PERIOD_1 },
  { start: toTime(9, 18), end: toTime(9, 24), period: Period.PERIOD_1_PASSING },
  { start: toTime(9, 24), end: toTime(10, 12), period: Period.PERIOD_2 },
  { start: toTime(10, 12), end: toTime(11, 0), period: Period.ASSEMBLY },
  { start: toTime(11, 0), end: toTime(11, 9), period: Period.BREAK },
  { start: toTime(11, 9), end: toTime(11, 15), period: Period.BREAK_PASSING },
  { start: toTime(11, 15), end: toTime(12, 3), period: Period.PERIOD_3 },
  { start: toTime(12, 3), end: toTime(12, 33), period: Period.LUNCH },
  { start: toTime(12, 33), end: toTime(24, 0), period: Period.DONE },
];

export const MinimumSchedule: PeriodSchedule = [
  { start: toTime(0, 0), end: toTime(7, 28), period: Period.NONE },
  { start: toTime(7, 28), end: toTime(8, 23), period: Period.PERIOD_0 },
  { start: toTime(8, 23), end: toTime(8, 30), period: Period.PERIOD_0_PASSING },
  { start: toTime(8, 30), end: toTime(9, 8), period: Period.PERIOD_1 },
  { start: toTime(9, 8), end: toTime(9, 15), period: Period.PERIOD_1_PASSING },
  { start: toTime(9, 15), end: toTime(9, 53), period: Period.PERIOD_2 },
  { start: toTime(9, 53), end: toTime(10, 0), period: Period.PERIOD_2_PASSING },
  { start: toTime(10, 0), end: toTime(10, 38), period: Period.PERIOD_3 },
  { start: toTime(10, 38), end: toTime(10, 48), period: Period.BREAK },
  { start: toTime(10, 48), end: toTime(10, 55), period: Period.BREAK_PASSING },
  { start: toTime(10, 55), end: toTime(11, 33), period: Period.PERIOD_4 },
  { start: toTime(11, 33), end: toTime(11, 40), period: Period.PERIOD_4_PASSING },
  { start: toTime(11, 40), end: toTime(12, 18), period: Period.PERIOD_5 },
  { start: toTime(12, 18), end: toTime(12, 25), period: Period.PERIOD_5_PASSING },
  { start: toTime(12, 25), end: toTime(13, 3), period: Period.PERIOD_6 },
  { start: toTime(13, 3), end: toTime(24, 0), period: Period.DONE },
];

// finals for Spring 2022
export const Finals25Schedule: PeriodSchedule = [
  { start: toTime(0, 0), end: toTime(8, 30), period: Period.NONE },
  { start: toTime(8, 30), end: toTime(10, 35), period: Period.PERIOD_2 },
  { start: toTime(10, 35), end: toTime(10, 54), period: Period.BREAK },
  { start: toTime(10, 54), end: toTime(11, 0), period: Period.BREAK_PASSING },
  { start: toTime(11, 0), end: toTime(13, 5), period: Period.PERIOD_5 },
  { start: toTime(13, 5), end: toTime(24, 0), period: Period.NONE },
];

export const Finals16Schedule: PeriodSchedule = [
  { start: toTime(0, 0), end: toTime(8, 30), period: Period.NONE },
  { start: toTime(8, 30), end: toTime(10, 35), period: Period.PERIOD_1 },
  { start: toTime(10, 35), end: toTime(10, 54), period: Period.BREAK },
  { start: toTime(10, 54), end: toTime(11, 0), period: Period.BREAK_PASSING },
  { start: toTime(11, 0), end: toTime(13, 5), period: Period.PERIOD_6 },
  { start: toTime(13, 5), end: toTime(24, 0), period: Period.NONE },
];

export const Finals26Schedule: PeriodSchedule = [
  { start: toTime(0, 0), end: toTime(8, 30), period: Period.NONE },
  { start: toTime(8, 30), end: toTime(10, 35), period: Period.PERIOD_2 },
  { start: toTime(10, 35), end: toTime(10, 54), period: Period.BREAK },
  { start: toTime(10, 54), end: toTime(11, 0), period: Period.BREAK_PASSING },
  { start: toTime(11, 0), end: toTime(13, 5), period: Period.PERIOD_6 },
  { start: toTime(13, 5), end: toTime(24, 0), period: Period.NONE },
];

export const Finals15Schedule: PeriodSchedule = [
  { start: toTime(0, 0), end: toTime(8, 30), period: Period.NONE },
  { start: toTime(8, 30), end: toTime(10, 35), period: Period.PERIOD_1 },
  { start: toTime(10, 35), end: toTime(10, 54), period: Period.BREAK },
  { start: toTime(10, 54), end: toTime(11, 0), period: Period.BREAK_PASSING },
  { start: toTime(11, 0), end: toTime(13, 5), period: Period.PERIOD_5 },
  { start: toTime(13, 5), end: toTime(24, 0), period: Period.NONE },
];

export const Finals34Schedule: PeriodSchedule = [
  { start: toTime(0, 0), end: toTime(8, 30), period: Period.NONE },
  { start: toTime(8, 30), end: toTime(10, 35), period: Period.PERIOD_3 },
  { start: toTime(10, 35), end: toTime(10, 54), period: Period.BREAK },
  { start: toTime(10, 54), end: toTime(11, 0), period: Period.BREAK_PASSING },
  { start: toTime(11, 0), end: toTime(13, 5), period: Period.PERIOD_4 },
  { start: toTime(13, 5), end: toTime(24, 0), period: Period.NONE },
];

// end of finals spring 2022

/**
 * Senior End of the Year
 */

 export const SeniorCelebration: PeriodSchedule = [
  { start: toTime(0, 0), end: toTime(9, 0), period: Period.NONE },
  { start: toTime(9, 0), end: toTime(13, 0), period: Period.SENIOR_CELIBRATION },
  { start: toTime(13, 0), end: toTime(24, 0), period: Period.NONE },
 ];

 export const GradRehersal: PeriodSchedule = [
  { start: toTime(0, 0), end: toTime(9, 0), period: Period.NONE },
  { start: toTime(9, 0), end: toTime(13, 0), period: Period.GRAD_REHERSAL },
  { start: toTime(13, 0), end: toTime(24, 0), period: Period.NONE },
 ];

 export const Graduation: PeriodSchedule = [
  { start: toTime(0, 0), end: toTime(9, 0), period: Period.NONE },
  { start: toTime(9, 0), end: toTime(13, 0), period: Period.GRADUATION },
  { start: toTime(13, 0), end: toTime(24, 0), period: Period.NONE },
 ];

export const SummerSchoolSchedule: PeriodSchedule = [
  { start: toTime(0, 0), end: toTime(7, 39), period: Period.NONE },
  { start: toTime(7, 39), end: toTime(7, 45), period: Period.PERIOD_0_PASSING },
  { start: toTime(7, 45), end: toTime(10, 0), period: Period.PERIOD_1 },
  { start: toTime(10, 0), end: toTime(10, 15), period: Period.BREAK },
  { start: toTime(10, 15), end: toTime(10, 20), period: Period.BREAK_PASSING },
  { start: toTime(10, 20), end: toTime(13, 0), period: Period.PERIOD_2 },
  { start: toTime(13, 0), end: toTime(24, 0), period: Period.DONE },
];

export const HSBackToSchoolNight: PeriodSchedule = [
  { start: toTime(0, 0), end: toTime(18, 0), period: Period.EVENTNOPE },
  { start: toTime(18, 0), end: toTime(18, 45), period: Period.ASSEMBLY },
  { start: toTime(18, 45), end: toTime(18, 55), period: Period.ASSEMBLY_PASSING },
  { start: toTime(18, 55), end: toTime(19, 10), period: Period.PERIOD_1 },
  { start: toTime(19, 10), end: toTime(19, 15), period: Period.PERIOD_1_PASSING },
  { start: toTime(19, 15), end: toTime(19, 25), period: Period.PERIOD_2 },
  { start: toTime(19, 25), end: toTime(19, 30), period: Period.PERIOD_2_PASSING },
  { start: toTime(19, 30), end: toTime(19, 35), period: Period.PERIOD_3 },
  { start: toTime(19, 35), end: toTime(19, 40), period: Period.PERIOD_3_PASSING },
  { start: toTime(19, 40), end: toTime(19, 55), period: Period.PERIOD_4 },
  { start: toTime(19, 55), end: toTime(20, 0), period: Period.PERIOD_4_PASSING },
  { start: toTime(20, 0), end: toTime(20, 10), period: Period.PERIOD_5 },
  { start: toTime(20, 10), end: toTime(20, 15), period: Period.PERIOD_5_PASSING },
  { start: toTime(20, 15), end: toTime(20, 25), period: Period.PERIOD_6 },
  { start: toTime(20, 25), end: toTime(20, 30), period: Period.PERIOD_6_PASSING },
  { start: toTime(20, 30), end: toTime(20, 40), period: Period.PERIOD_0 },
  { start: toTime(20, 25), end: toTime(24, 0), period: Period.EVENTNOPE },
];




/**
 *
 *
 *
 * Elementary Schedules
 *
 *
 *
 */
export const ElementaryRegularSchedule: PeriodSchedule = [  // Default Schedule (No Recess)
  { start: toTime(0, 0), end: toTime(8, 0), period: Period.NONE },
  { start: toTime(8, 0), end: toTime(8, 10), period: Period.ARRIVAL_A },
  { start: toTime(8, 10), end: toTime(11, 5), period: Period.GROUP_A },
  { start: toTime(11, 5), end: toTime(11, 55), period: Period.PREP },
  { start: toTime(11, 55), end: toTime(12, 5), period: Period.ARRIVAL_B },
  { start: toTime(12, 5), end: toTime(15, 0), period: Period.GROUP_B },
  { start: toTime(15, 0), end: toTime(24, 0), period: Period.DONE },
];
export const ElementaryRegularSchedule0: PeriodSchedule = [  // Kindergarden and TK
  { start: toTime(0, 0), end: toTime(8, 0), period: Period.NONE },
  { start: toTime(8, 0), end: toTime(8, 10), period: Period.ARRIVAL_A },
  { start: toTime(8, 10), end: toTime(9, 10), period: Period.GROUP_A },
  { start: toTime(9, 10), end: toTime(9, 40), period: Period.RECESS_PE },
  { start: toTime(9, 40), end: toTime(11, 5), period: Period.GROUP_A },
  { start: toTime(11, 5), end: toTime(11, 55), period: Period.PREP },
  { start: toTime(11, 55), end: toTime(12, 5), period: Period.ARRIVAL_B },
  { start: toTime(12, 5), end: toTime(13, 5), period: Period.GROUP_B },
  { start: toTime(13, 5), end: toTime(13, 35), period: Period.RECESS_PE },
  { start: toTime(13, 35), end: toTime(15, 0), period: Period.GROUP_B },
  { start: toTime(15, 0), end: toTime(24, 0), period: Period.DONE },
];
export const ElementaryRegularSchedule12: PeriodSchedule = [
  { start: toTime(0, 0), end: toTime(8, 0), period: Period.NONE },
  { start: toTime(8, 0), end: toTime(8, 10), period: Period.ARRIVAL_A },
  { start: toTime(8, 10), end: toTime(9, 0), period: Period.GROUP_A },
  { start: toTime(9, 0), end: toTime(9, 20), period: Period.RECESS },
  { start: toTime(9, 20), end: toTime(11, 5), period: Period.GROUP_A },
  { start: toTime(11, 5), end: toTime(11, 55), period: Period.PREP },
  { start: toTime(11, 55), end: toTime(12, 5), period: Period.ARRIVAL_B },
  { start: toTime(12, 5), end: toTime(13, 0), period: Period.GROUP_B },
  { start: toTime(13, 0), end: toTime(13, 20), period: Period.RECESS },
  { start: toTime(13, 20), end: toTime(15, 0), period: Period.GROUP_B },
  { start: toTime(15, 0), end: toTime(24, 0), period: Period.DONE },
];
export const ElementaryRegularSchedule34: PeriodSchedule = [
  { start: toTime(0, 0), end: toTime(8, 0), period: Period.NONE },
  { start: toTime(8, 0), end: toTime(8, 10), period: Period.ARRIVAL_A },
  { start: toTime(8, 10), end: toTime(9, 25), period: Period.GROUP_A },
  { start: toTime(9, 25), end: toTime(9, 45), period: Period.RECESS },
  { start: toTime(9, 45), end: toTime(11, 5), period: Period.GROUP_A },
  { start: toTime(11, 5), end: toTime(11, 55), period: Period.PREP },
  { start: toTime(11, 55), end: toTime(12, 5), period: Period.ARRIVAL_B },
  { start: toTime(12, 5), end: toTime(13, 25), period: Period.GROUP_B },
  { start: toTime(13, 25), end: toTime(13, 45), period: Period.RECESS },
  { start: toTime(13, 45), end: toTime(15, 0), period: Period.GROUP_B },
  { start: toTime(15, 0), end: toTime(24, 0), period: Period.DONE },
];
export const ElementaryRegularSchedule56: PeriodSchedule = [
  { start: toTime(0, 0), end: toTime(8, 0), period: Period.NONE },
  { start: toTime(8, 0), end: toTime(8, 10), period: Period.ARRIVAL_A },
  { start: toTime(8, 10), end: toTime(9, 50), period: Period.GROUP_A },
  { start: toTime(9, 50), end: toTime(10, 10), period: Period.RECESS },
  { start: toTime(10, 10), end: toTime(11, 5), period: Period.GROUP_A },
  { start: toTime(11, 5), end: toTime(11, 55), period: Period.PREP },
  { start: toTime(11, 55), end: toTime(12, 5), period: Period.ARRIVAL_B },
  { start: toTime(12, 5), end: toTime(13, 50), period: Period.GROUP_B },
  { start: toTime(13, 50), end: toTime(14, 10), period: Period.RECESS },
  { start: toTime(14, 10), end: toTime(15, 0), period: Period.GROUP_B },
  { start: toTime(15, 0), end: toTime(24, 0), period: Period.DONE },
];
