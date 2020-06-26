import { Component, OnInit, OnDestroy, AfterViewInit } from "@angular/core";
import { FinanceService } from "../../services/finance.service";
import { MatSnackBar } from "@angular/material/snack-bar";
import {
  MatDialog,
  MatDialogConfig,
  MatPaginator,
  MatSort,
  MatTableDataSource,
} from "@angular/material";

@Component({
  selector: "app-invoicelist",
  templateUrl: "./invoice-list.component.html",
  styleUrls: [ "./invoice-list.component.scss" ],
})
export class InvoiceListComponent implements OnInit, OnDestroy {
  model:any = {};
  invoiceList: any;
  dialogConfig = new MatDialogConfig();
  public invoiceTable = false;
  isSalesInvoice:boolean = false;
  isPurchaseInvoice:boolean = false;
  invoiceArr = [];
  isCheckedArr = [];
  loadinggif:boolean = false;
  isSortTypeDesc: boolean = false;
  isSortTypeAsc: boolean = true;
  isSortDateDesc: boolean = false;
  isSortDateAsc: boolean = true;

  constructor(
    private financeService: FinanceService,
    private snackBar: MatSnackBar,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.getInvoiceList();
  }

  ngOnDestroy() {
    (<HTMLElement>(
      document.querySelector(".mat-drawer-content")
    )).style.overflow = "auto";
  }
  
  getMakePaymentStyle() {
    if (!this.isPurchaseInvoice) {
      let myStyles = {
        color: "gray",
        background: "#1A2D39",
        border: "1px solid #1A2D39",
        display: "none",
      };
      return myStyles;
    }
  }

  getReceivePaymentStyle() {
    if (!this.isSalesInvoice) {
      let myStyles = {
        color: "gray",
        background: "#1A2D39",
        border: "1px solid #1A2D39",
        display: "none",
      };
      return myStyles;
    }
  }

  getInvoiceList() {
    this.isCheckedArr = [];
    this.loadinggif=true;
    this.invoiceTable = false;
    this.financeService.getInvoiceList().subscribe(
      (res) => {
        this.invoiceList = res;
        this.invoiceList.sort((a, b) => b.fromdate.localeCompare(a.fromdate));
        this.loadinggif=false;
        if(this.invoiceList.length == 0){
          this.invoiceTable = false;
        }else{
          this.invoiceTable = true;
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

  rowSelected(index: number, item: any, isChecked: boolean){
    if (isChecked) {
      item.indexVal = index;
      this.invoiceArr.push(item);
      this.isCheckedArr.push({ checked: true, indexVal: index });
    } else {
      this.removeItem(this.isCheckedArr, index, "checked");
      this.removeItem(this.invoiceArr, index, "inv");
    }

    if (this.invoiceArr.length > 1) {
      setTimeout(() => {
        this.snackBar.open("Select only one CheckBox", "dismss", {
          panelClass: ["warn"],
          verticalPosition: "top",
        });
      });
      this.isPurchaseInvoice = false;
      this.isSalesInvoice = false;
    }else{
      if(this.invoiceArr[0].invoicetype == "Purchase Invoice"){
        this.isSalesInvoice = false;
        this.isPurchaseInvoice = true;
      }else if(this.invoiceArr[0].invoicetype == "Sales Invoice"){
        this.isSalesInvoice = true;
        this.isPurchaseInvoice = false;
      }
    }

  }

  removeItem(isCheckedArr: any, index: number, type: string) {
    isCheckedArr.forEach((item, indexCheck) => {
      if (item.indexVal === index) {
        isCheckedArr.splice(indexCheck, 1);
      }
    });

    if (type === "checked") {
      this.isCheckedArr = isCheckedArr;
    } else if (type === "inv") {
      this.invoiceArr = isCheckedArr;
    } 
  }

  makePayment(){
    this.model.invoicenumber = this.invoiceArr[0].invoiceNumber;
    this.model.debit = this.invoiceArr[0].totalAmount;
    this.financeService.makeInvoicePayment(this.model)
      .subscribe((data: any) => {
      if (data === null) {
        setTimeout(() => {
          this.snackBar.open(
            "Make Invoice Payment has been saved successfully",
            "dismss",
            {
              panelClass: ["success"],
              verticalPosition: "top",
            }
          );
        });
        this.getInvoiceList();
      } else if (data === 500) {
        setTimeout(() => {
          this.snackBar.open("Internal server error", "dismss", {
            panelClass: ["error"],
            verticalPosition: "top",
          });
        });
      } else {
        setTimeout(() => {
          this.snackBar.open("Bad request data", "dismss", {
            panelClass: ["error"],
            verticalPosition: "top",
          });
        });
      }
    });
  }

  receivePayment(){
    this.model.invoicenumber = this.invoiceArr[0].invoiceNumber;
    this.model.credit = this.invoiceArr[0].totalAmount;
    this.financeService.receiveInvoicePayment(this.model)
      .subscribe((data: any) => {
      if (data === null) {
        setTimeout(() => {
          this.snackBar.open(
            "Receive Invoice Payment has been saved successfully",
            "dismss",
            {
              panelClass: ["success"],
              verticalPosition: "top",
            }
          );
        });
        this.getInvoiceList();
      } else if (data === 500) {
        setTimeout(() => {
          this.snackBar.open("Internal server error", "dismss", {
            panelClass: ["error"],
            verticalPosition: "top",
          });
        });
      } else {
        setTimeout(() => {
          this.snackBar.open("Bad request data", "dismss", {
            panelClass: ["error"],
            verticalPosition: "top",
          });
        });
      }
    });
  }

  sortByOrder(column: string, order: string) {
    if (column === "type" && order === "desc") {
      this.isSortTypeDesc = true;
      this.isSortTypeAsc = false;
      this.invoiceList.sort((a, b) => b.invoicetype.localeCompare(a.invoicetype));
    } else if (column === "type" && order === "asc") {
      this.isSortTypeDesc = false;
      this.isSortTypeAsc = true;
      this.invoiceList.sort((a, b) => a.invoicetype.localeCompare(b.invoicetype));
    } else if (column === "date" && order === "desc") {
      this.isSortDateDesc = true;
      this.isSortDateAsc = false;
      this.invoiceList.sort((a, b) => b.fromdate.localeCompare(a.fromdate));
    } else {
      this.isSortDateDesc = false;
      this.isSortDateAsc = true;
      this.invoiceList.sort((a, b) => a.fromdate.localeCompare(b.fromdate));
    }
  }

}
