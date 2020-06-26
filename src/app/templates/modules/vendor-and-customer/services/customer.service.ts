import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Customer } from 'src/app/core/common/_models';
import { environment } from "src/environments/environment";
import { API_ENDPOINTS } from "./../customer.config";
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class CustomerService {   

//public url = require("../apiurl.json");
//private commonURL = this.url[0].apiurl+'customer/';
componentTypesubject = new BehaviorSubject('a');
addComponentTypesubject = new BehaviorSubject('a');

constructor(private http: HttpClient) { }

//*********************Customer************************

// Save 
save(customer: Customer){
    console.log('custome rservice....');
    //return this.http.post<Customer>(this.commonURL+'save',customer);
    return this.http.post<Customer>(
        `${environment.apiUrl}${API_ENDPOINTS.save}`,
        customer
      ); 
}
  
// Load 
load(){
    //return this.http.get(this.commonURL+'load');
    return this.http.get(`${environment.apiUrl}${API_ENDPOINTS.load}`);

}

// get 
get(id:number){
    //return this.http.get<Customer>(this.commonURL+'get?id='+id);
    return this.http.get<Customer>(`${environment.apiUrl}${API_ENDPOINTS.get}`+'?id='+id);

}

// Update 
update(customer: Customer){
   // return this.http.put<Customer>(this.commonURL+'update',customer);
    return this.http.put<Customer>(
        `${environment.apiUrl}${API_ENDPOINTS.update}`,
        customer
      );

}

// Remove 
remove(custcode: string){
    //return this.http.delete<Customer>(this.commonURL+'remove?custcode='+custcode);
    return this.http.delete<Customer>(`${environment.apiUrl}${API_ENDPOINTS.remove}`+'?custcode='+custcode);

}

getComponentType(value: string) {
    this.componentTypesubject.next(value);
}

}
