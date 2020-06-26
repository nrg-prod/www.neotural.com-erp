import {
  Component,
  OnInit,
  Renderer2,
  AfterViewInit,
  Input,
  Inject,
} from "@angular/core";
import { Sales } from 'src/app/core/common/_models';
import { AlertService } from 'src/app/core/common/_services';
import { Router } from '@angular/router';
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { MatDialog, MatDialogConfig } from "@angular/material";
import { CompleterService, CompleterData } from 'ng2-completer';
import { PurchaseService } from 'src/app/templates/modules/purchase/services/purchase.service';
import { SalesService } from '../../services/sales.service';
import { MatSnackBar } from "@angular/material/snack-bar";
import { formatDate } from "@angular/common";

@Component({
  selector: 'app-salesorder',
  templateUrl: './salesorder.component.html',
  styleUrls: ['./salesorder.component.scss']
})
export class SalesorderComponent implements OnInit {
  sales:Sales = new Sales();
  model: any = {};
  public salestable = false;
  headElements = ["#ID", "Product Name", "Category Name", "Quantity"];
  todayDate: Date = new Date();
  dialogConfig = new MatDialogConfig();

  fieldArray: Array<any> = [];
  salesarray: Array<any> = [];

  productList: any;
  categoryList: any;
  firstField = true;
  customerList: any;
  currentDate = new Date();
  salesDate: any;


  public dataService: CompleterData;
  public searchData :any=[];
  public ErrorMsg :any;
  public ErrorHandle = false;
  public nonStock = false;
  public Stock = false;
  constructor(
    private dialog: MatDialog,
    public dialogRef: MatDialogRef<SalesorderComponent>,
    private purchaseService: PurchaseService,
    private salesService:SalesService,
    private router: Router,
    private alertService: AlertService,
    private snackBar: MatSnackBar,
    private renderer: Renderer2,
    @Inject(MAT_DIALOG_DATA) public data    
  ) { 
    this.salesDate = formatDate(this.currentDate, "dd/MMM/yyy", "en-US");
    this.model.title = data.dialogTitle;
  }

  ngOnInit() {
    this.model.subtotal = 0;
    this.editSalesOrder(this.data);
    this.salestable = false;
    this.model.sNo = 0;
    this.model.deliveryCost = 0;
    this.model.subTotal = 0;
    this.model.totalItem = 0;
    this.getcategoryList();
    this.getProductList();
    this.getCustomerLists();
    this.ErrorHandle = false;
  }

  ngAfterViewInit() {
    (<HTMLElement>(
      document.querySelector(".mat-dialog-container")
    )).style.background = "inherit";
  }

  getcategoryList(){
    this.purchaseService.loadCategory()
    .subscribe(res => { 
      this.categoryList = res;
      console.log("Category list size -->"+this.categoryList.length);

      },
      error => {
        setTimeout(() => {
          this.snackBar.open("Network error: server is temporarily unavailable", "", {
            panelClass: ["error"],
            verticalPosition: 'top'      
          });
        });
      }
    );
  }

  getProductList(){
    this.purchaseService.loadItem()
      .subscribe(res => { 
        this.productList = res;
      },
      error => {
        setTimeout(() => {
          this.snackBar.open("Network error: server is temporarily unavailable", "", {
            panelClass: ["error"],
            verticalPosition: 'top'      
          });
        });
      }
    );
  }

  getNetAmount(productName: string, quantity: string, category: string) {
    console.log("productName -->"+productName);
    console.log("quantity -->"+quantity);
    this.model.unit = '';
    if(quantity == '' || quantity == undefined){
      console.log("--- No Quantity are available ---");
      this.salesService.getUnitPrice(productName,category).subscribe(
        (data) => {
          this.sales = data;
          this.model.unitPrice = this.sales.sellingprice;   
          this.model.unit = this.sales.unit;
        }
      );
    }else{
      this.salesService.getUnitPrice(productName,category)
      .subscribe(
        data => {
          this.sales = data; 
          this.model.unitPrice = this.sales.sellingprice;
          this.model.unit = this.sales.unit;
          this.model.netAmount = Number.parseInt(quantity) * this.sales.sellingprice;
          //this.model.customerName = this.sales.customername+"-"+this.sales.customercode;
          /* let res = quantity.replace(/\D/g, "");
          this.model.netAmount = Number.parseInt(res) * this.sales.sellingprice;
          console.log("Price ---->"+this.model.unitPrice +" --netAmount -->"+this.model.netAmount);*/
        },
        error => {
          
        }
      );
    }
  }

  addProduct(sNo:number){    
    this.salestable = true;
    let totalAmount = 0.0;
    var item = 0;
    this.fieldArray.push( {customerName: this.model.customerName, category: this.model.category,productName: this.model.productName,
      unitPrice: this.model.unitPrice, quantity: this.model.quantity, netAmount: this.model.netAmount, description: this.model.description } );

    console.log(this.fieldArray);
    this.model.sNo = sNo+1;
    this.sales.id = this.model.sNo;
    for(let j=0; j<this.fieldArray.length; j++){
      totalAmount += this.fieldArray[j].netAmount;
      this.model.subTotal = totalAmount;
      console.log("Add SUb Total -->"+this.model.subTotal);

      let response = this.fieldArray[j].quantity.replace(/\D/g, "");
      item += Number.parseInt(response);
      this.model.totalItem = item;
      console.log("Add Total Item -->"+this.model.totalItem);
    }
    
    // CLEAR TEXTBOX.
    this.model.category = null;
    this.model.productName = null;
    this.model.quantity = '';
    this.model.netAmount = '';
    this.model.unitPrice = '';
    this.model.description = '';
  }

