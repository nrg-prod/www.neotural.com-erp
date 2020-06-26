import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../../../core/common/_models';
import { Finance } from '../../../core/common/_models/finance';
import { Constants } from '../../../core/common/_directives/constants';

@Injectable()
export class FinanceService {    
 
    public url = require("src/assets/json/apiurl.json");
    private commonURL = this.url[0].apiurl+'finance/';

    constructor(private http: HttpClient) {
    }

    //*********************Finance Service************************

    // loadCustomerVendorName 
    loadCustomerVendorName(){
        return this.http.get(this.commonURL+'loadCustomerVendorName');
    }


    // Save 
    save(finance: Finance){
        //console.log(this.commonURL);
        console.log('Finance service....');
        return this.http.post<Finance>(this.commonURL+'save',finance);
    }

    // Load 
    load(){
        console.log('Load petty cash data....');
        return this.http.get(this.commonURL+'load');
    }

    // Update 
    update(finance: Finance){
        return this.http.put<Finance>(this.commonURL+'update',finance);

    }

    // Remove 
    remove(employeecode:string){
        return this.http.delete<Employee>(this.commonURL+'remove?employeecode='+employeecode);
    }
}
