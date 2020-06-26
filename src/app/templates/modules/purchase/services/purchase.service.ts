import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { HttpRequest, HttpEvent} from '@angular/common/http';
import { Purchase } from 'src/app/core/common/_models';
import { environment } from "src/environments/environment";

import { API_ENDPOINTS } from "./../purchase.config";

@Injectable() 
export class PurchaseService {  
   
   // public url = require("../apiurl.json");
   // private commonURL = this.url[0].apiurl+'purchase/';
   // private categoryURL = this.url[0].apiurl+'category/';
   // private productURL = this.url[0].apiurl+'item/';

    constructor(private http: HttpClient) { }

    //*********************Purchase************************

    loadVendor(){
        //return this.http.get<Purchase>(this.commonURL+'loadVendor'); 
        return this.http.get(`${environment.apiUrl}${API_ENDPOINTS.loadVendor}`);

    }
    // Save 
    save(purchasesearcharray: Array<any>,deliveryCost:string){
        purchasesearcharray.push([{podate:"09-sep-2020",deliveryCost:deliveryCost}]);
       // return this.http.post(this.commonURL+'save',purchasesearcharray);
        return this.http.post(
            `${environment.apiUrl}${API_ENDPOINTS.save}`,
            purchasesearcharray
          );       
    }
    // Load 
    load(){
        //return this.http.get<Purchase>(this.commonURL+'load');
        return this.http.get<Purchase>(`${environment.apiUrl}${API_ENDPOINTS.loadInvoice}`);

    }

    // get 
    get(id:number){
        //return this.http.get<Purchase>(this.commonURL+'get?id='+id);
        return this.http.get<Purchase>(`${environment.apiUrl}${API_ENDPOINTS.getPurchase+'?id='+id}`);
    }

    // Update 
    update(purchaseeditarray: Array<any>){
        //return this.http.put<Purchase>(this.commonURL+'update',purchaseeditarray);
        return this.http.put<Purchase>(
            `${environment.apiUrl}${API_ENDPOINTS.updatePurchase}`,
            purchaseeditarray
          );
    }

    // Remove 
    remove(invoiceNumber:string){
       // return this.http.delete<String>(this.commonURL+'remove?invoiceNumber='+invoiceNumber);
       return this.http.delete<String>(`${environment.apiUrl}${API_ENDPOINTS.remove+'?invoiceNumber='+invoiceNumber}`); 
    }


    getVendorDetails(vendorname: string){
        //return this.http.get<Purchase>(this.commonURL+'getVendorDetails?vendorname='+vendorname);
        return this.http.get<Purchase>(`${environment.apiUrl}${API_ENDPOINTS.getVendorDetails+'?vendorname='+vendorname}`);
    }

    geteditDetails(id: string){
       // return this.http.get<Purchase>(this.commonURL+'get?id='+id);
       return this.http.get<Purchase>(`${environment.apiUrl}${API_ENDPOINTS.getPurchase+'?id='+id}`);
    }

    removePartId(id:string,invoiceNumber:string){
        return this.http.delete<String>(`${environment.apiUrl}${API_ENDPOINTS.removePartId+'?id='+id+'&invoiceNumber='+invoiceNumber}`);
    }

    loadCategory(){
        //return this.http.get<Purchase>(this.categoryURL+'load');
        return this.http.get<Purchase>(`${environment.apiUrl}${API_ENDPOINTS.loadCategory}`);

    }

    loadCategoryName(){
      //  return this.http.get<Purchase>(this.categoryURL+'loadCategoryName');
        return this.http.get<Purchase>(`${environment.apiUrl}${API_ENDPOINTS.loadCategoryName}`);

    }

    //loadItem(category:string){
    loadItem(){
        let category="all";
        //return this.http.get<Purchase>(this.productURL+'load');
       // return this.http.get<Purchase>(this.productURL+'load?category='+category);
        return this.http.get<Purchase>(`${environment.apiUrl}${API_ENDPOINTS.load+'?category='+category}`);

    }

    loadItemName(){
        //return this.http.get<Purchase>(this.productURL+'loadItemName');
        return this.http.get<Purchase>(`${environment.apiUrl}${API_ENDPOINTS.loadItemName}`);

    }

    getUnitPrice(productName:string,category:string){
      //  return this.http.get<Purchase>(this.commonURL+'getUnitPrice?productName='+productName+'&category='+category);
        return this.http.get<Purchase>(`${environment.apiUrl}${API_ENDPOINTS.getUnitPrice+'?productName='+productName+'&category='+category}`);

    }

    savePurchaseReturn(returnarray: Array<any>){
       // return this.http.post(this.commonURL+'saveReturn',returnarray);
        return this.http.post(
            `${environment.apiUrl}${API_ENDPOINTS.saveReturn}`,
            returnarray
          );   
    }

    loadVendorItem(vendorName:string){
       // return this.http.get<Purchase>(this.commonURL+'loadVendorItem?vendorName='+vendorName);
        return this.http.get<Purchase>(`${environment.apiUrl}${API_ENDPOINTS.loadVendorItem+'?vendorName='+vendorName}`);

    }

    loadfilterData(purchase:Purchase){
       // return this.http.post<Purchase>(this.commonURL+'loadfilterData',purchase);
        return this.http.post<Purchase>(`${environment.apiUrl}${API_ENDPOINTS.loadfilterData}`,purchase);

    }

    getPurchaseOrderLists(){
        return this.http.get(`${environment.apiUrl}${API_ENDPOINTS.GET_PURCHASE_ORDER_LIST}`);
    }

    addPurchaseOrder(data: any){
          return this.http.post(
             `${environment.apiUrl}${API_ENDPOINTS.ADD_PURCHASE_ORDER_LIST}`,
             data
           );   
     }

     // Remove purchase order
    removePurchaseOrder(id:string){ 
        return this.http.delete<String>(`${environment.apiUrl}${API_ENDPOINTS.REMOVE_PURCHASE_ORDER+'?id='+id}`); 
     }

     updatePurchaseOrder(data: any){
          return this.http.put(
             `${environment.apiUrl}${API_ENDPOINTS.UPDATE_PURCHASE_ORDER}`,
             data
           );   
     }

    createInvoice(data:any) {
        return this.http.post(
            `${environment.apiUrl}${API_ENDPOINTS.CREATE_INVOICE}`,
            data
        )
    }

    createReturn(data:any) {
        return this.http.post(
            `${environment.apiUrl}${API_ENDPOINTS.CREATE_RETURN}`,
            data
        )
    }

    loadReturn(){
        return this.http.get<Purchase>(`${environment.apiUrl}${API_ENDPOINTS.lOADRETURN}`);
    }

    createStock(invoiceNumber:String) {
        return this.http.post(
            `${environment.apiUrl}${API_ENDPOINTS.CREATE_STOCK}`,
            invoiceNumber
        )
    }
}
