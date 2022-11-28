// enums.ts

// Here, I've defined some enums for the
// different day schedules, days of the week,
// and each period

enum Schedule {
  // Hybrid and Virtual
  ONLINE,
  COHORT_A_ODD,
  COHORT_A_EVEN,
  COHORT_B_ODD,
  COHORT_B_EVEN,
  IN_PERSON_ODD,
  IN_PERSON_EVEN,
  // Normal Schedules
  REGULAR,
  BLOCK_ODD,
  BLOCK_EVEN,
  REVERSE_BLOCK_ODD,
  MINIMUM_REVERSE_BLOCK_ODD_78,
  SBAC_BLOCK_ODD,
  SBAC_BLOCK_EVEN,
  SBAC_SPECIAL_BLOCK_ODD,
  SBAC_SPECIAL_BLOCK_EVEN,
  EARLY_RELEASE,
  PRE_FINALS_3264,
  PRE_FINALS_2156,
  PRE_FINALS_1345,
  FINAL_ASSEMBLY,
  FINALS_34,
  FINALS_25,
  FINALS_16,
  FINALS_26,
  FINALS_15,
  FINALS_TBD,
  ASSEMBLY,
  MINIMUM,
  SUMMER_SCHOOL,
  NONE,
  NOEVENT,
  HSBACKTOSCHOOLNIGHT,
  WEIRD_ASSEMBLY,
  // Senior end of the year
  SENIOR_CELIBRATION_SCHED,
  GRAD_REHERSAL_SCHED,
  GRADUATION_SCHED,
  // Small Group Schedules
  SMALL_GROUPS_12,
  SMALL_GROUPS_34,
  SMALL_GROUPS_56,
  BLOCK_GROUPS_0_CLUBS,
  BLOCK_GROUPS_WELLNESS_CLUBS,
  // Events
  REGISTRATION,
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
  // Hybrid and Virtual - O is online, A is Cohort A, B is Cohort B, I is In Person (both cohorts combined)
  PERIOD_0_O,
  PERIOD_1_O,
  PERIOD_2_O,
  PERIOD_3_O,
  PERIOD_4_O,
  PERIOD_5_O,
  PERIOD_6_O,
  PERIOD_1_A,
  PERIOD_2_A,
  PERIOD_3_A,
  PERIOD_4_A,
  PERIOD_5_A,
  PERIOD_6_A,
  PERIOD_1_B,
  PERIOD_2_B,
  PERIOD_3_B,
  PERIOD_4_B,
  PERIOD_5_B,
  PERIOD_6_B,
  PERIOD_1_I,
  PERIOD_2_I,
  PERIOD_3_I,
  PERIOD_4_I,
  PERIOD_5_I,
  PERIOD_6_I,
  G_G_LUNCH,
  PERIOD_OFFICE_HOURS_A,
  PERIOD_OFFICE_HOURS_B,
  PERIOD_OFFICE_HOURS_I,
  // Normal Schedules
  PERIOD_0,
  PERIOD_0_PASSING,
  PERIOD_1,
  PERIOD_1_PASSING,
  PERIOD_2,
  PERIOD_2_PASSING,
  BREAK,
  BREAK_PASSING,
  STUDY,
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
  ASSEMBLY_PASSING,
  PERIOD_4,
  PERIOD_4_PASSING,
  PERIOD_5,
  PERIOD_5_PASSING,
  PERIOD_6,
  PERIOD_6_PASSING,
  TBD,
  NONE,
  EVENTNOPE,
  OFFICE,
  SMALL_GROUP,
  SMALL_GROUP_PASSING,
  SMALL_GROUP_P0,
  SMALL_GROUP_P1,
  SMALL_GROUP_P2,
  SMALL_GROUP_P3,
  SMALL_GROUP_P4,
  SMALL_GROUP_P5,
  SMALL_GROUP_P6,
  SMALL_GROUP_CLUBS,
  SMALL_GROUP_WELLNESS,
  // Senior end of the year
  SENIOR_CELIBRATION,
  GRAD_REHERSAL,
  GRADUATION,
  // Elementary Periods
  ARRIVAL,
  ARRIVAL_A,
  ARRIVAL_B,
  GROUP_A,
  GROUP_B,
  RECESS,
  RECESS_PE,
  PREP,
  DONE,
  // Events
  ORIENTATION,
  REGISTRATION,
}

