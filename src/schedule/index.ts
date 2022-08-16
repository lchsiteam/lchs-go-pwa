// Original Author: Kai Bredemann
// Editor: Kevin Mo
// Copyright (c) iTeam 2019

import { MDYDate } from './mdy_date';
import { Day, Schedule, Period } from './enums';
import { HybridVirtualDay, CohortABlockOdd, CohortABlockEven, CohortBBlockOdd, CohortBBlockEven, InPersonBlockOdd, InPersonBlockEven, /* <--- hybrid and virtual days*/ NoSchoolSchedule, NoEventSchedule, WeirdAssemblySchedule, WeirdAssemblySchedule78, RegularSchedule,  BlockOddSchedule, BlockEvenSchedule,
        SmallGroups12, SmallGroups34, SmallGroups56, SmallGroupsWellnessClubs, SmallGroups0Clubs,
        ReverseBlockOddSchedule, MinimumReverseBlockOddSchedule78, SpecialBlockOddSchedule, SpecialBlockEvenSchedule, AssemblySchedule, RegularSchedule78,
        BlockOddSchedule78, BlockEvenSchedule78, HSBlockOddScheduleFor78, HSBlockEvenScheduleFor78, HSSpecialBlockOddScheduleFor78,
        HSSpecialBlockEvenScheduleFor78, AssemblySchedule7, AssemblySchedule8, EarlyReleaseSchedule78, MinimumSchedule, /*PreFinals3264Schedule,
        PreFinals2156Schedule, PreFinals1345Schedule*/ FinalAssemblySchedule78, FinalAssemblySchedule12, Finals34Schedule, Finals25Schedule,
        Finals16Schedule, SeniorCelebration, GradRehersal, Graduation, /*FinalsTBDSchedule*/ SummerSchoolSchedule, HSBackToSchoolNight, ElementaryRegularSchedule, ElementaryRegularSchedule0, ElementaryRegularSchedule12, ElementaryRegularSchedule34, ElementaryRegularSchedule56, NinthRegistrationSchedule } from './schedules';

export const plusDays = 0;
export const plusMins = 0;

export const allGrades = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

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

const tgBreak: MDYDate[] = [new MDYDate(11, 21, 2022), new MDYDate(11, 25, 2022)];
const winterBreak: MDYDate[] = [new MDYDate(12, 19, 2022), new MDYDate(1, 3, 2023)];
const springBreak: MDYDate[] = [new MDYDate(4, 3, 2023), new MDYDate(4, 7, 2023)]; // Please don't ever delete this, just comment it out if you have to
const summerBreak: MDYDate[] = [new MDYDate(6, 3, 2022), new MDYDate(8, 14, 2022)];

const breaks: any[] = [tgBreak, winterBreak, springBreak, summerBreak];

const summerSchool: [MDYDate, MDYDate] = [new MDYDate(6, 14, 2021), new MDYDate(7, 16, 2021)];
const blockSwitch: [MDYDate, MDYDate] = [new MDYDate(11, 13, 2022), new MDYDate(2, 18, 2023)];
const hybrid: [MDYDate, MDYDate] = [new MDYDate(4, 12, 2021), new MDYDate(5, 1, 2021)];
const combined: [MDYDate, MDYDate] = [new MDYDate(5, 3, 2021), new MDYDate(6, 2, 2021)];

export const schoolSpecialDates: any = {
  // month - day - year: schedule (something from the Schedule enum)
  
  // beginning of the year no block override
  '8 - 17 - 2022': Schedule.REGULAR,
  '8 - 18 - 2022': Schedule.REGULAR,
  '8 - 24 - 2022': Schedule.REGULAR,
  '8 - 25 - 2022': Schedule.REGULAR,

  '1 - 5 - 2022': Schedule.REGULAR,
  '1 - 6 - 2022': Schedule.REGULAR,

  // Presidents' Day weekend
  '2 - 18 - 2022': Schedule.NONE,
  '2 - 21 - 2022': Schedule.NONE,

  '4 - 15 - 2022': Schedule.MINIMUM,
  '4 - 18 - 2022': Schedule.BLOCK_ODD,
  '4 - 19 - 2022': Schedule.BLOCK_EVEN,
  
  '5 - 18 - 2022': Schedule.REGULAR,
  '5 - 19 - 2022': Schedule.REGULAR,

  // Finals week
  '5 - 27 - 2022': Schedule.ASSEMBLY,
  '5 - 30 - 2022': Schedule.NONE,
  '5 - 31 - 2022': Schedule.FINALS_34,
  '6 - 1 - 2022': Schedule.FINALS_16,
  '6 - 2 - 2022': Schedule.FINALS_25,
};

