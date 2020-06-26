import { Component, OnInit, ViewChildren, ViewChild, QueryList, ElementRef, Inject } from '@angular/core';
import { AlertService } from '../../../../core/common/_services/index';
import { Router } from '@angular/router';
import { Finance } from '../../../../core/common/_models/finance';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialog, MatDialogConfig, MatPaginator, MatSort, MatTableDataSource } from "@angular/material";
import { MatExpansionPanel, MatSnackBar, Sort } from "@angular/material";
import { runInThisContext } from 'vm';
import { CompleterService, CompleterData } from 'ng2-completer';
import { FinanceService } from '../finance.service';

@Component({
  selector: 'app-pettycashadd',
  templateUrl: './pettycashadd.component.html',
  styleUrls: ['./pettycashadd.component.css']
})
export class PettycashaddComponent implements OnInit {
  model: any = {};
  //user: User = new User();
  finance: Finance = new Finance();
  //stock:Stock;
  empList: any = {};
  salesList: any = {};
  purchaseList: any = {};
  purchaseReturnList: any = {};
  pettyCashList: any = {};
  financeList: any = {};

  productList: any = {};
  categoryList: any = {};
  empNameList: any = {};
  customerList: any = {};
  vendorList: any = {};
  dateList: any = {};
  typeList: any = {};

  dialogConfig = new MatDialogConfig();
  isDtInitialized: boolean = false;

  public empDetailsDiv = false;
  public salesDetailsDiv = false;
  public addSalesDiv = false;
  public purchaseDetailsDiv = false;
  public addPurchaseDiv = false;
  public purchaseReturnDetailsDiv = false;
  public addPurchaseReturnDiv = false;
  public financedetails = false;

  firstColumns: string[] = ['EmployeeName', 'Code', 'Rank', 'BasicSalary', 'OverTime', 'Bonus', 'Total'];
  secondColumns: string[] = ['Date', 'CustomerName', 'Invoice', 'SubTotal', 'DeliveryFee', 'Total'];
  thirdColumns: string[] = ['Date', 'vendorName', 'Invoice', 'SubTotal', 'DeliveryFee', 'Total'];
  fourthColumns: string[] = ['Date','Invoice','Type','SubTotal','DeliveryFee','Total'];
  fifthColumns: string[] = ['Description','Date','Type','From','To','Value'];
  sixthColumns: string[] = ['Date','Category','Description','Debit','Credit'];

  dataSource1: MatTableDataSource<any>;
  dataSource2: MatTableDataSource<any>;
  dataSource3: MatTableDataSource<any>;
  dataSource4: MatTableDataSource<any>;
  dataSource5: MatTableDataSource<any>;
  dataSource6: MatTableDataSource<any>;

  protected searchStr: string;
  protected captain: string;
  //protected dataService: CompleterData;
  public dataService: CompleterData;
  public searchData :any=[];
  /*protected searchData = [
    { color: 'red', value: '#f00' },
    { color: 'green', value: '#0f0' },
    { color: 'blue', value: '#00f' },
    { color: 'cyan', value: '#0ff' },
    { color: 'magenta', value: '#f0f' },
    { color: 'yellow', value: '#ff0' },
    { color: 'black', value: '#000' }
  ];*/
  //protected captains = ['James T. Kirk', 'Benjamin Sisko', 'Jean-Luc Picard', 'Spock', 'Jonathan Archer', 'Hikaru Sulu', 'Christopher Pike', 'Rachel Garrett' ];

