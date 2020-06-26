import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Category, Product, Units } from "../../../../core/common/_models";
import { Discount } from "../../../../core/common/_models/discount";
import { environment } from "src/environments/environment";
import { API_ENDPOINTS } from "./../categoryproduct.config";
//import { ConsoleReporter } from 'jasmine';

@Injectable()
export class CategoryproductService {
  //public url = require("../apiurl.json");
  //private commonURL1 = this.url[0].apiurl + "category/";
  //private commonURL2 = this.url[0].apiurl + "item/";

  constructor(private http: HttpClient) {}

  //*********************Category API ************************

  //category Save
  save(category: Category) {
    console.log("service....");
    return this.http.post<Category>(
      `${environment.apiUrl}${API_ENDPOINTS.save}`,
      category
    ); 
    //return this.http.post<Category>(this.commonURL1 + "save", category);
  }

   //category Load
   load() {
    // return this.http.get(this.commonURL1 + "load");
     return this.http.get(`${environment.apiUrl}${API_ENDPOINTS.load}`);
 
   }
 
   //category Load
   loadCategoryName() {
   //  return this.http.get(this.commonURL1 + "loadCategoryName");
     return this.http.get(`${environment.apiUrl}${API_ENDPOINTS.loadCategoryName}`);
 
   }
 
   // get
  get(id: number) {
    // return this.http.get<Category>(this.commonURL1 + "get?id=" + id);
     return this.http.get<Category>(`${environment.apiUrl}${API_ENDPOINTS.get}`+'?id='+id);
 
   }
 
   // Update
   update(category: Category) {
    // return this.http.put<Category>(this.commonURL1 + "update", category);
     return this.http.put<Category>(
       `${environment.apiUrl}${API_ENDPOINTS.updateCategory}`,
       category
     );
   }

     // Remove
  remove(categorycode: string) {
    // return this.http.delete<Category>(
    //   this.commonURL1 + "remove?categorycode=" + categorycode
    // );
     return this.http.delete<Category>(
       `${environment.apiUrl}${API_ENDPOINTS.removeCategory}`+'?categorycode='+categorycode);
   }

  //*********************Product API ************************


  //producsave
  producsave(product: Product) {
    console.log("product service call....");
    return this.http.post<Product>(
      `${environment.apiUrl}${API_ENDPOINTS.productsave}`,
      product
    ); 
    //return this.http.post<Product>(this.commonURL2 + "productsave", product);
  }

  //add promotion save
  addpromotionsave(discount: Discount) {
    return this.http.post<Discount>(
      `${environment.apiUrl}${API_ENDPOINTS.addpromotionsave}`,
      discount
    ); 
   // return this.http.post<Discount>(
    //  this.commonURL2 + "addpromotionsave",
   //   discount
   // );
  }

 
  //item Load
  loadItem(category: string) {
    console.log("category name or code -->" + category);
   // return this.http.get<Product>(
   //   this.commonURL2 + "load?category=" + category
  //  );

    return this.http.get<Product>(
      `${environment.apiUrl}${API_ENDPOINTS.loadProduct}`+'?category='+category);

  }
  loadEditItem(vendorcode: string){
    console.log("Vendor Code -->" + vendorcode);
    return this.http.get<Product>(
      `${environment.apiUrl}${API_ENDPOINTS.loadProduct}`+'?vendorcode='+vendorcode);

  }
  // Load only item name for auto search text box
  loadItemName() {
   // return this.http.get<String>(this.commonURL2 + "loadItemName");
    return this.http.get<String>(`${environment.apiUrl}${API_ENDPOINTS.loadItemName}`);

  }
  //discount & free gift Load
  loadDiscount(discount: string) {
    console.log("loadDiscount Service " + discount);
  //  return this.http.get<Discount>(
  //    this.commonURL2 + "discountload?discountType=" + discount
   // );
    return this.http.get<Discount>(
      `${environment.apiUrl}${API_ENDPOINTS.discountload}`+'?discountType='+discount);

  }

  
  // Item update
  setItem(product: Product) {
    console.log("inside before api edit item service");
   // return this.http.put<Product>(this.commonURL2 + "update", product);
    return this.http.put<Product>(
      `${environment.apiUrl}${API_ENDPOINTS.update}`,
      product
    );
  }
  // Discount update
  updateDiscount(discount: Discount) {
  //  return this.http.put<Discount>(
  //    this.commonURL2 + "discountupdate",
  //    discount
  //  );
    return this.http.put<Discount>(
      `${environment.apiUrl}${API_ENDPOINTS.discountupdate}`,
      discount
    );

  }


  // product Remove
  productremove(prodcode: string) {
   // return this.http.delete<Product>(
    //  this.commonURL2 + "remove?prodcode=" + prodcode
   // );
    return this.http.delete<Product>(
      `${environment.apiUrl}${API_ENDPOINTS.remove}`+'?prodcode='+prodcode);

  }
  // Discount Remove
  discountremove(discountcode: string) {
   // return this.http.delete<Discount>(
   //   this.commonURL2 + "discountremove?discountcode=" + discountcode
   // );
    return this.http.delete<Discount>(
      `${environment.apiUrl}${API_ENDPOINTS.discountremove}`+'?discountremove='+discountcode);
  }

  saveUnit(units: Units) {
    console.log("saveUnit service");
    console.log("URL-->"+`${environment.apiUrl}${API_ENDPOINTS.saveUnit}`);
    return this.http.post<Units>(
      `${environment.apiUrl}${API_ENDPOINTS.saveUnit}`,
      units
    ); 
  }

  loadUnitList(id: string){
    console.log("Load Unit List..");
    return this.http.get(`${environment.apiUrl}${API_ENDPOINTS.loadUnitList}`+'?id='+id);
  }

  removeUnit(id: string) {
     return this.http.delete<Units>(
       `${environment.apiUrl}${API_ENDPOINTS.removeUnit}`+'?id='+id);
   }
}
