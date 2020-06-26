import { Component, OnInit, ViewChild ,ElementRef,Inject} from '@angular/core';
import { Purchase, User } from 'src/app/core/common/_models';
import { AlertService } from 'src/app/core/common/_services';
import { Router } from '@angular/router';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MatDialog, MatDialogConfig, MatTableDataSource} from "@angular/material";
import { MatExpansionPanel, MatSnackBar, Sort } from "@angular/material";
import { PurchaseService } from '../../services/purchase.service';


@Component({
  selector: 'app-purchasereport',
  templateUrl: './purchasereport.component.html',
  styleUrls: ['./purchasereport.component.scss']
})
export class PurchasereportComponent implements OnInit {
  purchse:Purchase;
  model: any ={};
  public purchaseList : any = {};
  public purchaseReportList : any = {} ;
  dialogConfig = new MatDialogConfig();
  isDtInitialized:boolean = false;
  //displayedColumns: string[] = ['No','PoInvoice','poDate','vendor','Total'];
  displayedColumns: string[] = ['No','PoInvoice','poDate','vendor','Total'];

  dataSource: MatTableDataSource<any>;
  
  constructor(
    private dialog: MatDialog,
    private router: Router, 
    private alertService: AlertService,
    private purchaseservice: PurchaseService,
  ) {

    this.purchaseservice.load().subscribe(res => { 
      this.purchaseList = res;
      this.dataSource = new MatTableDataSource(this.purchaseList);
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

  getReportDetails(invoiceNumber:string){
    this.purchaseservice.load().subscribe(res => { 
      this.purchaseList = res;
      for(let i=0;i<this.purchaseList.length; i++){
        if(this.purchaseList[i].invoiceNumber == invoiceNumber){
          this.model.invoiceNumber = invoiceNumber;
          this.model.poDate = this.purchaseList[i].poDate;
          this.model.vendorName = this.purchaseList[i].vendorName;
          this.model.productName = this.purchaseList[i].description;
          this.model.totalItem = this.purchaseList[i].totalItem;
          this.model.totalAmount = this.purchaseList[i].totalAmount;
          this.model.deliveryCost = this.purchaseList[i].deliveryCost;
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
