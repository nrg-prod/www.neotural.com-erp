import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

@Component({
  selector: 'app-all-financereport',
  templateUrl: './all-financereport.component.html',
  styleUrls: ['./all-financereport.component.css']
})
export class AllFinancereportComponent implements OnInit {

  model:any ={};
  public financeList : any;
  public financedetailshide=false;

  displayedColumns: string[] = ['Date','Category','Description','Debit','Credit'];
  dataSource: MatTableDataSource<any>;

  constructor() {
    const purchasedata = require("../../../../AllFinanceReporttable .json");
    this.financeList=purchasedata;
    this.dataSource = new MatTableDataSource(this.financeList);
   }

  ngOnInit() {
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  financedetaildivcall(Date: string){
    this.financedetailshide=true;
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

}