  @ViewChildren(MatPaginator) paginator = new QueryList<MatPaginator>();
  @ViewChildren(MatSort) sort = new QueryList<MatSort>();
  constructor(
    private dialog: MatDialog,
    private router: Router,
    private alertService: AlertService,
    private completerService: CompleterService,
    private financeService:FinanceService,
  ) {
    this.financeService.loadCustomerVendorName()
    .subscribe(
      data => { 
        this.searchData = data;
        this.dataService = completerService.local(this.searchData);        
      },
      error => {
        this.alertService.error("Network error: server is temporarily unavailable");
      }
    );
    const empReportdata = require("src/assets/json/EmpReportTable.json");
    this.empList = empReportdata;
    this.dataSource1 = new MatTableDataSource(this.empList);
    this.dataSource1.paginator = this.paginator.toArray()[0];
    this.dataSource1.sort = this.sort.toArray()[0];

    const salesdata = require("src/assets/json/salesdata.json");
    this.salesList=salesdata;
    this.dataSource2 = new MatTableDataSource(this.salesList);
    this.dataSource2.paginator = this.paginator.toArray()[1];
    this.dataSource2.sort = this.sort.toArray()[1]; 

    const purchasedata = require("src/assets/json/purchasedata.json");
    this.purchaseList=purchasedata;
    this.dataSource3 = new MatTableDataSource(this.purchaseList);
    this.dataSource3.paginator = this.paginator.toArray()[2];
    this.dataSource3.sort = this.sort.toArray()[2]; 

    const purchasereturndata = require("src/assets/json/purchaseReturndata.json");
    this.purchaseReturnList=purchasereturndata;
    this.dataSource4 = new MatTableDataSource(this.purchaseReturnList);
    this.dataSource4.paginator = this.paginator.toArray()[3];
    this.dataSource4.sort = this.sort.toArray()[3]; 
    // Load all petty cash
    this.load();
/*
    const pettydata = require("../../pettyCashdata.json");
    this.pettyCashList=pettydata;
    this.dataSource5 = new MatTableDataSource(this.pettyCashList);
    this.dataSource5.paginator = this.paginator.toArray()[4];
    this.dataSource5.sort = this.sort.toArray()[4]; 
*/
    const financedata = require("../../../../AllFinanceReporttable .json");
    this.financeList=financedata;
    this.dataSource6 = new MatTableDataSource(this.financeList);
    this.dataSource6.paginator = this.paginator.toArray()[5];
    this.dataSource6.sort = this.sort.toArray()[5]; 
  }

  ngAfterViewInit() {
    this.dataSource1.paginator = this.paginator.toArray()[0];
    this.dataSource1.sort = this.sort.toArray()[0];

    this.dataSource2.paginator = this.paginator.toArray()[1];
    this.dataSource2.sort = this.sort.toArray()[1];

    this.dataSource3.paginator = this.paginator.toArray()[2];
    this.dataSource3.sort = this.sort.toArray()[2]; 

    this.dataSource4.paginator = this.paginator.toArray()[3];
    this.dataSource4.sort = this.sort.toArray()[3]; 

    this.dataSource5.paginator = this.paginator.toArray()[4];
    this.dataSource5.sort = this.sort.toArray()[4]; 

    this.dataSource6.paginator = this.paginator.toArray()[5];
    this.dataSource6.sort = this.sort.toArray()[5]; 
  }
  
  load(){
    this.financeService.load()
    .subscribe(
      data => { 
        this.pettyCashList = data;
        this.dataSource5 = new MatTableDataSource(this.pettyCashList);
        this.dataSource5.paginator = this.paginator.toArray()[4];
        this.dataSource5.sort = this.sort.toArray()[4]; 
      },
      error => {
        this.alertService.error("Network error: server is temporarily unavailable");
      }
    );
  }
  ngOnInit() {   

    this.empDetailsDiv = false;
    this.salesDetailsDiv = false;
    this.addSalesDiv = false;
    this.purchaseDetailsDiv = false;
    this.addPurchaseDiv = false;
    this.purchaseReturnDetailsDiv = false;
    this.addPurchaseReturnDiv = false;
    this.financedetails = false;
    this.empNameList = ["Josni", "Adam", "Nisho", "Alex", "Abraham"].sort((a, b) => b < a ? 1 : -1);
    this.customerList = ["Josni", "Jeff", "Nisho", "Alex", "Roch"].sort((a, b) => b < a ? 1 : -1);
    this.vendorList = ["Muthu", "Denish", "Shifon", "Irfan", "Roch"].sort((a, b) => b < a ? 1 : -1);
    this.productList = ['Mobile', 'Computer', 'Cloths', 'TV'];
    this.categoryList = ['Electronic', 'Manufactorning', 'Institue', 'Mining'];
    this.dateList = ['oct 2019','nov 2019','dec 2019','Jan 2020','Feb 2020','Mar 2020','Apr 2020']; 
    this.typeList = ['Credit','Debit'];


  }

