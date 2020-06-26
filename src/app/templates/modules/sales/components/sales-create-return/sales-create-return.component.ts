import { Component, Inject, OnChanges, OnInit } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { MatDialogRef } from '@angular/material';
import { MatSnackBar } from "@angular/material/snack-bar";
import { SalesService } from "../../services/sales.service";

@Component({
  selector: 'app-sales-create-return',
  templateUrl: './sales-create-return.component.html',
  styleUrls: ['./sales-create-return.component.scss']
})
export class SalesCreateReturnComponent implements OnInit {

  model:any = {};
  btnsave:string = "Create";
  paymentType:string;
  returnType:string;
  quantity:number;


  constructor(    
    public dialogRef: MatDialogRef<SalesCreateReturnComponent>,
    @Inject(MAT_DIALOG_DATA) public data, 
    private salesService:SalesService,
    private snackBar: MatSnackBar
  ) { 
      this.model.customername = this.data.customername;
      this.model.customercode = this.data.customercode;
      this.model.productname = this.data.productname;
      this.model.invqty = this.data.invqty;
      this.model.date = this.data.date;
      this.model.subtotal = this.data.subtotal;
      this.model.socode = this.data.socode;
  }

  ngOnInit() {
  }

  getPrice(quantity:number){
    let price = this.model.subtotal/quantity;
    if(this.model.quantity > this.model.invqty){
      setTimeout(() => {
        this.snackBar.open(
          "Qty cannot be more than Invoiced Qty.",
          "dismss",
          {
            panelClass: ["warning"],
            verticalPosition: "top",
          }
        );
      });
    }
    if(price == Infinity){
      this.model.price = 0;
    }else{
      this.model.price = price;
    }
  }

  close() {
    this.dialogRef.close();
  }

  getPaymentValid(paymentType:string){
    if(paymentType == null){
      document.getElementById("cash").style.background = '#c18484';
      document.getElementById("credit").style.background = '#c18484';
      document.getElementById("voucher").style.background = '#c18484';
    }else{
      document.getElementById("cash").style.background = '#1A2D39';
      document.getElementById("credit").style.background = '#1A2D39';
      document.getElementById("voucher").style.background = '#1A2D39';
    }
  }

  getItemValid(itemstatus:string){
    if(itemstatus == null){
      document.getElementById("damaged").style.background = '#c18484';
      document.getElementById("expired").style.background = '#c18484';
      document.getElementById("others").style.background = '#c18484';
    }else{
      document.getElementById("damaged").style.background = '#1A2D39';
      document.getElementById("expired").style.background = '#1A2D39';
      document.getElementById("others").style.background = '#1A2D39';
    }
  }

  addReturn() {
    if(this.model.itemstatus == null){
      console.log("ItemStatus not chosen");
      document.getElementById("damaged").style.background = '#c18484';
      document.getElementById("expired").style.background = '#c18484';
      document.getElementById("others").style.background = '#c18484';
    }
    if(this.model.paymentType == null){
      console.log("Payment not chosen");
      document.getElementById("cash").style.background = '#c18484';
      document.getElementById("credit").style.background = '#c18484';
      document.getElementById("voucher").style.background = '#c18484';
    }else if(this.model.quantity > this.model.invqty){
      this.snackBar.open(
        "Qty cannot be more than Invoiced Qty.",
        "dismss",
        {
          panelClass: ["warning"],
          verticalPosition: "top",
        }
      );
    }else{
      const invoice = {
        "createddate": new Date().toJSON().slice(0, 10).split('-').reverse().join('/'),
        "invoicedqty": this.model.invqty,
        "customercode" : this.model.customercode,
        "customername" : this.model.customername,
        "itemname" : this.model.productname,
        "itemStatus" : this.model.itemstatus,
        "returnStatus" : this.model.paymentType,
        "qty" : this.model.quantity,
        "invoiceddate" : this.model.date,
        "price" : this.model.price,
        "socode" : this.model.socode
      }
      this.salesService.createReturn(invoice).subscribe(
        (respose) => {
          if (respose === null) {
            setTimeout(() => {
              this.snackBar.open(
                "Sales Return Created Successfully",
                "dismss",
                {
                  panelClass: ["success"],
                  verticalPosition: "top",
                }
              );

            });
            this.close();
          }
        },
        (error) => {
          setTimeout(() => {
            this.snackBar.open(
              "Network error: server is temporarily unavailable",
              "dismss",
              {
                panelClass: ["error"],
                verticalPosition: "top",
              }
            );
          });
        }
      );
    }
  }

}
