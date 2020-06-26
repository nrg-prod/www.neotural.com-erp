import { Component, OnInit, OnDestroy, AfterViewInit } from "@angular/core";
import { FinanceService } from "../../services/finance.service";
import { MatSnackBar } from "@angular/material/snack-bar";
import {
  MatDialog,
  MatDialogConfig,
  MatPaginator,
  MatSort,
  MatTableDataSource,
} from "@angular/material";
import { formatDate } from '@angular/common';

@Component({
  selector: "app-profitandloss",
  templateUrl: "./profitandloss.component.html",
  styleUrls: [ "./profitandloss.component.scss" ],
})
export class ProfitandLossComponent implements OnInit, OnDestroy {
  model:any = {};
  profitandLossList: any;
  dialogConfig = new MatDialogConfig();
  public profitTable = false;
  loadinggif:boolean = false;
  //public filterSelecteddiv = false;
  currentDate = new Date();
  todayDate: any;

  constructor(
    private financeService: FinanceService,
    private snackBar: MatSnackBar,
    private dialog: MatDialog
  ) {
    this.todayDate = formatDate(this.currentDate, 'yyyy-MM-dd', 'en-US');
  }

  ngOnInit() {
    this.model.totalDebit = 0;
    this.model.totalCredit = 0;

    this.getProfitandLossList();
  }

  ngOnDestroy() {
    (<HTMLElement>(
      document.querySelector(".mat-drawer-content")
    )).style.overflow = "auto";
  }
  
  getProfitandLossList() {
    this.loadinggif=true;
    this.profitTable = false;
    this.financeService.getProfitLoss().subscribe(
      (res) => {
        this.profitandLossList = res;
        this.loadinggif=false;
        if(this.profitandLossList.length == 0){
          this.profitTable = false;
        }else{
          this.profitTable = true;
          for(let i=0; i<this.profitandLossList.length; i++){
            this.model.totalDebit += this.profitandLossList[i].debit;
            this.model.totalCredit += this.profitandLossList[i].credit;
          }
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

  /* filterSelected(isChecked: boolean){
    if (isChecked) {
      this.filterSelecteddiv = true;
    } else {
      this.filterSelecteddiv = false;
    }
  } */

  sortByDate(){
    this.loadinggif=true;
    this.profitTable = false;
    this.model.totalDebit = 0;
    this.model.totalCredit = 0;
    if(this.model.todate > this.todayDate){
      setTimeout(() => {
        this.snackBar.open("ToDate was exceeded on today.No Record Found.", "dismiss", {
          duration: 3000, 
          panelClass: ["warning"],
          verticalPosition: "top",
          horizontalPosition: 'center'
        });
      });
      this.loadinggif=false;
      this.profitTable = true;
    }else{
      this.financeService.filterByDate(this.model).subscribe(
        (res) => {
          this.profitandLossList = res;
          this.loadinggif=false;
          if(this.profitandLossList.length == 0){
            this.profitTable = false;
          }else{
            this.profitTable = true;
            for(let i=0; i<this.profitandLossList.length; i++){
              this.model.totalDebit += this.profitandLossList[i].debit;
              this.model.totalCredit += this.profitandLossList[i].credit;
            }
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

  

}
