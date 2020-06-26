import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { ReportService } from '../report.service';
import { AlertService } from '../../../../core/common/_services';

@Component({
  selector: 'app-all-purchasereport',
  templateUrl: './all-purchasereport.component.html',
  styleUrls: ['./all-purchasereport.component.css']
})
export class AllPurchasereportComponent implements OnInit {

  public purchaseList : any;
  public purchaseorderhide=false;
  model:any ={};

  displayedColumns: string[] = ['No','PoInvoice','poDate','vendor','Total'];
  dataSource: MatTableDataSource<any>;
  
  constructor(
    private  reportService:ReportService,
    private alertService:AlertService,
  ) { 
  }

  ngOnInit() {
    this.allpurchasereport();
  }

  allpurchasereport(){
    this.reportService.purchaseload()
    .subscribe(
      data => {
        this.purchaseList = data;
        this.dataSource = new MatTableDataSource(this.purchaseList);
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
  
  purchaseorderdivcall(invoicenumber: string){
    this.purchaseorderhide=true;
    for(let i=0;i<this.purchaseList.length;i++){
      if(this.purchaseList[i].invoicenumber==invoicenumber){
        this.model.invoicenumber = this.purchaseList[i].invoicenumber;
        this.model.invoicedate = this.purchaseList[i].invoicedate;
        this.model.vendorname = this.purchaseList[i].vendorname;
        this.model.totalprice = this.purchaseList[i].totalprice;
      }
    }
  }
}
