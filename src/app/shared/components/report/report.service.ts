import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ReportService {    

    public url = require("src/assets/json/apiurl.json");
    private commonURL = this.url[0].apiurl+'reports/';

    constructor(private http: HttpClient) { }

    //********************* Report ************************

    //emp report Load 
    load(){
        return this.http.get(this.commonURL+'employeeReport');
    }
     //purchase report Load 
    purchaseload(){
        return this.http.get(this.commonURL+'purchaseReport');
    }
    //sales report Load 
    salesload(){
        return this.http.get(this.commonURL+'salesReport');
    }
    
}