export function getPeriodName(period: Period) {
  // Hybrid and Virtuals
  if (period === Period.PERIOD_0_O) { return 'Period 0 Online'; }
  else if (period === Period.PERIOD_1_O) { return 'Period 1 Online'; }
  else if (period === Period.PERIOD_2_O) { return 'Period 2 Online'; }
  else if (period === Period.PERIOD_3_O) { return 'Period 3 Online'; }
  else if (period === Period.PERIOD_4_O) { return 'Period 4 Online'; }
  else if (period === Period.PERIOD_5_O) { return 'Period 5 Online'; }
  else if (period === Period.PERIOD_6_O) { return 'Period 6 Online'; }
  else if (period === Period.PERIOD_1_A) { return 'Period 1 Cohort A In Person'; }
  else if (period === Period.PERIOD_2_A) { return 'Period 2 Cohort A In Person'; }
  else if (period === Period.PERIOD_3_A) { return 'Period 3 Cohort A In Person'; }
  else if (period === Period.PERIOD_4_A) { return 'Period 4 Cohort A In Person'; }
  else if (period === Period.PERIOD_5_A) { return 'Period 5 Cohort A In Person'; }
  else if (period === Period.PERIOD_6_A) { return 'Period 6 Cohort A In Person'; }
  else if (period === Period.PERIOD_1_B) { return 'Period 1 Cohort B In Person'; }
  else if (period === Period.PERIOD_2_B) { return 'Period 2 Cohort B In Person'; }
  else if (period === Period.PERIOD_3_B) { return 'Period 3 Cohort B In Person'; }
  else if (period === Period.PERIOD_4_B) { return 'Period 4 Cohort B In Person'; }
  else if (period === Period.PERIOD_5_B) { return 'Period 5 Cohort B In Person'; }
  else if (period === Period.PERIOD_6_B) { return 'Period 6 Cohort B In Person'; }
  else if (period === Period.PERIOD_1_I) { return 'Period 1 In Person'; }
  else if (period === Period.PERIOD_2_I) { return 'Period 2 In Person'; }
  else if (period === Period.PERIOD_3_I) { return 'Period 3 In Person'; }
  else if (period === Period.PERIOD_4_I) { return 'Period 4 In Person'; }
  else if (period === Period.PERIOD_5_I) { return 'Period 5 In Person'; }
  else if (period === Period.PERIOD_6_I) { return 'Period 6 In Person'; }
  else if (period === Period.G_G_LUNCH) { return 'Grab & Go Lunch'; }
  else if (period === Period.PERIOD_OFFICE_HOURS_A) { return 'Office Hours / Period 0 Cohort A'; }
  else if (period === Period.PERIOD_OFFICE_HOURS_B) { return 'Office Hours / Period 0 Cohort B'; }
  else if (period === Period.PERIOD_OFFICE_HOURS_I) { return 'Office Hours / Period 0 In Person'; }
  // Normal Schedules
  else if (period === Period.PERIOD_0) { return 'Period 0'; }
  else if (period === Period.PERIOD_0_PASSING) { return 'Passing After Period 0'; }
  else if (period === Period.PERIOD_1) { return 'Period 1'; }
  else if (period === Period.PERIOD_1_PASSING) { return 'Passing After Period 1'; }
  else if (period === Period.PERIOD_2) { return 'Period 2'; }
  else if (period === Period.PERIOD_2_PASSING) { return 'Passing after Period 2'; }
  else if (period === Period.BREAK) { return 'Break'; }
  else if (period === Period.BREAK_PASSING) { return 'Passing After Break'; }
  else if (period === Period.STUDY) {return 'Study Period'; }
  else if (period === Period.PERIOD_3) { return 'Period 3'; }
  else if (period === Period.PERIOD_3_PASSING) { return 'Passing After Period 3'; }
  else if (period === Period.LUNCH) { return 'Lunch'; }
  else if (period === Period.LUNCH_PASSING) { return 'Passing After Lunch'; }
  else if (period === Period.STEP_ODD) { return 'STEP (odd)'; }
  else if (period === Period.STEP_EVEN) { return 'STEP (even)'; }
  else if (period === Period.HOMEROOM) { return 'Homeroom'; }
  else if (period === Period.HOMEROOM_PASSING) { return 'Passing after Homeroom'; }
  else if (period === Period.STEP_PASSING) { return 'Passing After STEP'; }
  else if (period === Period.ASSEMBLY) { return 'Assembly Period'; }
  else if (period === Period.ASSEMBLY_PASSING) { return 'Passing after Assembly'; }
  else if (period === Period.PERIOD_4) { return 'Period 4'; }
  else if (period === Period.PERIOD_4_PASSING) { return 'Passing After Period 4'; }
  else if (period === Period.PERIOD_5) { return 'Period 5'; }
  else if (period === Period.PERIOD_5_PASSING) { return 'Passing After Period 5'; }
  else if (period === Period.PERIOD_6) { return 'Period 6'; }
  else if (period === Period.PERIOD_6_PASSING) { return 'Passing after Period 6'; }
  else if (period === Period.TBD) { return 'To Be Determined'; }
  else if (period === Period.EVENTNOPE) { return 'No Event'; }
  else if (period === Period.OFFICE) { return 'Office Hours'; }
  else if (period === Period.SMALL_GROUP_P0) { return 'Small Groups Period 0 or Clubs'; }
  else if (period === Period.SMALL_GROUP_P1) { return 'Small Group Period 1'; }
  else if (period === Period.SMALL_GROUP_P2) { return 'Small Group Period 2'; }
  else if (period === Period.SMALL_GROUP_P3) { return 'Small Group Period 3'; }
  else if (period === Period.SMALL_GROUP_P4) { return 'Small Group Period 4'; }
  else if (period === Period.SMALL_GROUP_P5) { return 'Small Group Period 5'; }
  else if (period === Period.SMALL_GROUP_P6) { return 'Small Group Period 6'; }
  else if (period === Period.SMALL_GROUP_WELLNESS) { return 'Small Group Wellness Wendsday'; }
  else if (period === Period.SMALL_GROUP_CLUBS) { return 'Small Groups and Clubs'; }
  else if (period === Period.SMALL_GROUP_PASSING) { return 'Passing Between Small Groups'; }
  // Senior End of the Year

  else if (period === Period.GRADUATION) { return 'Graduation!'; }
  else if (period === Period.GRAD_REHERSAL) { return 'Graduation Rehersal'; }
  else if (period === Period.SENIOR_CELIBRATION) { return 'Senior Celibration'; }

  // Elementary School Periods
  else if (period === Period.ARRIVAL) { return 'Arrival'; }
  else if (period === Period.ARRIVAL_A) { return 'Group A Arrival'; }
  else if (period === Period.ARRIVAL_B) { return 'Group B Arrival'; }
  else if (period === Period.GROUP_A) { return 'Group A'; }
  else if (period === Period.GROUP_B) { return 'Group B'; }
  else if (period === Period.RECESS) { return 'Recess'; }
  else if (period === Period.RECESS_PE) { return 'Recess or PE'; }
  else if (period === Period.PREP) { return 'Teacher Prep'; }

  else if (period === Period.NONE) { return 'No School'; }
  else if (period === Period.DONE) { return 'No School'; }

   // Events
  else if (period === Period.ORIENTATION) { return 'Welcome to High School Orientation (in LCHS Auditorium)'; }
  else if (period === Period.REGISTRATION) { return 'Ninth Grade Registration'; }
  else { return '????'; }
}

