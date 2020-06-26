import { Common } from "./common";

export class Finance extends Common {
  id:string;
  description:string;
  addedDate:string;
  type: string;
  fromPerson:string;
  toPerson:string;
  totalAmount:string;
  invoiceNumber:string;
}
