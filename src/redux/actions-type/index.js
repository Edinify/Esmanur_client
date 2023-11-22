export const TEACHER_ALL_ACTIONS_TYPE = {
  GET_TEACHER: "GET-TEACHER",
  GET_ACTIVE_TEACHER: "GET_ACTIVE_TEACHER",
  CREATE_TEACHER: "CREATE-TEACHER",
  GET_TEACHER_PAGINATION: "GET_TEACHER_PAGINATION",
  UPDATE_TEACHER: "UPDATE-TEACHER",
  DELETE_TEACHER: "DELETE-TEACHER",
  TEACHER_MODAL: "TEACHER-MODAL",
  TEACHER_LOADING: "TEAHCER_LOADING",
  GET_TEACHER_LAST_PAGE: "GET_TEACHER_LAST_PAGE",

  GET_LESSON_STATISTICS: "GET_LESSON_STATISTICS",
  GET_CONFIRMED_LESSONS: "GET_CONFIRMED_LESSONS",
  GET_CANCELLED_LESSONS: "GET_CANCELLED_LESSONS",
  GET_UNVIEWED_LESSONS: "GET_UNVIEWED_LESSONS",
  GET_LEADERBOARD_ORDER: "GET_LEADERBOARD_ORDER",
};

export const ADMIN_ALL_ACTIONS_TYPE = {
  GET_ADMIN: "GET-ADMIN",
  CREATE_ADMIN: "CREATE-ADMIN",
  GET_ADMIN_PAGINATION: "GET_ADMIN_PAGINATION",
  UPDATE_ADMIN: "UPDATE-ADMIN",
  DELETE_ADMIN: "DELETE-ADMIN",
  ADMIN_MODAL: "ADMIN-MODAL",
  ADMIN_LOADING: "ADMIN_LOADING",
  GET_ADMIN_LAST_PAGE: "GET_ADMIN_LAST_PAGE",
};

export const COURSES_ALL_ACTIONS_TYPE = {
  GET_COURSE: "GET-COURSE",
  CREATE_COURSE: "CREATE-COURSE",
  UPDATE_COURSE: "UPDATE-COURSE",
  DELETE_COURSE: "DELETE-COURSE",
  COURSE_MODAL: "COURSE-MODAL",
  GET_COURSES_PAGINATION: "GET_COURSES_PAGINATION",
  COURSE_LOADING: "COURSE_LOADING",
  GET_COURSES_LAST_PAGE: "GET_COURSES_LAST_PAGE",
};

export const ALL_COURSES_ACTION = {
  GET_ALL_COURSE: "GET_ALL_COURSE",
};

export const STUDENTS_ALL_ACTIONS_TYPE = {
  GET_STUDENT: "GET-STUDENT",
  GET_STUDENT_PAGINATION: "GET_STUDENT_PAGINATION",
  CREATE_STUDENT: "CREATE-STUDENT",
  UPDATE_STUDENT: "UPDATE-STUDENT",
  DELETE_STUDENT: "DELETE-STUDENT",
  STUDENT_MODAL: "STUDENT-MODAL",
  GET_MORE_STUDENTS_BY_COURSE: "GET-MORE-STUDENT-BY-COURSE",
  GET_MORE_STUDENTS_ALL: "GET-MORE-STUDENTS-ALL",
  GET_MORE_STUDENTS_ALL_ADD: "GET-MORE-STUDENTS-ALL-ADD",
  STUDENT_LOADING: "STUDENT_LOADING",
  STUDENT_LOADING_ALL: "STUDENT_LOADING_ALL",
  GET_STUDENT_LAST_PAGE: "GET_STUDENT_LAST_PAGE",
  GET_MORE_STUDENTS_BY_COURSE_ADD: "GET_MORE_STUDENTS_BY_COURSE_ADD",
};

export const AUTH_ALL_ACTION_TYPE = {
  LOGIN: "LOGIN",
  LOGOUT: "LOGOUT",
  AUTH_LOADING: "AUTH_LOADING",
};

export const CHANGE_PASSPWORD_ACTION_TYPE = {
  SUCCESS: "SUCCESS",
  FAILURE: "FAILURE",
  START_LOADING: "START_LOADING",
};


export const SALARY_ACTION_TYPE = {
  GET_SALARY_PAGINATION: "GET_SALARY_PAGINATION",
  GET_TEACHER_SALARY_PAGINATION: "GET_TEACHER_SALARY_PAGINATION",
  SALARY_LOADING: "SALARY_LOADING",
};

export const DATEPICKER_ACTION_TYPE = {
  START_DATE: "START-DATE",
  END_DATE: "END-DATE",
};