export const msSpecialDates: any = {
  '12 - 9 - 2020': Schedule.REGULAR,
  '12 - 10 - 2020': Schedule.REGULAR,

  '2 - 17 - 2022': Schedule.MINIMUM,
};

export const hsSpecialDates: any = {
  '12 - 9 - 2020': Schedule.REGULAR,
  '12 - 10 - 2020': Schedule.REGULAR,
  '3 - 31 - 2021': Schedule.REGULAR,
  '4 - 1 - 2021': Schedule.REGULAR,
  '9 - 10 - 2021': Schedule.ASSEMBLY,

  '2 - 11 - 2022': Schedule.ASSEMBLY,
  '4 - 22 - 2022': Schedule.ASSEMBLY,
};

export const gradeSpecialDates: any = {
  0: {
  },
  1: {
  },
  2: {
  },
  3: {
  },
  4: {
  },
  5: {
  },
  6: {
  },
  7: {
  },
  8: {
  },
  9: {
    '8 - 10 - 2021': Schedule.REGISTRATION,
  },
  10: {
  },
  11: {
  },
  12: {
    '5 - 31 - 2022': Schedule.SENIOR_CELIBRATION_SCHED,
    '6 - 1 - 2022': Schedule.GRAD_REHERSAL_SCHED,
    '6 - 2 - 2022': Schedule.GRADUATION_SCHED,
  },
  13: {
    '9 - 22 - 2021': Schedule.HSBACKTOSCHOOLNIGHT,
  },
};

export function getScheduleFromDay(month: number, day: number, year: number, weekDay: number, grade: number): Schedule {
  let shed = Schedule.NONE;
  let highSchooler = 0;
  if (grade >= 0 && grade <= 6) {    // Defines highSchooler. 1 is elementary (K-6)  2 is Middle School (7-8)  3 is Highschool (9-12)  0 is everything else
    highSchooler = 1;
  } else if (grade >= 7 && grade <= 8) {
    highSchooler = 2;
  } else if (grade >= 9 && grade <= 12) {
    highSchooler = 3;
  } else {
    highSchooler = 0;
  }
  const date = `${month} - ${day} - ${year}`;
  const dateObj = new MDYDate(month, day, year);
  const ownGradeDates = gradeSpecialDates[grade];
  const ownSectionDates = highSchooler ? hsSpecialDates : msSpecialDates;

  if (date in ownGradeDates) {
    shed = ownGradeDates[date];
  } else if (date in ownSectionDates) {
    shed = ownSectionDates[date];
  } else if (date in schoolSpecialDates) {
    shed = schoolSpecialDates[date];
  } else {
    // check to see if this date falls in a multi-date exception
    const isSummerSchool = dateObj.between(...summerSchool);
    const isBlockSwitched = dateObj.between(...blockSwitch);
    const isHybrid = dateObj.between(...hybrid);
    const isCombined = dateObj.between(...combined);

    if (isSummerSchool) {
      switch (weekDay) {
        case Day.SUNDAY:
        case Day.SATURDAY:
          shed = Schedule.NONE;
          break;
        case Day.MONDAY:
        case Day.TUESDAY:
        case Day.WEDNESDAY:
        case Day.THURSDAY:
        case Day.FRIDAY:
          shed = Schedule.REGULAR;
          break;
      }
    } else if (grade === 13) {
      shed = Schedule.NOEVENT;
    } else {
      let notBreak = true;

      for (const brk of breaks) {
        const [start, end] = brk;

        // console.log(dateObj.between(start, end));

        if (dateObj.between(start, end)) {
          shed = Schedule.NONE;
          notBreak = false;

          break;
        }
      }

      if (notBreak) {
        if (isBlockSwitched) {
        switch (weekDay) {
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
            if (highSchooler === 1) {
              shed = Schedule.REGULAR;
            } else {
              shed = Schedule.BLOCK_EVEN;
            }
            break;
          case Day.THURSDAY:
            if (highSchooler === 1) {
              shed = Schedule.REGULAR;
            } else {
              shed = Schedule.BLOCK_ODD;
            }
            break;
          }
        } else if (isHybrid && highSchooler === 3 || isHybrid && highSchooler === 2) {
          switch (weekDay) {
            case Day.SUNDAY:
            case Day.SATURDAY:
              shed = Schedule.NONE;
              break;
            case Day.MONDAY:
              shed = Schedule.ONLINE;
              break;
            case Day.TUESDAY:
              shed = Schedule.COHORT_A_ODD;
              break;
            case Day.WEDNESDAY:
              shed = Schedule.COHORT_A_EVEN;
              break;
            case Day.THURSDAY:
              shed = Schedule.COHORT_B_ODD;
              break;
            case Day.FRIDAY:
              shed = Schedule.COHORT_B_EVEN;
              break;
          }
        } else if (isCombined && highSchooler === 3 || isCombined && highSchooler === 2) {
          switch (weekDay) {
            case Day.SUNDAY:
            case Day.SATURDAY:
              shed = Schedule.NONE;
              break;
            case Day.MONDAY:
              shed = Schedule.ONLINE;
              break;
            case Day.TUESDAY:
            case Day.THURSDAY:
              shed = Schedule.IN_PERSON_ODD;
              break;
            case Day.WEDNESDAY:
            case Day.FRIDAY:
              shed = Schedule.IN_PERSON_EVEN;
              break;
          }
        } else {
          switch (weekDay) {
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
              if (highSchooler === 1) {
                shed = Schedule.REGULAR;
              } else {
                shed = Schedule.BLOCK_ODD;
              }
              break;
            case Day.THURSDAY:
              if (highSchooler === 1) {
                shed = Schedule.REGULAR;
              } else {
                shed = Schedule.BLOCK_EVEN;
              }
              break;
            }
          }
        }
      }
    }
  return shed;
}