  applyFilter(filterValue: string) {
    this.dataSource1.filter = filterValue.trim().toLowerCase();
    if (this.dataSource1.paginator) {
      this.dataSource1.paginator.firstPage();
    }
  }

  empDetails(empcode: string) {
    this.empDetailsDiv = true;
    for (let i = 0; i < this.empList.length; i++) {
      if (this.empList[i].empcode == empcode) {
        this.model.empcode = this.empList[i].empcode;
        this.model.employeeName = this.empList[i].employeeName;
        this.model.rank = this.empList[i].rank;
        this.model.monthName = this.empList[i].join;
        this.model.workingDays = this.empList[i].workingDays;
        this.model.absentDays = this.empList[i].absentDays;
        this.model.lateDays = this.empList[i].lateDays;
        this.model.earlyLeaveDays = this.empList[i].earlyLeaveDays;
        this.model.overTime = this.empList[i].overTime;
        this.model.monthlySalary = this.empList[i].monthlySalary;
        this.model.commission = this.empList[i].commission;
        this.model.absentDeduction = this.empList[i].absentDeduction;
        this.model.overtimeSalary = this.empList[i].overtimeSalary;
        this.model.totalAmount = this.empList[i].totalAmount;
      }
    }
  }

  applySalesFilter(filterValue: string) {
    this.dataSource2.filter = filterValue.trim().toLowerCase();
    if (this.dataSource2.paginator) {
      this.dataSource2.paginator.firstPage();
    }
  }

  salesDetails(invoiceNumber: string){
    this.salesDetailsDiv = true;
    this.addSalesDiv = true;
    for(let j=0; j<this.salesList.length; j++){
      if(this.salesList[j].invoiceNumber == invoiceNumber){
        this.model.invoiceNumber = this.salesList[j].invoiceNumber;
        this.model.customerName = this.salesList[j].customerName;
        this.model.custcode = this.salesList[j].custcode;
        this.model.addedDate = this.salesList[j].addedDate;
        this.model.category = this.salesList[j].category;
        this.model.deliveryCost = this.salesList[j].deliveryCost;
        this.model.totalAmount = this.salesList[j].totalAmount;
      }
    }
  }

  applyPurchaseFilter(filterValue: string) {
    this.dataSource3.filter = filterValue.trim().toLowerCase();
    if (this.dataSource3.paginator) {
      this.dataSource3.paginator.firstPage();
    }
  }

  purchaseDetails(invoiceNumber: string){
    this.purchaseDetailsDiv = true;
    this.addPurchaseDiv = true;
    for(let j=0; j<this.purchaseList.length; j++){
      if(this.purchaseList[j].invoiceNumber == invoiceNumber){
        this.model.invoiceNumber = this.purchaseList[j].invoiceNumber;
        this.model.vendorName = this.purchaseList[j].vendorName;
        this.model.vendorcode = this.purchaseList[j].vendorcode;
        this.model.addedDate = this.purchaseList[j].addedDate;
        this.model.category = this.purchaseList[j].category;
        this.model.deliveryCost = this.purchaseList[j].deliveryCost;
        this.model.totalAmount = this.purchaseList[j].totalAmount;
      }
    }
  }

  applyReturnFilter(filterValue: string) {
    this.dataSource4.filter = filterValue.trim().toLowerCase();
    if (this.dataSource4.paginator) {
      this.dataSource4.paginator.firstPage();
    }
  }

  purchaseReturnDetails(invoiceNumber: string){
    this.purchaseReturnDetailsDiv = true;
    this.addPurchaseReturnDiv = true;
    for(let j=0; j<this.purchaseReturnList.length; j++){
      if(this.purchaseReturnList[j].invoiceNumber == invoiceNumber){
        this.model.invoiceNumber = this.purchaseReturnList[j].invoiceNumber;
        this.model.type = this.purchaseReturnList[j].type;
        this.model.poDate = this.purchaseReturnList[j].poDate;
        this.model.subTotal = this.purchaseReturnList[j].subTotal;
        this.model.deliveryCost = this.purchaseReturnList[j].deliveryCost;
        this.model.totalAmount = this.purchaseReturnList[j].totalAmount;
      }
    }
  }