export const NOTIFICATION_ACTION_TYPE = {
  GET_NOTIFICATION: "GET-NOTIFICATION",
  CREATE_NOTIFICATION: "CREATE-NOTIFICATION",
  UPDATE_NOTIFICATION: "UPDATE-NOTIFICATION",
  VIEWED_NOTIFICATION: "VIEWED-NOTIFICATION",
  NOTIFICATION_LOADING: "NOTIFICATION_LOADING",
};

export const DROPDOWN_NAME_ACTION_TYPE = {
  GET_DROPDOWN: "GET-DROPDOWN",
};

export const DROPDOWN_ERROR_TYPE = {
  GET_DROPDOWN_ERROR: "GET_DROPDOWN_ERROR",
};

export const INVALID_TOKEN_ACTION_TYPE = {
  GET_INVALID_TOKEN: "GET-INVALID-TOKEN",
};

export const USER_ACTION_TYPE = {
  ADD_USER: "ADD-USER",
  UPDATE_IMAGE: "UPDATE-IMAGE",
  GET_IMAGE: "GET-IMAGE",
  LOADING: "LOADING",
  ERROR: "ERROR",
};

export const SHOWNAV_ACTION_TYPE = {
  SHOW: "SHOW",
};

export const PAGINATION_PAGE_NUMBER_ACTION_TYPE = {
  GET_PAGE_NUMBER: "GET-PAGE-NUMBER",
  UPDATE_PAGE_NUMBER: "UPDATE-PAGE-NUMBER",
};

export const SEARCH_VALUES_ACTION_TYPES = {
  TEACHERS_SEARCH_VALUE: "TEAHCERS_SEARCH_VALUE",
  ADMINS_SEARCH_VALUE: "ADMINS_SEARCH_VALUE",
  STUDENTS_SEARCH_VALUE: "STUDENTS_SEARCH_VALUE",
  COURSES_SEARCH_VALUE: "COURSES_SEARCH_VALUE",
  SALARIES_SEARCH_VALUE: "SALARIES_SEARCH_VALUE",
  EXPENSES_SEARCH_VALUE: "EXPENSES_SEARCH_VALUE",
  BONUS_SEARCH_VALUE: "BONUS_SEARCH_VALUE",
  FINE_SEARCH_VALUE: "FINE_SEARCH_VALUE",
};

export const DASHBOARD_ACTIONS_TYPE = {
  GET_DASHBOARD: "GET_DASHBOARD",
  GET_DASHBOARD_CONFIRMED_LESSONS: "GET_DASHBOARD_CONFIRMED_LESSONS",
  GET_DASHBOARD_CANCELLED_LESSONS: "GET_DASHBOARD_CANCELLED_LESSONS",
  GET_DASHBOARD_UNVIEWED_LESSONS: "GET_DASHBOARD_UNVIEWED_LESSONS",
  UPDATE_DASHBOARD_UNVIEWED_LESSONS: "UPDATE_DASHBOARD_UNVIEWED_LESSONS",
  GET_DASHBOARD_FINANCE: "GET_DASHBOARD_FINANCE",
  GET_DASHBOARD_COURSE_STATISTIC: "GET_DASHBOARD_COURSE_STATISTIC",
  GET_DASHBOARD_ADVERTISING: "GET_DASHBOARD_ADVERTISING",
  GET_DASHBOARD_LEADBOARD: "GET_DASHBOARD_LEADBOARD:",
  GET_DASHBOARD_STUDENTS_AMOUNT: "GET_DASHBOARD_STUDENTS_AMOUNT",
};

export const FINANCE_ACTIONS_TYPE = {
  GET_FINANCE_CHART: "GET_FINANCE_CHART",
  GET_FINANCE_DATA: "GET_FINANCE_DATA",
};

export const FORGET_PASSWORD_ACTIONS_TYPE = {
  SEND_EMAIL: "SEND_EMAIL",
  CHECKOTP: "CHECKOTP",
  UPDATE_PASSWORD: "UPDATE_PASSWORD",
  GO_TO_FORGET_PAGE: "GO_TO_FORGET_PAGE",
  FORGET_ERROR: "FORGET_ERROR",
  FORGET_LOADING: "FORGET_LOADING",
};

export const EXPENSES_ACTION_TYPE = {
  GET_EXPENSES: "GET_EXPENSES",
  CREATE_EXPENSES: "CREATE_EXPENSES",
  UPDATE_EXPENSES: "UPDATE_EXPENSES",
  DELETE_EXPENSES: "DELETE_EXPENSES",
  EXPENSES_LOADING: "EXPENSES_LOADING",
  EXPENSES_MODAL: "EXPENSES_MODAL",
  GET_EXPENSES_PAGINATION: "GET_EXPENSES_PAGINATION",
  GET_EXPENSES_LAST_PAGE: "GET_EXPENSES_LAST_PAGE",
};

