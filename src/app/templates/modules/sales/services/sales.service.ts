import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer, Sales } from 'src/app/core/common/_models';
import { environment } from "src/environments/environment";
import { API_ENDPOINTS } from "./../sales.config";

@Injectable()
export class SalesService {    

   // public url = require("../apiurl.json");
   // private commonURL = this.url[0].apiurl+'sales/';
   // private categoryURL = this.url[0].apiurl+'category/';
   // private productURL = this.url[0].apiurl+'item/';

    constructor(private http: HttpClient) { }

    //********************* Sales ************************

    // Load customer list data
    loadCustomerList(){
      //  return this.http.get<Customer>(this.commonURL+'loadCustomer');
        return this.http.get(`${environment.apiUrl}${API_ENDPOINTS.loadCustomer}`);

    }
    
    // Save 
    save(salesarray: Array<any>,deliveryCost:string){
        salesarray.push([{sodate:"09-sep-2020",deliveryCost:deliveryCost}]);
        //return this.http.post<Sales>(this.commonURL+'save',salesarray);
        return this.http.post<Sales>(
            `${environment.apiUrl}${API_ENDPOINTS.save}`,salesarray);  

    }

    // Load 
    load(){
       // return this.http.get<Sales>(this.commonURL+'load');
        return this.http.get<Sales>(`${environment.apiUrl}${API_ENDPOINTS.load}`); 
    }

    // get 
    get(id:string){
        //return this.http.get<Sales>(this.commonURL+'get?id='+id);
        return this.http.get<Sales>(`${environment.apiUrl}${API_ENDPOINTS.get+'?id='+id}`); 
    }

    // Update 
    update(saleseditarray: Array<any>){
       // return this.http.put<Sales>(this.commonURL+'update',saleseditarray);
       return this.http.put<Sales>(
        `${environment.apiUrl}${API_ENDPOINTS.update}`,saleseditarray);  
    }

    // Remove 
    remove(invoiceNumber:string){
       // return this.http.delete<String>(this.commonURL+'remove?invoiceNumber='+invoiceNumber);
        return this.http.delete<String>(
            `${environment.apiUrl}${API_ENDPOINTS.remove}`.replace(
              "{param}",
              invoiceNumber
            )
          );
    }

    getCustomerDetails(customername: string){
        //return this.http.get<Sales>(this.commonURL+'getCustomerDetails?customername='+customername);
        return this.http.get<Sales>(`${environment.apiUrl}${API_ENDPOINTS.getCustomerDetails+'?customername='+customername}`); 
    }

    geteditDetails(id: string){
        //return this.http.get<Sales>(this.commonURL+'get?id='+id);
        return this.http.get<Sales>(`${environment.apiUrl}${API_ENDPOINTS.get+'?id='+id}`); 
    }

    removePartId(id:string,invoiceNumber:string){
       // return this.http.delete<String>(this.commonURL+'removePartId?id='+id+'&invoiceNumber='+invoiceNumber);
        return this.http.delete<String>(`${environment.apiUrl}${API_ENDPOINTS.removePartId+'?id='+id+'&invoiceNumber='+invoiceNumber}`);

    }

    getUnitPrice(productName:string,category:string){
       // return this.http.get<Sales>(this.commonURL+'getUnitPrice?productName='+productName+'&category='+category);
        return this.http.get<Sales>(`${environment.apiUrl}${API_ENDPOINTS.getUnitPrice+'?productName='+productName+'&category='+category}`);

    }

    saveSalesReturn(returnarray: Array<any>){
       // return this.http.post(this.commonURL+'saveReturn',returnarray);
        return this.http.post(
            `${environment.apiUrl}${API_ENDPOINTS.saveReturn}`,
            returnarray
          );  
    }

    loadCustomerName(){
       // return this.http.get(this.commonURL+'loadCustomerName');
        return this.http.get<Sales>(`${environment.apiUrl}${API_ENDPOINTS.loadCustomerName}`);

    }

    loadfilterData(sales:Sales){
        //return this.http.post<Sales>(this.commonURL+'loadfilterData',sales);
        return this.http.post<Sales>(
            `${environment.apiUrl}${API_ENDPOINTS.loadfilterData}`,
            sales
          );  
    }

    addSalesOrder(data: any){
        return this.http.post(
           `${environment.apiUrl}${API_ENDPOINTS.ADD_SALES_ORDER_LIST}`,
           data
         );   
    }

    updateSalesOrder(data: any){
        return this.http.put(
        `${environment.apiUrl}${API_ENDPOINTS.UPDATE_SALES_ORDER}`,
            data
        );   
    }

    // Remove Sales order
    removeSalesOrder(id:string){ 
        return this.http.delete<String>(`${environment.apiUrl}${API_ENDPOINTS.REMOVE_SALES_ORDER+'?id='+id}`); 
    }

    getSalesOrderLists(){
        return this.http.get(`${environment.apiUrl}${API_ENDPOINTS.GET_SALES_ORDER_LIST}`);
    }

    createInvoice(data:any) {
        return this.http.post(
            `${environment.apiUrl}${API_ENDPOINTS.CREATE_INVOICE}`,
            data
        )
    }

    loadInvoice(){
        return this.http.get<Sales>(`${environment.apiUrl}${API_ENDPOINTS.loadInvoice}`); 
    }

    createReturn(data:any) {
        return this.http.post(
            `${environment.apiUrl}${API_ENDPOINTS.CREATE_RETURN}`,
            data
        )
    }

    loadReturn(){
        return this.http.get<Sales>(`${environment.apiUrl}${API_ENDPOINTS.lOADRETURN}`);
    }
}