  deleteFieldValue(index,qty:string,amt:number) {
    this.fieldArray.splice(index, 1);
    console.log("Size -->"+this.fieldArray.length);
    if(this.fieldArray.length==0){
      this.fieldArray = [];
      this.model.customerName = '';
      this.model.sNo = 0;
      this.model.subTotal = '';
      this.model.totalItem = 0;
    }
    this.model.sNo = this.fieldArray.length;
    let totqty = qty.replace(/\D/g, "");
    this.model.totalItem -= Number.parseInt(totqty);
    this.model.subTotal -= amt;

    if(this.fieldArray[0]){
      this.salestable = true;
    }else{
      this.salestable = false;
    }
  }

  saveSales(){
    this.salesarray=[];
    console.log(this.fieldArray);
    if(this.fieldArray.length==0){
      setTimeout(() => {
        this.snackBar.open("Warning: There is No Item/Product is being selected.", "", {
          panelClass: ["warning"],
          verticalPosition: 'top'      
        });
      });
    }else{
      this.salesarray.push(this.fieldArray);
      console.log("Sales Array -->"+this.salesarray);
      console.log(this.salesarray);
      this.sales.customerName = this.model.customerName;
  
      this.salesService.save(this.salesarray,this.model.deliveryCost)
      .subscribe(
        res => {
          console.log('............1 ....');
            console.log('successfully created...');
            setTimeout(() => {
             // this.snackBar.open("ATTENTION: Sales Order is being generated", "", {
              this.snackBar.open("Sales Order is being generated", "", {
                panelClass: ["success"],
                verticalPosition: 'top'      
              });
            });
          
            this.fieldArray = [];
            this.salestable = false;
            this.model.customerName = '';
            this.model.sNo = 0;
            this.model.totalItem = 0;
            this.model.subTotal = '';
            this.model.deliveryCost = '';
                        
        },
        error => {
        setTimeout(() => {
          this.snackBar.open("Network error: server is temporarily unavailable", "dismss", {
            panelClass: ["error"],
            verticalPosition: 'top'      
          });
        });
      });
    }
  }

  cancelSales(){
    console.log("------ Cancel Sales -------");
    this.fieldArray = [];
    this.salestable = false;
    this.model.customerName = '';
    this.model.productName = '';
    this.model.category = '';
    this.model.sNo = 0;
    this.model.totalItem = 0;
    this.model.subTotal = '';
    this.model.deliveryCost = '';   
  }
  
  getCustomerLists() {
    this.salesService.loadCustomerName().subscribe(
      (data) => {
        this.customerList = data;
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

  addSalesOrder(data: any) {
    let categoryname = "";
    let categorycode = "";
    let productname = "";
    let productcode = "";
    let customername = "";
    let customercode = "";
    let qty = "";
    let addSalesData: any;

    if (this.model.qty !== null && this.model.price !== null) {
      this.model.subtotal = Number.parseInt(this.model.qty) * this.model.unitPrice;
    }

    if (this.model.category !== undefined) {
      const splitCategory = this.model.category.split("-");
      categoryname = splitCategory[0];
      categorycode = splitCategory[1];
    }

    if (this.model.customerName !== undefined) {
      const splitCustomer = this.model.customerName.split("-");
      customername = splitCustomer[0];
      customercode = splitCustomer[1];
    }

    if (this.model.productName !== undefined) {
      const splitProduct = this.model.productName.split("-");
      productname = splitProduct[0];
      productcode = splitProduct[1];
    }

    addSalesData = {
      categoryname: categoryname,
      categorycode: categorycode,
      productname: productname,
      productcode: productcode,
      customername: customername,
      customercode: customercode,
      qty: this.model.qty !== null ? this.model.qty : 0,
      subtotal: this.model.subtotal,
      unit: this.model.unit,
      unitprice: this.model.unitPrice,
      date: data.id !== undefined ? data.date : this.salesDate,
      description: "",
      status: data.id !== undefined ? data.status : "Open",
    };

    if (data.id !== undefined) {
      addSalesData.id = data.id;
      this.updateSalesOrderData(addSalesData);
    } else {
      this.addSalesOrderData(addSalesData);
    }
    this.addSalesOrderClose();
  }

  addSalesOrderClose() {
    this.dialogRef.close();
  }

  editSalesOrder(data: any) {
    if (data.id !== undefined) {
      this.model.qty = data.qty;
      this.model.unit = data.unit;
      this.model.category = data.categoryname + "-" + data.categorycode;
      this.model.customerName = data.customername + "-" + data.customercode;
      this.model.productName = data.productname + "-" + data.productcode;
      this.model.subtotal = data.subtotal;
      this.model.netAmount = data.subtotal;
      this.model.unitPrice = data.subtotal / data.qty;
    }
  }

  addSalesOrderData(addSalesData: any) {
    this.salesService.addSalesOrder(addSalesData).subscribe(
      (res) => {
        if (res === null) {
          setTimeout(() => {
            this.snackBar.open(
              "Sales Order created Successfully",
              "dismss",
              {
                panelClass: ["success"],
                verticalPosition: "top",
              }
            );
          });
          this.getProductList();
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

  updateSalesOrderData(addSalesData: any) {
    this.salesService.updateSalesOrder(addSalesData).subscribe(
      (res) => {
        if (res === null) {
          setTimeout(() => {
            this.snackBar.open(
              "Sales Order updated Successfully",
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