  applypettyCashFilter(filterValue: string) {
    this.dataSource5.filter = filterValue.trim().toLowerCase();
    if (this.dataSource5.paginator) {
      this.dataSource5.paginator.firstPage();
    }
  }

  //savePettyCash(error: Response | any){
    savePettyCash(){
    console.log("savePettyCash");
    console.log("description-->"+this.model.description);
    console.log("addedDate-->"+this.model.addedDate);
    console.log("type-->"+this.model.type);
    console.log("fromPerson-->"+this.model.fromPerson);
    console.log("toPerson-->"+this.model.toPerson);
    console.log("totalAmount-->"+this.model.totalAmount);
    this.financeService.save(this.model)
      .subscribe(
        data => {
          this.alertService.success("Successfully Saved.");
          setTimeout(() => {
            this.load();
            this.alertService.clear();
            this.model.description = '';
            this.model.addedDate = '';
            this.model.type = '';
            this.model.fromPerson = '';
            this.model.toPerson = '';
            this.model.totalAmount = '';
          }, 1000);

        },
        error => {
          this.alertService.error("Network error: server is temporarily unavailable");
          setTimeout(() => {
            this.alertService.clear();
          }, 2000);
        }
      );

      /*if (error.status == 0){ //or whatever condition you like to put
        this.alertService.error("Network error: server is temporarily unavailable");
        setTimeout(() => {
          this.alertService.clear();
        }, 2000);      
      } */

  }

  pettyDetails(_id: string){
    console.log("petty cash details");  
      console.log("pettycash code-->"+_id);
    for(let j=0; j<this.pettyCashList.length; j++){
      if(this.pettyCashList[j].id == _id){
        this.finance.description = this.pettyCashList[j].description;
        this.finance.addedDate = this.pettyCashList[j].addedDate;
        this.finance.type = this.pettyCashList[j].type;
        this.finance.fromPerson = this.pettyCashList[j].fromPerson;
        this.finance.toPerson = this.pettyCashList[j].toPerson;
        this.finance.totalAmount = this.pettyCashList[j].totalAmount;
        this.finance.id = this.pettyCashList[j].id;

      }
    }
  }

  updatePettyCash(){
    console.log("update petty cash");
    console.log("pettycash Id-->"+this.finance.id);
    this.financeService.update(this.finance)
    .subscribe(
      data => {
        this.finance =   data;   
        this.alertService.success("Successfully Updated");
        setTimeout(() => {
          this.alertService.clear();

        }, 2000);
        this.load();
      },
      error => {
        this.alertService.error("Network error: server is temporarily unavailable");
        setTimeout(() => {
          this.alertService.clear();

        }, 2000);
      }
      ); 
  }

  deletePettyCash(){
    console.log("deletePettyCash");
    this.alertService.success("Successfully Deleted.");
    setTimeout(() => {
      this.alertService.clear();
    }, 2000);
  }

  applyFinanceFilter(filterValue: string) {
    this.dataSource6.filter = filterValue.trim().toLowerCase();
    if (this.dataSource6.paginator) {
      this.dataSource6.paginator.firstPage();
    }
  }

  financedetaildivcall(Date: string){
    console.log("showing particular petty cash info")
    this.financedetails=true;
    for(let i=0;i<this.financeList.length;i++){
      if(this.financeList[i].date==Date){
        this.model.customer = this.financeList[i].customer;
        this.model.date = this.financeList[i].date;
        this.model.category = this.financeList[i].category;
        this.model.description = this.financeList[i].description;
        this.model.debit = this.financeList[i].debit;
        this.model.credit = this.financeList[i].credit;
        this.model.code = this.financeList[i].code;
      }
    }
  }

  searchStockReport(){

  }

  searchSales(){

  }

  searchPurchase(){

  }

  searchReturn(){

  }

  searchPettyCash(){
    
  }

}
