import { Component, OnInit, ViewChild ,ElementRef,Inject} from '@angular/core';
import { Sales, User } from 'src/app/core/common/_models';
import { AlertService } from 'src/app/core/common/_services';
import { Router } from '@angular/router';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MatDialog, MatDialogConfig, MatTableDataSource} from "@angular/material";
import { MatExpansionPanel, MatSnackBar, Sort } from "@angular/material";
import { SalesService } from '../../services/sales.service';

@Component({
  selector: 'app-salesreport',
  templateUrl: './salesreport.component.html',
  styleUrls: ['./salesreport.component.css']
})
export class SalesreportComponent implements OnInit {
  model: any ={};
  sales:Sales;
  public salesList : any;
  public salesReportList : any = {} ;
  dialogConfig = new MatDialogConfig();
  isDtInitialized:boolean = false;
  displayedColumns: string[] = ['No','SoInvoice','soDate','customer','Total'];
  dataSource: MatTableDataSource<any>;
  
  constructor(
    private dialog: MatDialog,
    private router: Router, 
    private alertService: AlertService,
    private salesService: SalesService
  ) {
    this.salesService.load().subscribe(res => { 
      this.salesList = res;
      this.dataSource = new MatTableDataSource(this.salesList);
      },
      error => {
        setTimeout(() => {
          this.alertService.error("Network error: server is temporarily unavailable");
        }, 2000);
      }
    );

   }

  ngOnInit() {
    this.model.totalAmount = 0;
    this.model.deliveryCost = 0;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getReportDetails(invoiceNumber:number){
    this.salesService.load().subscribe(res => { 
      this.salesList = res;
      for(let i=0;i<this.salesList.length; i++){
        if(this.salesList[i].invoiceNumber == invoiceNumber){
          this.model.invoiceNumber = invoiceNumber;
          this.model.soDate = this.salesList[i].soDate;
          this.model.customerName = this.salesList[i].customerName;
          this.model.productName = this.salesList[i].description;
          this.model.totalItem = this.salesList[i].totalItem;
          this.model.totalAmount = this.salesList[i].totalAmount;
          this.model.deliveryCost = this.salesList[i].deliveryCost;
        }
      }
      },
      error => {
        setTimeout(() => {
          this.alertService.error("Network error: server is temporarily unavailable");
        }, 2000);
      }
    );
  }


}
