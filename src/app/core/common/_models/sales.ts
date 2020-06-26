import { Common } from "./common";

export class Sales extends Common {

   id: string;
   productName: string; 
   category: string;
   customerName: string;
   soDate: string;
   quantity: string;
   netAmount:any;
   status:string;
   salesorder:string; 
   terms:string;
   salesPerson:string;
   orderNumber:string;
   termsDays:string;
   invoicedate:Date;
   salesarray: any = [];
   price: number;
   sellingprice: number;
   city: string;
   country: string;
   phoneNumber: string;
   email: string;
   description: string;  
   customername: string;
   categorycode: string;
   totalAmount:number;
   unit:string;
}

/*export const TEXT_NO_RESULTS = "No results found";
export function isNil(value: any) {
    return typeof value === "undefined" || value === null;
}*/