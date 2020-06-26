import { Component, Inject, OnChanges, OnInit } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";
import { SalesService } from "../../services/sales.service";

@Component({
  selector: "app-sales-create-invoice",
  templateUrl: "./sales-create-invoice.component.html",
  styleUrls: ["./sales-create-invoice.component.scss"],
})
export class SalesCreateInvoiceComponent implements OnInit {
  invoiceList = [];
  delivery = 0;
  model: any = {};

  constructor(
    public dialogRef: MatDialogRef<SalesCreateInvoiceComponent>,
    @Inject(MAT_DIALOG_DATA) public data, 
    private salesService:SalesService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.invoiceList = this.data.invoiceItems;
    this.model.paymenttype = "";
  }

  createSalesInvoiceClose(): void {
    this.dialogRef.close();
  }

  removeProduct(product, event): void {
    if (!event.currentTarget.checked) {
      this.invoiceList = this.invoiceList.filter(
        (invoice) => invoice.id !== product.id
      );
      return;
    }

    this.invoiceList = this.invoiceList.concat(product);
  }

  paymentSelected(){
    this.model.paymenttype = "cash";
  }

  getSubTotal(): number {
    return this.invoiceList.reduce((accu, item) => item.subtotal + accu, 0);
  }

  getTotal(): number {
    return this.getSubTotal() + this.delivery;
  }

  getOrderNumbers():any {
    return this.invoiceList.map(item => item.socode);
  }

  setDefaultNumber() {
    if (!this.delivery) {
      this.delivery = 0;
    }
  }

  getQty():any[] {
    return this.invoiceList.map(item => item.qty);
  }

  getCustomerCode():any {
    return this.invoiceList.map(item => item.customercode);
  }

  getProductName():string[] {
    return this.invoiceList.map(item => item.productname);
  }

  createInvoice() {

    this.createSalesInvoiceClose();

    const invoice = {
      "createddate": new Date().toJSON().slice(0, 10).split('-').reverse().join('/'),
      "ordernumbers" : this.getOrderNumbers(),
      "subtotal": this.getSubTotal(),
      "deliverycharge": this.delivery,
      "totalprice": this.getTotal(),
      "qty": this.getQty(),
      "customercode" : this.getCustomerCode(),
      "productname" : this.getProductName(),
      "paymenttype" : this.model.paymenttype
    }

    this.salesService.createInvoice(invoice).subscribe(
      (respose) => {
        if (respose === null) {
          setTimeout(() => {
            this.snackBar.open(
              "Sales Invoice Created Successfully",
              "dismss",
              {
                panelClass: ["success"],
                verticalPosition: "top",
              }
            );

          });
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
