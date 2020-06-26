import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Employee } from "../../../../core/common/_models";
import { environment } from "src/environments/environment";

import { API_ENDPOINTS } from "./../empployee.config";
import { EmployeeDetail } from "../components/employee-detail/employee-detail.model";

@Injectable()
export class EmployeeService {
  constructor(private http: HttpClient) {}

  save(employee: EmployeeDetail) {
    console.log("save employee service");
    return this.http.post<Employee>(
      `${environment.apiUrl}${API_ENDPOINTS.saveEmployee}`,
      employee
    );
  }

  load() {
    return this.http.get(`${environment.apiUrl}${API_ENDPOINTS.allEmployees}`);
  }

  get(id) {
    return this.http.get<Employee>(
      `${environment.apiUrl}${API_ENDPOINTS.getEmployee}`.replace(
        "{param}",
        id.toString()
      )
    );
  }

  update(employee: Employee) {
    return this.http.put<Employee>(
      `${environment.apiUrl}${API_ENDPOINTS.updateEmployee}`,
      employee
    );
  }

  remove(employeecode: string) {
    return this.http.delete<Employee>(
      `${environment.apiUrl}${API_ENDPOINTS.remove}`.replace(
        "{param}",
        employeecode
      )
    );
  }

  saveDailyReport(data: any) {
    return this.http.post<any>(
      `${environment.apiUrl}${API_ENDPOINTS.SAVE_DAILY_REPORT}`,
      data
    );
  }

  getDailyReportLists(item: any) {
    return this.http.get(`${environment.apiUrl}${API_ENDPOINTS.DAILY_REPORT_LISTS+'?employeecode='+item.employeecode+'&date='+item.date+'&type=D'}`);
  }

  updateDailyReport(data: any) {
    return this.http.put<any>(
      `${environment.apiUrl}${API_ENDPOINTS.UPDATE_DAILY_REPORT}`,
      data
    );
  }

  saveEmployeeAbsent(data: any) {
    return this.http.post<any>(
      `${environment.apiUrl}${API_ENDPOINTS.SAVE_EMPLOYEE_ABSENT}`,
      data
    );
  }

  updateEmployeeAbsent(data: any) {
    return this.http.put<any>(
      `${environment.apiUrl}${API_ENDPOINTS.UPDATE_EMPLOYEE_ABSENT}`,
      data
    );
  }

  getAbsentLists(item: any) { 
    return this.http.get(`${environment.apiUrl}${API_ENDPOINTS.GET_ABSENT_LISTS+'?employeecode='+item.employeecode+'&date='+item.date+'&type='+item.type}`);
  }

  getEmployeeDetail(employeecode: string) {
    return this.http.get<Employee>(
      `${environment.apiUrl}${API_ENDPOINTS.GET_EMPLOYEE_DETAILS}`.replace(
        "{param}",
        employeecode
      )
    );
  }
}
