import { Component, OnInit, OnDestroy, ViewChild ,ElementRef,Inject} from '@angular/core';
import { Sales, User, Category } from 'src/app/core/common/_models';
import { Router } from '@angular/router';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MatDialog, MatDialogConfig, MatPaginator, MatSort, MatTableDataSource} from "@angular/material";
import { MatExpansionPanel, MatSnackBar, Sort } from "@angular/material";
import { PurchaseService } from 'src/app/templates/modules/purchase/services/purchase.service';
import { SalesService } from '../../services/sales.service';

/*
@Component({
  selector: 'viewInvoice',
  styleUrls: ['./viewInvoice.css'],
  templateUrl: './viewInvoice.html', 
})
export class ViewInvoice {
  model: any ={};
  sales: Sales;
  public salesViewList : any;
  dialogConfig = new MatDialogConfig();
  isDtInitialized:boolean = false;
  constructor(
    private salesService: SalesService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<ViewInvoice>,
    @Inject(MAT_DIALOG_DATA) public data: any) 
    {  
      this.model.soDate = this.data.date;
      let totalCommission = 0.0;
      this.model.status = this.data.currentStatus;
      this.salesService.get(this.data.invoice)
      .subscribe(
        data => {
          this.salesViewList = data;
          for(let i=0; i<this.salesViewList.length; i++){
            this.model.invoiceNumber = this.salesViewList[0].invoicenumber;
            totalCommission +=  this.salesViewList[i].subtotal;
            this.model.subTotal = totalCommission;
          }
        },
        error => {
          setTimeout(() => {
            this.snackBar.open("Network error: server is temporarily unavailable", "dismss", {
              panelClass: ["error"],
              verticalPosition: 'top'      
            });
          });   
        }
      ); 
      
      this.model.customername  = this.data.name;       
      this.customerDetails(this.model.customername);
  }
  ngOnInit() {

  }

  customerDetails(customername: string){
    this.salesService.getCustomerDetails(customername)
    .subscribe(
      data => {
        this.sales = data;
        console.log("Vendor Name -->"+this.sales.customerName);
      },
      error => {
        setTimeout(() => {
          this.snackBar.open("Network error: server is temporarily unavailable", "dismss", {
            panelClass: ["error"],
            verticalPosition: 'top'      
          });
        });   
      }
    ); 
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
//---------- Edit Invoice Calling -----------
@Component({
  selector: 'editinvoice',
  styleUrls: ['./editinvoice.css'],
  templateUrl: './editinvoice.html', 
})

export class EditInvoice {
  model: any ={};
  sales: Sales = new Sales;
  sales1: Sales = new Sales;
  public salesEditList : any;
  public productList : any;
  public categoryList : any;
  public statusList : any;
  dialogConfig = new MatDialogConfig();
  isDtInitialized:boolean = false;

  public salesList:Array<Sales> = [ ];
  saleseditarray: Array<any> = [];

  constructor(
    private salesService: SalesService,
    private purchaseService: PurchaseService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<EditInvoice>,
    @Inject(MAT_DIALOG_DATA) public data: any)
    {  
      this.model.invoiceNumber = this.data.invoice;
      this.model.currentStatus = this.data.status;
      this.editDetails(this.model.invoiceNumber);
      this.getProductList();
      this.getcategoryList();
      this.statusList = ['Pending','On Progress','Success'];
  }

  getcategoryList(){
    this.purchaseService.loadCategoryName()
    .subscribe(res => { 
      this.categoryList = res;
      },
      error => {
        setTimeout(() => {
          this.snackBar.open("Network error: server is temporarily unavailable", "dismss", {
            panelClass: ["error"],
            verticalPosition: 'top'      
          });
        });   
      }
    );
  }

  getProductList(){
    this.purchaseService.loadItemName()
    .subscribe(res => { 
      this.productList = res;
      },
      error => {
        setTimeout(() => {
          this.snackBar.open("Network error: server is temporarily unavailable", "dismss", {
            panelClass: ["error"],
            verticalPosition: 'top'      
          });
        });          }
    );
  }

  editDetails(invoiceNumber:string){
    this.salesService.geteditDetails(invoiceNumber)
    .subscribe(
      data => {
        this.salesEditList = data;
        console.log("Length -->"+this.salesEditList.length);
        if(this.salesEditList.length == 0){
          console.log("--- No data Found ---");
        }else{
          
          for(let i=0;i<this.salesEditList.length;i++){
            console.log("--- category name ---"+this.salesEditList[i].category);
            console.log("--- product name ---"+this.salesEditList[i].itemname);
            console.log("--- s.no ---"+this.salesEditList[i].id);
            this.sales = new Sales;
            this.sales.productName = this.salesEditList[i].itemname;
            this.sales.category = this.salesEditList[i].category;
            this.sales.description = this.salesEditList[i].description;
            this.sales.quantity = this.salesEditList[i].qty;
            this.sales.netAmount = this.salesEditList[i].subtotal;
            this.sales.id = this.salesEditList[i].id;
            this.sales.price = this.salesEditList[i].unitprice;
            this.sales.invoiceNumber = this.salesEditList[i].invoicenumber;
            this.sales.soDate = this.salesEditList[i].soDate;
            this.salesList.push(this.sales);
          }

          for(let j=0; j<this.salesList.length; j++){
            console.log("Sales Item Name ------>"+this.salesList[j].productName);
            console.log("Sales Quantity ------>"+this.salesList[j].quantity);
            console.log("Sales Description ------>"+this.salesList[j].description);
          }

        }
      },
      error => {
        setTimeout(() => {
          this.snackBar.open("Network error: server is temporarily unavailable", "dismss", {
            panelClass: ["error"],
            verticalPosition: 'top'      
          });
        });   
      }
    ); 
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  public deleteSalesInvoice(id:string,invoiceNumber:string){
    this.salesService.removePartId(id,invoiceNumber)
    .subscribe(
      data => {
        this.model = data;
        if(this.model.status == "Success"){
          setTimeout(() => {
            this.snackBar.open("Sales Invoice deleted Successfully", "dismss", {
              panelClass: ["success"],
              verticalPosition: 'top'      
            });
          });
          this.model.currentStatus = this.data.status;
        }else{
          setTimeout(() => {
            this.snackBar.open("Network error: server is temporarily unavailable", "dismss", {
              panelClass: ["error"],
              verticalPosition: 'top'      
            });
          });   
        }
        
      },
      error => {
        setTimeout(() => {
          this.snackBar.open("Network error: server is temporarily unavailable", "dismss", {
            panelClass: ["error"],
            verticalPosition: 'top'      
          });
        });   
      }
    ); 
  }

  getTotalAmount(productName:string,qty:string,category:string,id:string){
    var index;
    console.log("Sales productName ==>"+productName);
    console.log("Sales Qty ==>"+qty);
    console.log("Sales category ==>"+category);
    console.log("Sales Input ID ---->"+id);
    for (var i = 0; i < this.salesList.length ; i++) {
      console.log("Sales Database ID  -------->"+this.salesList[i].id);
      if (this.salesList[i].id === id) {
        console.log("Index value --->"+i);
        index = i;
      }
    }
    this.salesService.getUnitPrice(productName,category)
    .subscribe(
      data => {
        this.sales = data; 
        console.log("Get UnitPrice  ----->"+this.sales.sellingprice);
        let res = qty.replace(/\D/g, "");
        this.sales.totalAmount = Number.parseInt(res) * this.sales.sellingprice;
        console.log("Onchange Total Amount  ----->"+this.sales.totalAmount);
        this.salesList[index].netAmount = this.sales.totalAmount;
        this.salesList[index].price = this.sales.sellingprice;
        
      },
      error => {
        setTimeout(() => {
          this.snackBar.open("Network error: server is temporarily unavailable", "dismss", {
            panelClass: ["error"],
            verticalPosition: 'top'      
          });
        });   
      }
    );
  }

  

    



}

//------ Filter Calling --------
@Component({
  selector: 'filter',
  styleUrls: ['./filter.css'],
  templateUrl: './filter.html', 
})
export class Filter {
  model: any = {};
  public sortedList: any = {};
  constructor(
    public dialogRef: MatDialogRef<Filter>,
    private salesservice: SalesService,
    ) {
      console.log("getCustomerList");
      this.salesservice.loadCustomerList()
      .subscribe(res => { 
        this.sortedList = res;
        console.log("customer list size -->"+this.sortedList.length);
  
        },
        error => {
          setTimeout(() => {
          }, 2000);
        }
      );
    }

  onNoClick(): void {
    this.dialogRef.close();
  }

  apply(){

  }
}*/