export function toTime(hr: number, min: number) {
  return (hr * 60) + min;
}

export function getFullSchedule(schedule: Schedule, grade: number): any {
  let highSchooler = 0;
  if (grade >= 0 && grade <= 6) {    // Defines highSchooler. 1 is elementary (K-6)  2 is Middle School (7-8)  3 is Highschool (9-12)  0 is everything else
    highSchooler = 1;
  } else if (grade >= 7 && grade <= 8) {
    highSchooler = 2;
  } else if (grade >= 9 && grade <= 12) {
    highSchooler = 3;
  } else {
    highSchooler = 0;
  }

  switch (schedule) {
    case Schedule.NONE:
      return NoSchoolSchedule;
      break;
    case Schedule.NOEVENT:
      return NoEventSchedule;
      break;
    case Schedule.HSBACKTOSCHOOLNIGHT:
      return HSBackToSchoolNight;
      break;
    // start hybrid and virtual

    case Schedule.ONLINE:
      return HybridVirtualDay;
    case Schedule.COHORT_A_ODD:
      return CohortABlockOdd;
    case Schedule.COHORT_A_EVEN:
      return CohortABlockEven;
    case Schedule.COHORT_B_ODD:
      return CohortBBlockOdd;
    case Schedule.COHORT_B_EVEN:
      return CohortBBlockEven;
    case Schedule.IN_PERSON_ODD:
      return InPersonBlockOdd;
    case Schedule.IN_PERSON_EVEN:
      return InPersonBlockEven;

    // stop hybrid and virtual
    case Schedule.REGULAR:
      if (highSchooler === 1) {
        switch (grade) {
          case 0:
            return ElementaryRegularSchedule0;
            break;
          case 1:
          case 2:
            return ElementaryRegularSchedule12;
            break;
          case 3:
          case 4:
            return ElementaryRegularSchedule34;
            break;
          case 5:
          case 6:
            return ElementaryRegularSchedule56;
            break;
        }
      }else if (highSchooler === 2) {
        return RegularSchedule78;
      }else if (highSchooler === 3) {
        return RegularSchedule;
      }else {
        return NoSchoolSchedule;
      }
      break;
    case Schedule.SMALL_GROUPS_12:
      return SmallGroups12;
    case Schedule.SMALL_GROUPS_34:
      return SmallGroups34;
    case Schedule.SMALL_GROUPS_56:
      return SmallGroups56;
    case Schedule.BLOCK_GROUPS_WELLNESS_CLUBS:
      return SmallGroupsWellnessClubs;
    case Schedule.BLOCK_GROUPS_0_CLUBS:
      return SmallGroups0Clubs;
    case Schedule.BLOCK_ODD:
      if (highSchooler === 1) {
        return ElementaryRegularSchedule;
      }else if (highSchooler === 2) {
        return BlockOddSchedule78;
      }else if (highSchooler === 3) {
        return BlockOddSchedule;
      }else {
        return NoSchoolSchedule;
      }
      break;
    case Schedule.BLOCK_EVEN:
      if (highSchooler === 1) {
        return ElementaryRegularSchedule;
      }else if (highSchooler === 2) {
        return BlockEvenSchedule78;
      }else if (highSchooler === 3) {
        return BlockEvenSchedule;
      }else {
        return NoSchoolSchedule;
      }
      break;
    case Schedule.REVERSE_BLOCK_ODD:
      return ReverseBlockOddSchedule;
      break;
    case Schedule.MINIMUM_REVERSE_BLOCK_ODD_78:
      return MinimumReverseBlockOddSchedule78;
      break;
    case Schedule.SBAC_BLOCK_ODD:
      if (highSchooler === 1) {
        return ElementaryRegularSchedule;
      }else if (highSchooler === 2) {
        return HSBlockOddScheduleFor78;
      }else if (highSchooler === 3) {
        return BlockOddSchedule;
      }else {
        return NoSchoolSchedule;
      }
      break;
    case Schedule.SBAC_BLOCK_EVEN:
      if (highSchooler === 1) {
        return ElementaryRegularSchedule;
      }else if (highSchooler === 2) {
        return HSBlockEvenScheduleFor78;
      }else if (highSchooler === 3) {
        return BlockEvenSchedule;
      }else {
        return NoSchoolSchedule;
      }
      break;
    case Schedule.SBAC_SPECIAL_BLOCK_ODD:
      if (highSchooler === 1) {
        return ElementaryRegularSchedule;
      }else if (highSchooler === 2) {
        return HSSpecialBlockOddScheduleFor78;
      }else if (highSchooler === 3) {
        return SpecialBlockOddSchedule;
      }else {
        return NoSchoolSchedule;
      }
      break;
    case Schedule.SBAC_SPECIAL_BLOCK_EVEN:
      if (highSchooler === 1) {
        return ElementaryRegularSchedule;
      }else if (highSchooler === 2) {
        return HSSpecialBlockEvenScheduleFor78;
      }else if (highSchooler === 3) {
        return SpecialBlockEvenSchedule;
      }else {
        return NoSchoolSchedule;
      }
      break;
    // pre-finals schedules are the same across all grades, hence there are no switches/ternary operators
    /*case Schedule.PRE_FINALS_3264:
      return PreFinals3264Schedule;
      break;
    case Schedule.PRE_FINALS_2156:
      return PreFinals2156Schedule;
      break;
    case Schedule.PRE_FINALS_1345:
      return PreFinals1345Schedule;
      break;
      */
    case Schedule.ASSEMBLY:
      switch (grade) {
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
          return ElementaryRegularSchedule;
          break;
        case 7:
          return AssemblySchedule7;
          break;
        case 8:
          return AssemblySchedule8;
          break;
        case 9:
        case 10:
        case 11:
        case 12:
          return AssemblySchedule;
          break;
        default:
          return AssemblySchedule;
          break;
      }
     case Schedule.WEIRD_ASSEMBLY:
      if (highSchooler === 1) {
        return ElementaryRegularSchedule;
      } else if (highSchooler === 2) {
        return WeirdAssemblySchedule78;
      } else if (highSchooler === 3) {
        return WeirdAssemblySchedule;
      } else {
        return NoSchoolSchedule;
      }
      break;

    case Schedule.FINAL_ASSEMBLY:
      if (grade === 12) {
        return FinalAssemblySchedule12;
      } else if (highSchooler) {
        // just a normal assembly schedule
        return AssemblySchedule;
      } else {
        return FinalAssemblySchedule78;
      }
      break;
    case Schedule.FINALS_34:
      if (highSchooler === 1) {
        return ElementaryRegularSchedule;
      } else if (highSchooler === 2) {
        return  Finals34Schedule;
      } else if (highSchooler === 3) {
        return Finals34Schedule;
      } else {
        return NoSchoolSchedule;
      }
      break;
    case Schedule.FINALS_16:
      if (highSchooler === 1) {
        return ElementaryRegularSchedule;
      } else if (highSchooler === 2) {
        return  Finals16Schedule;
      } else if (highSchooler === 3) {
        return Finals16Schedule;
      } else {
        return NoSchoolSchedule;
      }
      break;
    case Schedule.FINALS_25:
      if (highSchooler === 1) {
        return ElementaryRegularSchedule;
      } else if (highSchooler === 2) {
        return  Finals25Schedule;
      } else if (highSchooler === 3) {
        return Finals25Schedule;
      } else {
        return NoSchoolSchedule;
      }
      break;
    case Schedule.SENIOR_CELIBRATION_SCHED:
      return SeniorCelebration;
    case Schedule.GRAD_REHERSAL_SCHED:
      return GradRehersal;
    case Schedule.GRADUATION_SCHED:
      return Graduation;
    case Schedule.EARLY_RELEASE:
      return EarlyReleaseSchedule78;
      break;
    case Schedule.MINIMUM:
      return MinimumSchedule;
      break;
    case Schedule.SUMMER_SCHOOL:
      return SummerSchoolSchedule;
      break;
    case Schedule.REGISTRATION:
      return NinthRegistrationSchedule;
      break;
    default:
      return NoSchoolSchedule;
      break;
  }
}

