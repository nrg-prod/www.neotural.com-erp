import { Common } from "./common";

export class Purchase extends Common {
   id: string;
   productName: string; 
   category: string;
   vendorName: string;
   poDate: string;
   quantity: string;
   netAmount:any;
   status:string;
   purchaseorder:string; 
   terms:string;
   salesPerson:string;
   orderNumber:string;
   termsDays:string;
   invoicedate:Date;
   purchasearray: any = [];
   price: number;
   sellingprice: number;
   vendorCity: string;
   vendorCountry: string;
   vendorPhone: string;
   vendorEmail: string;
   description: string;  
   vendorname: string;
   vendorcode: string;
   totalAmount:number;
   unit:string;
}