@Component({
  selector: 'app-salesinvoice',
  templateUrl: './salesinvoice.component.html',
  styleUrls: ['./salesinvoice.component.scss']
})
export class SalesinvoiceComponent implements OnInit {
  invoiceList: any;
  public invTale = false;
  constructor(
    private salesService: SalesService,
    private snackBar: MatSnackBar
  ) { 
       
  }
  

  ngOnInit() { 
      this.getInvoiceLists();
     // this.removeScrollBar();
  }

  ngOnDestroy() {
    (<HTMLElement>(
      document.querySelector(".mat-drawer-content")
    )).style.overflow = "auto";
  }
  createReturn(){
    alert("Create Return");
  }
 /* removeScrollBar() {
    setTimeout(function () {
      (<HTMLElement>(
        document.querySelector(".mat-drawer-content")
      )).style.overflow = "inherit";
    }, 300);
  } */
  getInvoiceLists() {
    this.salesService.loadInvoice().subscribe(res => { 
      this.invoiceList = res;
      if(this.invoiceList.length == 0 ){
        this.invTale = false;
      }else{
        this.invTale = true;
      }
    },
    error => {
      setTimeout(() => {
        this.snackBar.open("Network error: server is temporarily unavailable", "dismss", {
          panelClass: ["error"],
          verticalPosition: 'top'      
        });
      });   
    }
  );
  }

  generatePdf(data: any){
    if (data === null) {
      setTimeout(() => {
        this.snackBar.open("PDF data is empty", "dismss", {
          panelClass: ["error"],
          verticalPosition: 'top'      
        });
      });
    } else {  
      const width = 800;
      const height = 370;
      var left = (screen.width/2)-(width/2);
      var top = (screen.height/2)-(height/2);
      const win = window.open("","", 'toolbar=0, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width='+width+', height='+height+', top='+top+', left='+left);

      //const win = window.open("","", 'width='+width+', height='+height+', top='+top+', left='+left);
      let html = '';

      html += '<html>';
      html += '<body style="margin:0!important">';
      html += '<embed width="100%" height="100%" src="data:application/pdf;base64,'+data+'" type="application/pdf" />';
      html += '</body>';
      html += '</html>';

      setTimeout(() => {
        win.document.write(html);
      }, 0);
    }
  }

}
