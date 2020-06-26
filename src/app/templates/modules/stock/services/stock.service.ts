import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Stock } from "../../../../core/common/_models";
import { environment } from "src/environments/environment";

import { API_ENDPOINTS } from "./../stock.config";

@Injectable()
export class StockService {
  constructor(private http: HttpClient) {}

  load(status: string) {
    return this.http.get<Stock>(
      `${environment.apiUrl}${API_ENDPOINTS.LOAD_STOCK}`.replace(
        "{param}",
        status
      )
    );
  }

  updateStock(model:any) {
    console.log("updateStock service");
    return this.http.put<Stock>(
      `${environment.apiUrl}${API_ENDPOINTS.updateStock}`,
        model
      )
    /* return this.http.get<Stock>(`${environment.apiUrl}${API_ENDPOINTS.updateStock+'?id='+id
      +'&recentStock='+recentStock}`); */
  }


}
