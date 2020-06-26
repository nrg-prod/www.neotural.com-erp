export const API_ENDPOINTS = { 
  allEmployees: `/employee/load`,
  getEmployee: `/employee/get?id={param}`,
  saveEmployee: `/employee/save`,
  updateEmployee: `/employee/update`,
  remove: `/employee/remove?employeecode={param}`,
  SAVE_DAILY_REPORT: `employee/saveDailyReport`,
  DAILY_REPORT_LISTS: `/employee/loadDailyReport`,
  UPDATE_DAILY_REPORT: `employee/updateDailyReport`, 
  SAVE_EMPLOYEE_ABSENT: `employee/saveAbsent`,
  UPDATE_EMPLOYEE_ABSENT: `employee/updateAbsent`,
  GET_ABSENT_LISTS: `/employee/loadAbsentList`,
  GET_EMPLOYEE_DETAILS: `/employee/get?employeecode={param}`,
};
