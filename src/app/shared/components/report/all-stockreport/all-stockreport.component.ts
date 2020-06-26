import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-all-stockreport',
  templateUrl: './all-stockreport.component.html',
  styleUrls: ['./all-stockreport.component.css']
})
export class AllStockreportComponent implements OnInit {

  public purchaseList : any;
  public salesorderhide=false;
  model:any ={};

  displayedColumns: string[] = ['ItemCode','ItemName','Category','Date','Status'];
  dataSource: MatTableDataSource<any>;
  constructor() {
    const purchasedata = require("src/assets/json/stockReportdata.json");
    this.purchaseList=purchasedata;
    this.dataSource = new MatTableDataSource(this.purchaseList);
   }

  ngOnInit() {
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  
  stockdivcall(itemCode: string){
    this.salesorderhide=true;
    for(let i=0;i<this.purchaseList.length;i++){
      if(this.purchaseList[i].itemCode==itemCode){
        this.model.itemCode = this.purchaseList[i].itemCode;
        this.model.productName = this.purchaseList[i].productName;
        this.model.category = this.purchaseList[i].category;
        this.model.lastUpdate = this.purchaseList[i].lastUpdate;
        this.model.status = this.purchaseList[i].status;
      }
    }
  }
}