export function getPeriod(time: number, schedule: Schedule, grade: number, pAllow = allFilter): any {
  const fullSchedule = getFullSchedule(schedule, grade);
  return fullSchedule.find((p: any) => (p.start <= time && p.end > time) && pAllow.indexOf(p.period) !== -1);
}

export const periodsFilter = [
  Period.PERIOD_0,
  Period.PERIOD_1,
  Period.PERIOD_2,
  Period.PERIOD_3,
  Period.PERIOD_4,
  Period.PERIOD_5,
  Period.PERIOD_6,
  Period.STUDY,
  Period.LUNCH,
  Period.BREAK,
  Period.STEP_ODD,
  Period.STEP_EVEN,
  Period.HOMEROOM,
  Period.ASSEMBLY,
  Period.TBD,
  Period.OFFICE,
  Period.SMALL_GROUP,
  Period.ARRIVAL,
  Period.ARRIVAL_A,
  Period.ARRIVAL_B,
  Period.RECESS,
  Period.RECESS_PE,
  Period.PREP,
  Period.SMALL_GROUP_P0,
  Period.SMALL_GROUP_P1,
  Period.SMALL_GROUP_P2,
  Period.SMALL_GROUP_P3,
  Period.SMALL_GROUP_P4,
  Period.SMALL_GROUP_P5,
  Period.SMALL_GROUP_P6,
  Period.SMALL_GROUP_CLUBS,
  Period.SMALL_GROUP_WELLNESS,
  Period.PERIOD_0_O,
  Period.PERIOD_1_O,
  Period.PERIOD_2_O,
  Period.PERIOD_3_O,
  Period.PERIOD_4_O,
  Period.PERIOD_5_O,
  Period.PERIOD_6_O,
  Period.PERIOD_1_A,
  Period.PERIOD_2_A,
  Period.PERIOD_3_A,
  Period.PERIOD_4_A,
  Period.PERIOD_5_A,
  Period.PERIOD_6_A,
  Period.PERIOD_1_B,
  Period.PERIOD_2_B,
  Period.PERIOD_3_B,
  Period.PERIOD_4_B,
  Period.PERIOD_5_B,
  Period.PERIOD_6_B,
  Period.PERIOD_1_I,
  Period.PERIOD_2_I,
  Period.PERIOD_3_I,
  Period.PERIOD_4_I,
  Period.PERIOD_5_I,
  Period.PERIOD_6_I,
  Period.G_G_LUNCH,
  Period.PERIOD_OFFICE_HOURS_A,
  Period.PERIOD_OFFICE_HOURS_B,
  Period.PERIOD_OFFICE_HOURS_I,
  Period.SENIOR_CELIBRATION,
  Period.GRADUATION,
  Period.GRAD_REHERSAL,
  // Event (Delete if after 8/10/21)
  Period.ORIENTATION,
  Period.REGISTRATION,
];

