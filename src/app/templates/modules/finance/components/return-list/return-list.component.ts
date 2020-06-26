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
  selector: "app-returnlist",
  templateUrl: "./return-list.component.html",
  styleUrls: [ "./return-list.component.scss" ],
})
export class ReturnListComponent implements OnInit, OnDestroy {
  model:any = {};
  returnList: any;
  dialogConfig = new MatDialogConfig();
  public returnTable = false;
  isSalesReturn:boolean = false;
  isPurchaseReturn:boolean = false;
  returnArr = [];
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
    this.getReturnList();
  }

  ngOnDestroy() {
    (<HTMLElement>(
      document.querySelector(".mat-drawer-content")
    )).style.overflow = "auto";
  }
  
  getMakePaymentStyle() {
    if (!this.isPurchaseReturn) {
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
    if (!this.isSalesReturn) {
      let myStyles = {
        color: "gray",
        background: "#1A2D39",
        border: "1px solid #1A2D39",
        display: "none",
      };
      return myStyles;
    }
  }
  
  getReturnList() {
    this.isCheckedArr = [];
    this.loadinggif=true;
    this.returnTable = false;
    this.financeService.getReturnList().subscribe(
      (res) => {
        this.returnList = res;
        this.returnList.sort((a, b) => b.fromdate.localeCompare(a.fromdate));
        this.loadinggif=false;
        if(this.returnList.length == 0){
          this.returnTable = false;
        }else{
          this.returnTable = true;
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
      this.returnArr.push(item);
      this.isCheckedArr.push({ checked: true, indexVal: index });
    } else {
      this.removeItem(this.isCheckedArr, index, "checked");
      this.removeItem(this.returnArr, index, "ret");
    }

    if (this.returnArr.length > 1) {
      setTimeout(() => {
        this.snackBar.open("Select only one CheckBox", "dismss", {
          panelClass: ["warn"],
          verticalPosition: "top",
        });
      });
      this.isPurchaseReturn = false;
      this.isSalesReturn = false;
    }else{
      if(this.returnArr[0].invoicetype == "Purchase Return Credit" || this.returnArr[0].invoicetype == "Purchase Return Voucher"){
        this.isSalesReturn = false;
        this.isPurchaseReturn = true;
      }else if(this.returnArr[0].invoicetype == "Sales Return Credit" || this.returnArr[0].invoicetype == "Sales Return Voucher"){
        this.isSalesReturn = true;
        this.isPurchaseReturn = false;
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
    } else if (type === "ret") {
      this.returnArr = isCheckedArr;
    } 
  }

  makePayment(){
    this.model.invoicenumber = this.returnArr[0].invoiceNumber;
    this.model.debit = this.returnArr[0].totalAmount;
    this.model.description = this.returnArr[0].invoicetype;
    this.financeService.makeRetPayment(this.model)
      .subscribe((data: any) => {
      if (data === null) {
        setTimeout(() => {
          this.snackBar.open(
            "Make Return Payment has been saved successfully",
            "dismss",
            {
              panelClass: ["success"],
              verticalPosition: "top",
            }
          );
        });
        this.getReturnList();
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
    this.model.invoicenumber = this.returnArr[0].invoiceNumber;
    this.model.credit = this.returnArr[0].totalAmount;
    this.financeService.receiveRetPayment(this.model)
      .subscribe((data: any) => {
      if (data === null) {
        setTimeout(() => {
          this.snackBar.open(
            "Receive Return Payment has been saved successfully",
            "dismss",
            {
              panelClass: ["success"],
              verticalPosition: "top",
            }
          );
        });
        this.getReturnList();
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
      this.returnList.sort((a, b) => b.invoicetype.localeCompare(a.invoicetype));
    } else if (column === "type" && order === "asc") {
      this.isSortTypeDesc = false;
      this.isSortTypeAsc = true;
      this.returnList.sort((a, b) => a.invoicetype.localeCompare(b.invoicetype));
    } else if (column === "date" && order === "desc") {
      this.isSortDateDesc = true;
      this.isSortDateAsc = false;
      this.returnList.sort((a, b) => b.fromdate.localeCompare(a.fromdate));
    } else {
      this.isSortDateDesc = false;
      this.isSortDateAsc = true;
      this.returnList.sort((a, b) => a.fromdate.localeCompare(b.fromdate));
    }
  }

}
