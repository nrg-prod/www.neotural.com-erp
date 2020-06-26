import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { ReportService } from '../report.service';
import { AlertService } from '../../../../core/common/_services';

@Component({
  selector: 'app-all-salesreport',
  templateUrl: './all-salesreport.component.html',
  styleUrls: ['./all-salesreport.component.css']
})
export class AllSalesreportComponent implements OnInit {
  public salesList : any ={};
  public salesorderhide=false;
  model:any ={};

  displayedColumns: string[] = ['No','SoInvoice','soDate','customer','Total'];
  dataSource: MatTableDataSource<any>;
  
  constructor(
    private  reportService:ReportService,
    private alertService:AlertService,
  ) { 
  }

  ngOnInit() {
    this.allsalesreport();
  }

  allsalesreport(){
    this.reportService.salesload()
    .subscribe(
      data => {
        this.salesList = data;
        this.dataSource = new MatTableDataSource(this.salesList);
      },
      error => {
        setTimeout(() => {
          this.alertService.error("Network error: server is temporarily unavailable");
        }, 2000);
      }
    );
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  
  salesorderdivcall(invoicenumber: string){
    this.salesorderhide=true;
    for(let i=0;i<this.salesList.length;i++){
      if(this.salesList[i].invoicenumber==invoicenumber){
        this.model.invoicenumber = this.salesList[i].invoicenumber;
        this.model.invoicedate = this.salesList[i].invoicedate;
        this.model.customername = this.salesList[i].customername;
        this.model.totalprice = this.salesList[i].totalprice;
      }
    }
  }
}
