import { Component, OnInit, OnDestroy, AfterViewInit } from "@angular/core";
import { SalesService } from '../../services/sales.service';
import { MatSnackBar } from "@angular/material/snack-bar";
import {
  MatDialog,
  MatDialogConfig,
  MatPaginator,
  MatSort,
  MatTableDataSource,
} from "@angular/material";
import { SalesorderComponent } from "../salesorder/salesorder.component";
import { SalesCreateInvoiceComponent } from "./../sales-create-invoice/sales-create-invoice.component";
import { SalesCreateReturnComponent } from '../sales-create-return/sales-create-return.component';

@Component({
  selector: "app-saleslist",
  templateUrl: "./sales-list.component.html",
  styleUrls: [
    "./sales-list.component.scss"
  ],
})
export class SalesListComponent implements OnInit, OnDestroy {
  salesOrderList: any;
  dialogConfig = new MatDialogConfig();
  prodArr = [];
  isCheckedArr = [];
  customerArr = [];
  isCreateReturn: boolean = false;
  isDeleteButton: boolean = false;
  isCreateInvoice: boolean = false;
  isShowEditDelete = [];
  isAddSalesOrder: boolean = false;
  isCustomerErrMsg: boolean = false;
  isSortStatusDesc: boolean = false;
  isSortStatusAsc: boolean = true;
  isSortDateDesc: boolean = false;
  isSortDateAsc: boolean = true;
  title: string = "";
  button: string = "";

  public salesTable = false;
  soreturnList: any = {};

  constructor(
    private salesService: SalesService,
    private snackBar: MatSnackBar,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.getSalesOrderLists();
   // this.removeScrollBar();
  }

  ngOnDestroy() {
    (<HTMLElement>(
      document.querySelector(".mat-drawer-content")
    )).style.overflow = "auto";
  }

 /* removeScrollBar() {
    setTimeout(function () {
      (<HTMLElement>(
        document.querySelector(".mat-drawer-content")
      )).style.overflow = "inherit";
    }, 300);
  } */
  getDeleteButtonStyle() {
    if (!this.isDeleteButton) {
      let myStyles = {
        color: "gray",
        background: "#1A2D39",
        border: "1px solid #1A2D39",
        display: "none",
      };
      return myStyles;
    }
  }

  getCreateReturnStyle() {
    if (!this.isCreateReturn) {
      let myStyles = {
        color: "gray",
        background: "#1A2D39",
        border: "1px solid #1A2D39",
        display: "none",
      };
      return myStyles;
    }
  }

  getCreateInvoiceStyle() {
    if (!this.isCreateInvoice) {
      let myStyles = {
        color: "gray",
        background: "#1A2D39",
        border: "1px solid #1A2D39",
        display: "none",
      };
      return myStyles;
    }
  }

  getAddSalesOrderStyle() {
    if (this.isAddSalesOrder) {
      let myStyles = {
        color: "gray",
        background: "#1A2D39",
        border: "1px solid #1A2D39",
        display: "none",
      };
      return myStyles;
    }
  }
  