export const excludeZero = [
  Period.OFFICE,
  Period.SMALL_GROUP,
  Period.STUDY, // for finals week
  Period.PERIOD_1,
  Period.PERIOD_2,
  Period.PERIOD_3,
  Period.PERIOD_4,
  Period.PERIOD_5,
  Period.PERIOD_6,
  Period.LUNCH,
  Period.BREAK,
  Period.STUDY,
  Period.STEP_ODD,
  Period.STEP_EVEN,
  Period.HOMEROOM,
  Period.ASSEMBLY,
  Period.TBD,
  Period.ARRIVAL,
  Period.GROUP_A,
  Period.RECESS,
  Period.RECESS_PE,
  Period.PREP,
  Period.GROUP_B,
  Period.PERIOD_1_O,
  Period.PERIOD_2_O,
  Period.PERIOD_3_O,
  Period.PERIOD_4_O,
  Period.PERIOD_5_O,
  Period.PERIOD_6_O,
  Period.PERIOD_1_A,
  Period.PERIOD_2_A,
  Period.PERIOD_3_A,
  Period.PERIOD_4_A,
  Period.PERIOD_5_A,
  Period.PERIOD_6_A,
  Period.PERIOD_1_B,
  Period.PERIOD_2_B,
  Period.PERIOD_3_B,
  Period.PERIOD_4_B,
  Period.PERIOD_5_B,
  Period.PERIOD_6_B,
  Period.PERIOD_1_I,
  Period.PERIOD_2_I,
  Period.PERIOD_3_I,
  Period.PERIOD_4_I,
  Period.PERIOD_5_I,
  Period.PERIOD_6_I,
  Period.G_G_LUNCH,
  Period.PERIOD_OFFICE_HOURS_A,
  Period.PERIOD_OFFICE_HOURS_B,
  Period.PERIOD_OFFICE_HOURS_I,
  Period.SENIOR_CELIBRATION,
  Period.GRADUATION,
  Period.GRAD_REHERSAL,
  // Event (Delete if after 8/10/21)
  Period.ORIENTATION,
  Period.REGISTRATION,
];