export const FOOD_RATION_ACTION_TYPE = {
  GET_FOOD_RATION: "GET_FOOD_RATION",
  CREATE_FOOD_RATION: "CREATE_FOOD_RATION",
  UPDATE_FOOD_RATION: "UPDATE_FOOD_RATION",
  DELETE_FOOD_RATION: "DELETE_FOOD_RATION",
  FOOD_RATION_LOADING: "FOOD_RATION_LOADING",
  FOOD_RATION_MODAL: "FOOD_RATION_MODAL",
  GET_FOOD_RATION_PAGINATION: "GET_FOOD_RATION_PAGINATION",
  GET_FOOD_RATION_LAST_PAGE: "GET_FOOD_RATION_LAST_PAGE",
};

export const UNIFORMS_ACTION_TYPE = {
  GET_UNIFORMS: "GET_UNIFORMS",
  CREATE_UNIFORMS: "CREATE_UNIFORMS",
  UPDATE_UNIFORMS: "UPDATE_UNIFORMS",
  DELETE_UNIFORMS: "DELETE_UNIFORMS",
  UNIFORMS_LOADING: "UNIFORMS_LOADING",
  UNIFORMS_MODAL: "UNIFORMS_MODAL",
  GET_UNIFORMS_PAGINATION: "GET_UNIFORMS_PAGINATION",
  GET_UNIFORMS_LAST_PAGE: "GET_UNIFORMS_LAST_PAGE",
};

export const INCOME_ACTION_TYPE = {
  GET_INCOME: "GET_INCOME",
  CREATE_INCOME: "CREATE_INCOME",
  UPDATE_INCOME: "UPDATE_INCOME",
  DELETE_INCOME: "DELETE_INCOME",
  INCOME_LOADING: "INCOME_LOADING",
  GET_INCOME_PAGINATION: "GET_INCOME_PAGINATION",
  GET_INCOME_LAST_PAGE: "GET_INCOME_LAST_PAGE",
};

export const FUNC_COMPONENT_ACTION_TYPE = {
  GET_FUNC_COMP: "GET_FUNC_COMP",
};

export const COURSES_MODAL_ACTION_TYPE = {
  GET_COURSES_MODAL: "GET_COURSES_MODAL",
  COURSE_OPEN_MODAL: "COURSE_OPEN_MODAL",
  COURSE_MODAL_LOADING: "COURSE_MODAL_LOADING",
};

export const STUDENTS_MODAL_ACTION_TYPE = {
  GET_STUDENTS_MODAL: "GET_STUDENTS_MODAL",
  STUDENT_OPEN_MODAL: "STUDENT_OPEN_MODAL",
  STUDENT_MODAL_LOADING: "STUDENT_MODAL_LOADING",
};

export const TEACHERS_MODAL_ACTION_TYPE = {
  GET_TEACHERS_MODAL: "GET_TEACHERS_MODAL",
  TEACHER_OPEN_MODAL: "TEACHER_OPEN_MODAL",
  TEACHER_MODAL_LOADING: "TEACHER_MODAL_LOADING",
};

export const ADMINS_MODAL_ACTION_TYPE = {
  GET_ADMINS_MODAL: "GET_ADMINS_MODAL",
  ADMIN_OPEN_MODAL: "ADMIN_OPEN_MODAL",
  ADMIN_MODAL_LOADING: "ADMIN_MODAL_LOADING",
};

export const EXPENSES_MODAL_ACTION_TYPE = {
  GET_EXPENSES_MODAL: "GET_EXPENSES_MODAL",
  EXPENSES_OPEN_MODAL: "EXPENSES_OPEN_MODAL",
  EXPENSES_MODAL_LOADING: "EXPENSES_MODAL_LOADING",
};
export const FOOD_RATION_MODAL_ACTION_TYPE = {
  GET_FOOD_RATION_MODAL: "GET_FOOD_RATION_MODAL",
  FOOD_RATION_OPEN_MODAL:"FOOD_RATION_OPEN_MODAL",
  FOOD_RATION_MODAL_LOADING:"FOOD_RATION_MODAL_LOADING"
};
export const UNIFORMS_MODAL_ACTION_TYPE = {
  GET_UNIFORMS_MODAL: "GET_UNIFORMS_MODAL",
  UNIFORMS_OPEN_MODAL:"UNIFORMS_OPEN_MODAL",
  UNIFORMS_MODAL_LOADING:"UNIFORMS_MODAL_LOADING"
};
export const BONUS_MODAL_ACTION_TYPE = {
  GET_BONUS_MODAL: "GET_BONUS_MODAL",
  BONUS_MODAL_LOADING: "BONUS_MODAL_LOADING",
  BONUS_OPEN_MODAL: "BONUS_OPEN_MODAL",
};