  getSalesOrderLists() {
    this.salesService.getSalesOrderLists().subscribe(
      (res: []) => {
        this.salesOrderList = res;
        if(this.salesOrderList.length == 0){
          this.salesTable = false;
        }else{
          this.salesTable = true;
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

  rowSelected(index: number, item: any, isChecked: boolean) {
    if (isChecked) {
      item.indexVal = index;
      this.prodArr.push(item);
      this.isCheckedArr.push({ checked: true, indexVal: index });
      this.customerArr.push({ customerName: item.customername, indexVal: index });
      this.isShowEditDelete[index] = false;
    } else {
      this.removeItem(this.isCheckedArr, index, "checked");
      this.removeItem(this.prodArr, index, "product");
      this.removeItem(this.customerArr, index, "customer");
    }

    if (this.prodArr.length > 0) {
      this.isAddSalesOrder = true;
      this.prodArr.forEach((item, index) => {
        const status = item.status;
        const customerName = item.customername;
        if (this.prodArr.length > 1) {
          this.isCreateReturn = false;
          if (status !== "Invoiced") {
            let getCustomerName = "";
            this.customerArr.forEach((item, indexCheck) => {
              if (indexCheck > 0) {
                getCustomerName = this.customerArr[indexCheck - 1].customerName;
                if (customerName !== getCustomerName) {
                  this.isCreateInvoice = false;
                  this.isDeleteButton = false;
                  this.getErrorMsg(true);
                } else {
                  this.isDeleteButton = true;
                  this.isCreateInvoice = true;
                  this.isCreateReturn = false;
                  this.getErrorMsg(false);
                }
              }
            });
          } else {
            this.isDeleteButton = false;
            this.isCreateInvoice = false;
          }
        } else {
          this.isDeleteButton = false;
          this.getErrorMsg(false);
          if (status === "Open" && this.isCheckedArr[0].checked) {
            this.isCreateInvoice = true;
          } else {
            this.isCreateInvoice = false;
          }
          if (status === "Invoiced" && this.isCheckedArr[0].checked) {
            this.salesService.loadReturn()
              .subscribe(res => { 
                this.soreturnList = res;
                if(this.soreturnList.length == 0){
                  this.isCreateReturn = true;
                }else{
                  for(let i=0; i<this.soreturnList.length; i++){
                    if(this.soreturnList[i].socode == this.prodArr[0].socode ){
                      this.isCreateReturn = false;
                      setTimeout(() => {
                        this.snackBar.open("Sales was Returnrd already.", "dismss", {
                          panelClass: ["warn"],
                          verticalPosition: "top",
                        });
                      });
                    }else{
                      this.isCreateReturn = true;
                    }
                  }
                }
                                
              },
              error => { }
            );
          } else {
            this.isCreateReturn = false;
          }
        }
      });
    } else {
      this.isCreateInvoice = false;
      this.isCreateReturn = false;
      this.isDeleteButton = false;
      this.isAddSalesOrder = false;
    }
  }
 
  addSalesOrder(id: string, item: any) {
    let data: any;
    if (id !== null) {
      this.title = "Edit Sales Order";
      this.button = "Update";
      item.dialogTitle = this.title;
      item.dialogText = this.button;
      item.selected = false;
      item.selected = true;
      data = item;
    } else {
      this.title = "Add Sales Order";
      this.button = "Add Cart";
      data = { dialogTitle: this.title, dialogText: this.button };
    }

    this.dialogConfig.disableClose = true;
    this.dialogConfig.autoFocus = true;
    this.dialogConfig.position = {
      top: "1000",
      left: "100",
    };
    let dialogRef = this.dialog
      .open(SalesorderComponent, {
        panelClass: "addpromotion",
        width:'200vh',
        height:'400vh',
        data: data,
        disableClose: true,
       // hasBackdrop: true
      })
      dialogRef.backdropClick().subscribe(result => {
        console.log('Sales Order backdropClick');
        this.ngOnInit();
      });                
      dialogRef.afterClosed().subscribe(result => {
        console.log('The Sales Order dialog was closed');
        this.ngOnInit();
      });
  }

  getErrorMsg(isErrMsg: boolean) {
    // console.log('isErrMsg', isErrMsg)
    if (isErrMsg) {
      setTimeout(() => {
        this.snackBar.open("Select only one customer", "dismss", {
          panelClass: ["warn"],
          verticalPosition: "top",
        });
      });
    } else {
      return "";
    }
  }

  removeItem(isCheckedArr: any, index: number, type: string) {
    // console.log('isCheckedArr', isCheckedArr)
    // console.log('index12', index)
    isCheckedArr.forEach((item, indexCheck) => {
      // console.log('indexVal', item.indexVal)
      // console.log('index', index)
      if (item.indexVal === index) {
        isCheckedArr.splice(indexCheck, 1);
      }
    });

    if (type === "checked") {
      this.isCheckedArr = isCheckedArr;
    } else if (type === "product") {
      this.prodArr = isCheckedArr;
    } else {
      this.customerArr = isCheckedArr;
    }
  }

  sortByOrder(column: string, order: string) {
    if (column === "status" && order === "desc") {
      this.isSortStatusDesc = true;
      this.isSortStatusAsc = false;
      this.salesOrderList.sort((a, b) => b.status.localeCompare(a.status));
    } else if (column === "status" && order === "asc") {
      this.isSortStatusDesc = false;
      this.isSortStatusAsc = true;
      this.salesOrderList.sort((a, b) => a.status.localeCompare(b.status));
    } else if (column === "date" && order === "desc") {
      this.isSortDateDesc = true;
      this.isSortDateAsc = false;
      this.salesOrderList.sort((a, b) => b.date.localeCompare(a.date));
    } else {
      this.isSortDateDesc = false;
      this.isSortDateAsc = true;
      this.salesOrderList.sort((a, b) => a.date.localeCompare(b.date));
    }
  }

  removeSalesOrder(id: string) {
    this.salesService.removeSalesOrder(id).subscribe((data: any) => {
      if (data === null) {
        setTimeout(() => {
          this.snackBar.open(
            "Sales order has been deleted successfully",
            "dismss",
            {
              panelClass: ["success"],
              verticalPosition: "top",
            }
          );
        });
        this.getSalesOrderLists();
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

  createInvoice() {
    let data: any;
    data = {
      dialogPaneTitle: "Sales Orders",
      dialogInvoiceTitle: "Create Invoice",
      dialogText: "Add",
      invoiceItems: this.prodArr,
      customerName: this.prodArr[0].customername,
      date: new Date()
    };

    this.dialogConfig.disableClose = true;
    this.dialogConfig.autoFocus = true;
    this.dialogConfig.position = {
      top: "1000",
      left: "100",
    };

    let dialogRef = this.dialog.open(SalesCreateInvoiceComponent, {
      panelClass: "purchaseCreateInvoice",
      data: data,
    })
    dialogRef.backdropClick().subscribe(result => {
      console.log('Sales Invoice backdropClick');
      this.ngOnInit();
    });                
    dialogRef.afterClosed().subscribe(result => {
      console.log('The Sales Invoice dialog was closed');
      this.ngOnInit();
      let indexx = this.prodArr.indexOf(this.prodArr[0].socode);
      this.prodArr.splice(indexx, 1);
      this.isCreateInvoice = false;
      this.isDeleteButton = false;
      this.isAddSalesOrder = true; 
    });
  }

  createReturn() {
    console.log("createReturn");
    let data: any;
    data = {
      customername: this.prodArr[0].customername,
      customercode: this.prodArr[0].customercode,
      productname: this.prodArr[0].productname,
      invqty: this.prodArr[0].qty,
      date: this.prodArr[0].date,
      subtotal: this.prodArr[0].subtotal,
      socode: this.prodArr[0].socode
    };
    this.dialogConfig.disableClose = true;
    this.dialogConfig.autoFocus = true;
    this.dialogConfig.position = {
    };

    let dialogRef = this.dialog.open(SalesCreateReturnComponent, {
      panelClass: "purchaseCreateReturn",
      width:'120vh',
      height:'200vh',
      data: data,
    })
    dialogRef.backdropClick().subscribe(result => {
      console.log('Sales Return backdropClick');
      this.ngOnInit();
    });                
    dialogRef.afterClosed().subscribe(result => {
      console.log('The Sales Return dialog was closed');
      this.ngOnInit();
      let indexx = this.prodArr.indexOf(this.prodArr[0].socode);
      this.prodArr.splice(indexx, 1);
      this.isCreateReturn = false;
      this.isAddSalesOrder = true; 
    });
  }
}