export function getScheduleName(schedule: Schedule) {
  switch (schedule) {
      // Hybrid and Virtuals
    case Schedule.ONLINE:
      return 'Normal Virtual Day';
      break;
    case Schedule.COHORT_A_ODD:
      return 'Block Odd (Cohort A In Person)';
      break;
    case Schedule.COHORT_A_EVEN:
      return 'Block Even (Cohort A In Person)';
      break;
    case Schedule.COHORT_B_ODD:
      return 'Block Odd (Cohort B In Person)';
      break;
    case Schedule.COHORT_B_EVEN:
      return 'Block Even (Cohort B In Person)';
      break;
    case Schedule.IN_PERSON_ODD:
      return 'Block Odd (In Person)';
      break;
    case Schedule.IN_PERSON_EVEN:
      return 'Block Even (In Person)';
      break;
      // Normal Schedules
    case Schedule.REGULAR:
      return 'Regular Schedule';
      break;
    case Schedule.SMALL_GROUPS_12:
      return 'Regular Schedule (1, 2)';
      break;
    case Schedule.SMALL_GROUPS_34:
      return 'Regular Schedule (3, 4)';
      break;
    case Schedule.SMALL_GROUPS_56:
      return 'Regular Schedule (5, 6)';
      break;
    case Schedule.BLOCK_GROUPS_0_CLUBS:
      return 'Block Schedule (2, 4, 6, 0, Clubs)';
      break;
    case Schedule.BLOCK_GROUPS_WELLNESS_CLUBS:
      return 'Block Schedule (1, 3, 5, Wellness Wednesday, Clubs)';
      break;
    case Schedule.BLOCK_ODD:
      return 'Block Schedule (1, 3, 5)';
      break;
    case Schedule.BLOCK_EVEN:
      return 'Block Schedule (2, 4, 6)';
      break;
    case Schedule.REVERSE_BLOCK_ODD:
      return 'Block Schedule (5, 3, 1)';
      break;
    case Schedule.MINIMUM_REVERSE_BLOCK_ODD_78:
      return 'Reverse Minimum Block Schedule (5, 3)';
      break;
    case Schedule.SBAC_BLOCK_ODD:
      return 'Sbac Block Schedule (1, 3, 5)';
      break;
    case Schedule.SBAC_BLOCK_EVEN:
      return 'Sbac Block Schedule (2, 4, 6)';
      break;
    case Schedule.SBAC_SPECIAL_BLOCK_ODD:
      return 'Sbac Block Schedule (3, 1, 5)';
      break;
    case Schedule.SBAC_SPECIAL_BLOCK_EVEN:
      return 'Sbac Block Schedule (4, 2, 6)';
      break;
    case Schedule.PRE_FINALS_3264:
      return 'Pre-Finals Schedule (3, 2, 6, 4)';
      break;
    case Schedule.PRE_FINALS_2156:
      return 'Pre-Finals Schedule (2, 1, 5, 6)';
      break;
    case Schedule.PRE_FINALS_1345:
      return 'Pre-Finals Schedule (1, 3, 4, 5)';
      break;
    case Schedule.FINAL_ASSEMBLY:
      return 'Final Assembly Schedule';
      break;
    case Schedule.FINALS_34:
      return 'Finals Schedule (3, 4)';
      break;
    case Schedule.FINALS_25:
      return 'Finals Schedule (2, 5)';
      break;
    case Schedule.FINALS_16:
      return 'Finals Schedule (1, 6)';
      break;
    case Schedule.FINALS_26:
      return 'Finals Schedule (2, 6)';
      break;
    case Schedule.FINALS_15:
      return 'Finals Schedule (1, 5)';
      break;
    case Schedule.ASSEMBLY:
      return 'Assembly Schedule';
      break;
    case Schedule.EARLY_RELEASE:
      return 'Early Release Schedule';
      break;
    case Schedule.MINIMUM:
      return 'Minimum Schedule';
      break;
    case Schedule.FINALS_TBD:
      return 'Finals Schedule (Tbd)';
      break;
    case Schedule.NONE:
      return 'Free';
      break;
    case Schedule.SUMMER_SCHOOL:
      return 'Summer School';
      break;
    case Schedule.SENIOR_CELIBRATION_SCHED:
        return 'Senior Celibration';
      break;
    case Schedule.GRAD_REHERSAL_SCHED:
        return 'Graduation Rehersal';
      break;
    case Schedule.GRADUATION_SCHED:
        return 'Graduation!';
      break;
    case Schedule.NOEVENT:
      return 'No Special Events';
      break;
    case Schedule.HSBACKTOSCHOOLNIGHT:
      return 'High School Back To School Night';
    case Schedule.WEIRD_ASSEMBLY:
      return 'Assembly Schedule';
    case Schedule.REGISTRATION:
      return 'Ninth Grade Registration Schedule';
    default:
      return 'Error';
      break;
  }
}

export { Schedule, Day, Period };