export const excludeSix = [
  Period.OFFICE,
  Period.SMALL_GROUP,
  Period.STUDY, // for finals week
  Period.PERIOD_0,
  Period.PERIOD_1,
  Period.PERIOD_2,
  Period.PERIOD_3,
  Period.PERIOD_4,
  Period.PERIOD_5,
  Period.LUNCH,
  Period.BREAK,
  Period.STUDY,
  Period.STEP_ODD,
  Period.STEP_EVEN,
  Period.HOMEROOM,
  Period.ASSEMBLY,
  Period.TBD,
  Period.ARRIVAL,
  Period.GROUP_A,
  Period.RECESS,
  Period.RECESS_PE,
  Period.PREP,
  Period.GROUP_B,
  Period.PERIOD_1_O,
  Period.PERIOD_2_O,
  Period.PERIOD_3_O,
  Period.PERIOD_4_O,
  Period.PERIOD_5_O,
  Period.PERIOD_1_A,
  Period.PERIOD_2_A,
  Period.PERIOD_3_A,
  Period.PERIOD_4_A,
  Period.PERIOD_5_A,
  Period.PERIOD_1_B,
  Period.PERIOD_2_B,
  Period.PERIOD_3_B,
  Period.PERIOD_4_B,
  Period.PERIOD_5_B,
  Period.PERIOD_1_I,
  Period.PERIOD_2_I,
  Period.PERIOD_3_I,
  Period.PERIOD_4_I,
  Period.PERIOD_5_I,
  Period.G_G_LUNCH,
  Period.PERIOD_OFFICE_HOURS_A,
  Period.PERIOD_OFFICE_HOURS_B,
  Period.PERIOD_OFFICE_HOURS_I,
  Period.SENIOR_CELIBRATION,
  Period.GRADUATION,
  Period.GRAD_REHERSAL,
  // Event (Delete if after 8/10/21)
  Period.ORIENTATION,
  Period.REGISTRATION,
];

