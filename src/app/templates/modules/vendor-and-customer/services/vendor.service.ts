import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Vendor } from 'src/app/core/common/_models';
import { environment } from "src/environments/environment";
import { API_ENDPOINTS } from "./../vendor.config";
@Injectable()
export class VendorService {    

//public url = require("../apiurl.json");
//private commonURL = this.url[0].apiurl+'vendor/';

constructor(private http: HttpClient) { }

//*********************Vendor************************

// Save 
save(vendor: Vendor){
    console.log('service....');
   // return this.http.post<Vendor>(this.commonURL+'save',vendor);
    return this.http.post<Vendor>(
        `${environment.apiUrl}${API_ENDPOINTS.save}`,
        vendor
      ); 

}

// Load 
load(){
    console.log("Load vendor service..");
   // return this.http.get(this.commonURL+'load');
    return this.http.get(`${environment.apiUrl}${API_ENDPOINTS.load}`);

}

// Load vendor name and code
loadvendornamecode(){
    console.log("loadvendornamecode service..");
    //return this.http.get(this.commonURL+'loadvendornamecode');
    return this.http.get(`${environment.apiUrl}${API_ENDPOINTS.loadvendornamecode}`);

}



// get 
get(id:number){
   // return this.http.get<Vendor>(this.commonURL+'get?id='+id);
    return this.http.get<Vendor>(`${environment.apiUrl}${API_ENDPOINTS.get}`+'?id='+id);

}

// Update 
update(vendor: Vendor){
    //return this.http.put<Vendor>(this.commonURL+'update',vendor);
    return this.http.put<Vendor>(
        `${environment.apiUrl}${API_ENDPOINTS.update}`,
        vendor
      );

} 

// Remove 
remove(vendorcode:string){
   // return this.http.delete<Vendor>(this.commonURL+'remove?vendorcode='+vendorcode);
    return this.http.delete<Vendor>(`${environment.apiUrl}${API_ENDPOINTS.remove}`+'?vendorcode='+vendorcode);

}
}