export const FINE_MODAL_ACTION_TYPE = {
  GET_FINE_MODAL: "GET_FINE_MODAL",
  FINE_OPEN_MODAL: "FINE_OPEN_MODAL",
  FINE_MODAL_LOADING: "FINE_MODAL_LOADING",
};

export const INCOMES_MODAL_ACTION_TYPE = {
  GET_INCOMES_MODAL: "GET_INCOMES_MODAL",
  INCOMES_OPEN_MODAL: "INCOMES_OPEN_MODAL",
  INCOMES_MODAL_LOADING: "INCOMES_MODAL_LOADING",
};

export const SIDEBAR_ACTION_TYPE = {
  SIDEBAR_OPEN_MODAL: "SIDEBAR_OPEN_MODAL",
};

export const STIMULATION_PAGE_TYPE_ACTION_TYPE = {
  GET_STIMULATION_PAGE_TYPE: "GET-STIMULATION-PAGE-TYPE",
};

export const BONUS_PAGINATION_ACTION_TYPE = {
  GET_BONUS: "GET-BONUS",
  CREATE_BONUS: "CREATE_BONUS",
  UPDATE_BONUS: "UPDATE_BONUS",
  DELETE_BONUS: "DELETE_BONUS",
  BONUS_LOADING: "BONUS_LOADING",
  BONUS_MODAL: "BONUS_MODAL",
  GET_BONUS_PAGINATION: "GET_BONUS_PAGINATION",
  GET_BONUS_LAST_PAGE: "GET_BONUS_LAST_PAGE",
};

export const TEACHER_BONUS_ACTION_TYPE = {
  GET_TEACHER_BONUS: "GET_TEACHER_BONUS",
  GET_TEACHER_FINE: "GET_TEACHER_FINE",
};

export const FINE_PAGINATION_ACTION_TYPE = {
  GET_FINE: "GET-FINE",
  CREATE_FINE: "CREATE_FINE",
  UPDATE_FINE: "UPDATE_FINE",
  DELETE_FINE: "DELETE_FINE",
  FINE_LOADING: "FINE_LOADING",
  FINE_MODAL: "FINE_MODAL",
  GET_FINE_PAGINATION: "GET_FINE_PAGINATION",
  GET_FINE_LAST_PAGE: "GET_FINE_LAST_PAGE",
};

export const FINANCE_FILTER_ACTION_TYPE = {
  GET_CHOOSE_DATE_FILTER: "GET_CHOOSE_DATE_FILTER",
  GET_MONTHS_FILTER: "GET_MONTHS_FILTER",

  GET_INCOME_CATEGORY_FILTER: "GET_INCOME_CATEGORY_FILTER",
  GET_INCOME_SORTING_FILTER: "GET_INCOME_SORTING_FILTER",

  GET_EXPENSE_CATEGORY_FILTER: "GET_EXPENSE_CATEGORY_FILTER",
  GET_EXPENSE_SORTING_FILTER: "GET_EXPENSE_SORTING_FILTER",

  CLEAR_MONTHS_FILTER: "CLEAR_MONTHS_FILTER",
  CLEAR_CHOOSE_DATE_FILTER: "CLEAR_CHOOSE_DATE_FILTER",
};

export const FINE_FILTER_ACTION_TYPE = {
  GET_FINE_CATEGORY: "GET_FINE_CATEGORY",
};

export const TEACHER_STATUS_FILTER_ACTION_TYPE = {
  GET_TEACHER_STATUS: "GET_TEACHER_STATUS",
};

export const STUDENT_STATUS_FILTER_ACTION_TYPE = {
  GET_STUDENT_STATUS: "GET_STUDENT_STATUS",
};
export const LESSON_TABLE_MODAL_ACTION_TYPE = {
  GET_LESSON_TABLE_MODAL: "GET_LESSON_TABLE_MODAL",
};

export const BRANCHES_MODAL_ACTION_TYPE = {
  GET_BRANCH_MODAL: "GET_BRANCH_MODAL",
  BRANCH_OPEN_MODAL: "BRANCH_OPEN_MODAL",
  BRANCH_MODAL_LOADING: "BRANCH_MODAL_LOADING",
};
export const BRANCHES_ALL_ACTIONS_TYPE = {
  GET_BRANCHES: "GET-BRANCHES",
  CREATE_BRANCHES: "CREATE-BRANCHES",
  UPDATE_BRANCHES: "UPDATE-BRANCHES",
  DELETE_BRANCHES: "DELETE-BRANCHES",
  BRANCHES_LOADING: "BRANCHES_LOADING",
};

export const TEACHERS_CATEGORY_ACTION_TYPE = {
  GET_TEACHERS_CATEGORY: "GET_TEACHERS_CATEGORY",
};