export const excludeZeroAndSix = [
  Period.OFFICE,
  Period.SMALL_GROUP,
  Period.STUDY, // for finals week
  Period.PERIOD_1,
  Period.PERIOD_2,
  Period.PERIOD_3,
  Period.PERIOD_4,
  Period.PERIOD_5,
  Period.LUNCH,
  Period.BREAK,
  Period.STUDY,
  Period.STEP_ODD,
  Period.STEP_EVEN,
  Period.HOMEROOM,
  Period.ASSEMBLY,
  Period.TBD,
  Period.ARRIVAL,
  Period.GROUP_A,
  Period.RECESS,
  Period.RECESS_PE,
  Period.PREP,
  Period.GROUP_B,
  Period.PERIOD_1_O,
  Period.PERIOD_2_O,
  Period.PERIOD_3_O,
  Period.PERIOD_4_O,
  Period.PERIOD_5_O,
  Period.PERIOD_6_O,
  Period.PERIOD_1_A,
  Period.PERIOD_2_A,
  Period.PERIOD_3_A,
  Period.PERIOD_4_A,
  Period.PERIOD_5_A,
  Period.PERIOD_1_B,
  Period.PERIOD_2_B,
  Period.PERIOD_3_B,
  Period.PERIOD_4_B,
  Period.PERIOD_5_B,
  Period.PERIOD_1_I,
  Period.PERIOD_2_I,
  Period.PERIOD_3_I,
  Period.PERIOD_4_I,
  Period.PERIOD_5_I,
  Period.G_G_LUNCH,
  Period.PERIOD_OFFICE_HOURS_A,
  Period.PERIOD_OFFICE_HOURS_B,
  Period.PERIOD_OFFICE_HOURS_I,
  Period.SENIOR_CELIBRATION,
  Period.GRADUATION,
  Period.GRAD_REHERSAL,
  // Event (Delete if after 8/10/21)
  Period.ORIENTATION,
  Period.REGISTRATION,
];

export const allFilter = [
  Period.PERIOD_0,
  Period.PERIOD_0_PASSING,
  Period.PERIOD_1,
  Period.PERIOD_1_PASSING,
  Period.PERIOD_2,
  Period.PERIOD_2_PASSING,
  Period.BREAK,
  Period.BREAK_PASSING,
  Period.STUDY,
  Period.PERIOD_3,
  Period.PERIOD_3_PASSING,
  Period.LUNCH,
  Period.LUNCH_PASSING,
  Period.STEP_ODD,
  Period.STEP_EVEN,
  Period.STEP_PASSING,
  Period.HOMEROOM,
  Period.HOMEROOM_PASSING,
  Period.ASSEMBLY,
  Period.ASSEMBLY_PASSING,
  Period.PERIOD_4,
  Period.PERIOD_4_PASSING,
  Period.PERIOD_5,
  Period.PERIOD_5_PASSING,
  Period.PERIOD_6,
  Period.PERIOD_6_PASSING,
  Period.TBD,
  Period.NONE,
  Period.EVENTNOPE,
  Period.OFFICE,
  Period.SMALL_GROUP,
  // Elementary Periods
  Period.ARRIVAL,
  Period.ARRIVAL_A,
  Period.ARRIVAL_B,
  Period.GROUP_A,
  Period.GROUP_B,
  Period.RECESS,
  Period.RECESS_PE,
  Period.PERIOD_0_O,
  Period.PERIOD_1_O,
  Period.PERIOD_2_O,
  Period.PERIOD_3_O,
  Period.PERIOD_4_O,
  Period.PERIOD_5_O,
  Period.PERIOD_6_O,
  Period.PERIOD_1_A,
  Period.PERIOD_2_A,
  Period.PERIOD_3_A,
  Period.PERIOD_4_A,
  Period.PERIOD_5_A,
  Period.PERIOD_6_A,
  Period.PERIOD_1_B,
  Period.PERIOD_2_B,
  Period.PERIOD_3_B,
  Period.PERIOD_4_B,
  Period.PERIOD_5_B,
  Period.PERIOD_6_B,
  Period.PERIOD_1_I,
  Period.PERIOD_2_I,
  Period.PERIOD_3_I,
  Period.PERIOD_4_I,
  Period.PERIOD_5_I,
  Period.PERIOD_6_I,
  Period.G_G_LUNCH,
  Period.PERIOD_OFFICE_HOURS_A,
  Period.PERIOD_OFFICE_HOURS_B,
  Period.PERIOD_OFFICE_HOURS_I,
  Period.SENIOR_CELIBRATION,
  Period.GRADUATION,
  Period.GRAD_REHERSAL,
  Period.PREP,
  Period.DONE,
  // Event (Delete if after 8/10/21)
  Period.ORIENTATION,
  Period.REGISTRATION,
];

