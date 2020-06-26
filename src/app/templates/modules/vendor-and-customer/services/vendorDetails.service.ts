import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from "src/environments/environment";
import { API_ENDPOINTS } from "./../vendor.config";
import { Vendor } from "../../../../core/common/_models";

@Injectable()
export class VendorDetailsService {   

constructor(private http: HttpClient) { }
  
    // Load side pane
    loadsidepanel(vendor:number){
        return this.http.get(`${environment.apiUrl}${API_ENDPOINTS.loadsidepanel}${vendor}`);
    }

    // Load all categories
  //  loadallcategoryitems() {
  //      return this.http.get(`${environment.apiUrl}${API_ENDPOINTS.loadallcategoryItems}`);
   // }

    // get 
    loadallcategoryitems(id:string){

   return this.http.get(`${environment.apiUrl}${API_ENDPOINTS.loadallcategoryItems}`+'?vendorcode='+id);
 
 }


    // Load all categories
    loadallcategories() {
        return this.http.get(`${environment.apiUrl}${API_ENDPOINTS.loadallcategories}`);
    }

    // Load all categories
    postnewcategories(category) {

        return this.http.post<any>(
            `${environment.apiUrl}${API_ENDPOINTS.postnewcategory}`, category);
    }

    updateVendor(data:any){
        return this.http.put<Vendor>(
            `${environment.apiUrl}${API_ENDPOINTS.update}`,
            data
        );
    }

    removeVendor(vendorcode:string){
        return this.http.delete(`${environment.apiUrl}${API_ENDPOINTS.remove}`+'?vendorcode='+vendorcode);
    }

}
