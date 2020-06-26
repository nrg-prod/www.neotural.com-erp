import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Finance } from "../../../../core/common/_models";
import { environment } from "src/environments/environment";

import { API_ENDPOINTS } from "./../finance.config";

@Injectable()
export class FinanceService {
  constructor(private http: HttpClient) {}

  load() {
    return this.http.get<Finance>(
      `${environment.apiUrl}${API_ENDPOINTS.LOAD_PETTY}`);
  }

  save(data:any) {
    return this.http.post(
      `${environment.apiUrl}${API_ENDPOINTS.SAVE_PETTY}`,
      data
    )
  }

  remove(id:string){
    return this.http.delete<String>(`${environment.apiUrl}${API_ENDPOINTS.REMOVE_PETTY+'?id='+id}`); 
  }

  getInvoiceList(){
    return this.http.get<Finance>(`${environment.apiUrl}${API_ENDPOINTS.LOAD_INVOICE}`);
  }

  getReturnList(){
    return this.http.get<Finance>(`${environment.apiUrl}${API_ENDPOINTS.LOAD_RETURN}`);
  }

  makeInvoicePayment(data:any){
    return this.http.post(
      `${environment.apiUrl}${API_ENDPOINTS.MAKE_INV_PAYMENT}`,
        data
      )
  }

  receiveInvoicePayment(data:any){
    return this.http.post(
      `${environment.apiUrl}${API_ENDPOINTS.RECEIVE_INV_PAYMENT}`,
        data
      )
  }

  makeRetPayment(data:any){
    return this.http.post(
      `${environment.apiUrl}${API_ENDPOINTS.MAKE_RET_PAYMENT}`,
        data
      )
  }

  receiveRetPayment(data:any){
    return this.http.post(
      `${environment.apiUrl}${API_ENDPOINTS.RECEIVE_RET_PAYMENT}`,
        data
      )
  }

  getProfitLoss(){
    return this.http.get<Finance>(`${environment.apiUrl}${API_ENDPOINTS.LOAD_PROFITLOSS}`);
  }

  filterByDate(model:any){
    return this.http.get<Finance>(`${environment.apiUrl}${API_ENDPOINTS.filterByDate+'?fromdate='+model.fromdate
      +'&todate='+model.todate}`);
  }
  
}