export function getUpcomingPeriod(time: number, dateTime: any, schedule: Schedule, grade: number, pAllow = periodsFilter): any {
  const fullSchedule = getFullSchedule(schedule, grade);
  const result = fullSchedule.find((p: any) => (p.start > time && pAllow.indexOf(p.period) !== -1));
  if (result) { return result; }
  else {
    // Find the next period across next multiple days
    // TODO: remove the limit
    let daysSince = 1;
    while (daysSince < 1000) {
      const nextDate = dateTime.plus({ days: daysSince }).set({ hour: 0, minute: 0 });
      const nextSchedule = getFullSchedule(
        getScheduleFromDay(nextDate.month, nextDate.day, nextDate.year, nextDate.weekday, grade), grade,
      );

      const result = nextSchedule.find((p: any) => (p.start > 0 && pAllow.indexOf(p.period) !== -1));

      if (result) { return {...result, daysSince }; }
      else { daysSince += 1; }
    }

    // TODO: replace Period.NONE with something else
    return { start: 0, end: 1440, period: Period.NONE, daysSince };
  }
}

export function getPreviousPeriod(time: number, dateTime: any, schedule: Schedule, grade: number, pAllow = periodsFilter): any {
  const fullSchedule = getFullSchedule(schedule, grade);
  let result = fullSchedule.find((p: any) => (p.end <= time && pAllow.indexOf(p.period) !== -1));
  // tslint:disable-next-line:prefer-for-of
  for (let index = 0; index < fullSchedule.length; index++) {
    if ((fullSchedule[index].end > result.end) && (fullSchedule[index].end <= time) && (pAllow.indexOf(fullSchedule[index].period) !== -1)) {
      result = fullSchedule[index];
    }
  }
  if (result) { return result; }
}

// This works so far, not touching.
// TODO: evaluate if needed
export function printTime(time: number) {
  let shortMins;
  let hours;
  let finalString;

  if (time > 59) {
    hours = Math.floor(time / 60);
    shortMins = time - hours * 60;
  } else {
    hours = 0;
    shortMins = time;
  }

  if (hours === 0) {
    if (shortMins === 1) {
      finalString = shortMins + ' minute';
    }
    else {
      finalString = shortMins + ' minutes';
    }
  } else if (hours === 1) {
    if (shortMins === 1) {
      finalString = hours + ' hour and ' + shortMins + ' minute';
    }
    else {
      finalString = hours + ' hour and ' + shortMins + ' minutes';
    }
  } else {
    if (shortMins === 1) {
      finalString = hours + ' hours and ' + shortMins + ' minute';
    }
    else {
      finalString = hours + ' hours and ' + shortMins + ' minutes';
    }
  }

  return finalString;
}

export function strGrade(grade: any){
  if (grade < 13 && grade > 3) {
    grade = String(grade);
    grade = grade.concat('th Grade');
  } else if (grade === 0) {
    grade = 'K/Pre K';
  } else if (grade === 1) {
    grade = '1st Grade';
  } else if (grade === 2) {
    grade = '2nd Grade';
  } else if (grade === 3) {
    grade = '3rd Grade';
  } else if (grade === 13) {
    grade = 'Event';
  }
  return grade;
}
