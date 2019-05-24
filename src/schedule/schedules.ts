import { Period } from './enums';

function toTime(hr: number, min: number) {
  return (hr * 60) + min;
}

// Note: the script will only consider
// the `end` paramater for now. (when each period ends).
// When the program reads this fake ".csv", it will
// give precedence to the period that is listed first

export const NoSchoolSchedule: any[] = [
  { start: toTime(0, 0), end: toTime(24, 0), period: Period.DONE }, 
]; 

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
]; 

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
  { start: toTime(15, 13), end: toTime(24, 0), period: Period.DONE },
];

export const BlockEvenSchedule: any[] = [
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

//special sbac 3, 1, 5 block
export const SpecialBlockOddSchedule: any[] = [
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

//special sbac 4, 2, 6 block
export const SpecialBlockEvenSchedule: any[] = [
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

export const AssemblySchedule: any[] = [
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

export const RegularSchedule78: any[] = [
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

export const BlockOddSchedule78: any[] = [
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

export const BlockEvenSchedule78: any[] = [
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

export const HSBlockOddScheduleFor78: any[] = [
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

export const HSBlockEvenScheduleFor78: any[] = [
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

//special sbac 3, 1, 5 block for 7/8
export const HSSpecialBlockOddScheduleFor78: any[] = [
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

//special sbac 4, 2, 6 block for 7/8
export const HSSpecialBlockEvenScheduleFor78: any[] = [
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
export const SpecialBlockOddSchedule78: any[] = [
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
export const SpecialBlockEvenSchedule78: any[] = [
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

export const AssemblySchedule7: any[] = [
  { start: toTime(0, 0), end: toTime(7, 27), period: Period.NONE },
  { start: toTime(7, 27), end:toTime(8, 15), period: Period.PERIOD_0 },
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

export const AssemblySchedule8: any[] = [
  { start: toTime(0, 0), end: toTime(7, 27), period: Period.NONE },
  { start: toTime(7, 27), end: toTime(8, 15), period: Period.PERIOD_0 },
  { start: toTime(8, 15), end: toTime(8, 30), period: Period.PERIOD_0_PASSING },
  { start: toTime(8, 30), end: toTime(9, 18), period: Period.PERIOD_1 },
  { start: toTime(9, 18), end: toTime(9, 24), period: Period.PERIOD_1_PASSING },
  { start: toTime(9, 24), end: toTime(10, 12), period: Period.ASSEMBLY },
  { start: toTime(10, 12), end: toTime(11, 0), period: Period.PERIOD_2 },
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

export const EarlyReleaseSchedule78: any[] = [
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

export const PreFinals3264Schedule: any[] = [
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

export const PreFinals2156Schedule: any[] = [
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

export const PreFinals1345Schedule: any[] = [
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

export const FinalAssemblySchedule78: any[] = [
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

export const FinalAssemblySchedule12: any[] = [
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

export const MinimumSchedule: any[] = [
  { start: toTime(0, 0), end: toTime(7, 45), period: Period.NONE },
  { start: toTime(7, 45), end: toTime(8, 23), period: Period.PERIOD_0 },
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

export const Finals34Schedule: any[] = [
  { start: toTime(0, 0), end: toTime(8, 30), period: Period.NONE }, 
  { start: toTime(8, 30), end: toTime(10, 35), period: Period.PERIOD_3 }, 
  { start: toTime(10, 35), end: toTime(10, 55), period: Period.BREAK }, 
  { start: toTime(10, 55), end: toTime(11, 0), period: Period.BREAK_PASSING }, 
  { start: toTime(11, 0), end: toTime(1, 5), period: Period.PERIOD_4 }, 
  { start: toTime(1, 5), end: toTime(24, 0), period: Period.DONE }, 
]; 

export const Finals15Schedule: any[] = [
  { start: toTime(0, 0), end: toTime(8, 30), period: Period.NONE }, 
  { start: toTime(8, 30), end: toTime(10, 35), period: Period.PERIOD_1 }, 
  { start: toTime(10, 35), end: toTime(10, 55), period: Period.BREAK }, 
  { start: toTime(10, 55), end: toTime(11, 0), period: Period.BREAK_PASSING }, 
  { start: toTime(11, 0), end: toTime(1, 5), period: Period.PERIOD_5 }, 
  { start: toTime(1, 5), end: toTime(24, 0), period: Period.DONE }, 
]; 

export const Finals26Schedule: any[] = [
  { start: toTime(0, 0), end: toTime(8, 30), period: Period.NONE }, 
  { start: toTime(8, 30), end: toTime(10, 35), period: Period.PERIOD_2 }, 
  { start: toTime(10, 35), end: toTime(10, 55), period: Period.BREAK }, 
  { start: toTime(10, 55), end: toTime(11, 0), period: Period.BREAK_PASSING }, 
  { start: toTime(11, 0), end: toTime(1, 5), period: Period.PERIOD_6 }, 
  { start: toTime(1, 5), end: toTime(24, 0), period: Period.DONE }, 
]; 


