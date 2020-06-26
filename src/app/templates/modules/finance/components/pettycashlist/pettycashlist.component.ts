import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FinanceService } from "../../services/finance.service";
import { MatSnackBar, MatDialogConfig, MatDialog } from "@angular/material";
import { AddPettycashComponent } from '../addpettycash/addpettycash.component';

@Component({
  selector: 'app-pettycashlist',
  templateUrl: './pettycashlist.component.html',
  styleUrls: ['./pettycashlist.component.scss']
})
export class PettycashlistComponent implements OnInit {
  model: any = {};
  pettyCashList: any = {};
  financeList: any = {};
  dialogConfig = new MatDialogConfig();
  title: string = "";
  button: string = "";
  enable: boolean;

  constructor(
    private dialog: MatDialog,
    private router: Router,
    private financeService:FinanceService,
    private snackBar: MatSnackBar
  ) {
    
  }

  
  load(){
    this.financeService.load()
    .subscribe(
      data => { 
        this.pettyCashList = data;
        if(this.pettyCashList.length > 0) {
          this.enable = true;
        } else {
          this.enable = false;
          setTimeout(() => {
            this.snackBar.open("Petty Cash data is empty", "dismiss", {
              duration: 300000, // 3mints
              panelClass: ["warning"],
              verticalPosition: "top",
              horizontalPosition: 'center'
            });
          });
        }
       
      },
      error => {
      }
    );
  }
  ngOnInit() {   
    this.load();
  }

  addPetty(id:string,description:string,addedDate:string,type:string,
    toPerson:string,totalAmount:string,currency:string){

    if(this.snackBar.open) {
      this.snackBar.dismiss();
    }

    let data: any;
    if (id !== null) {
      this.title = "Edit Petty Cash";
      this.button = "Update";
    } else {
      this.title = "Add Petty Cash";
      this.button = "Add";
    }
    data = { dialogTitle: this.title, dialogText: this.button, id: id,
      description: description, addedDate: addedDate, type: type,
      toPerson: toPerson, totalAmount: totalAmount,currency: currency };

    this.dialogConfig.disableClose = true;
    this.dialogConfig.autoFocus = true;
    this.dialogConfig.position = {
      top: "1000",
      left: "100",
    };
    let dialogRef = this.dialog
    .open(AddPettycashComponent, {
      width:'150vh',
      height:'80vh',
      data: data,
      disableClose: true,
      //: true
    })
    dialogRef.backdropClick().subscribe(result => {
      this.load();
    });                
    dialogRef.afterClosed().subscribe(result => {
      this.load();
    });
  }

  pettydelete(id:string){
    this.financeService.remove(id).subscribe((data: any) => {
      if (data === null) {
        setTimeout(() => {
          this.snackBar.open(
            "Petty Cash has been deleted successfully",
            "dismss",
            {
              panelClass: ["success"],
              verticalPosition: "top",
            }
          );
        });
        this.load();
      } else if (data === 500) {
        setTimeout(() => {
          this.snackBar.open("Internal server error", "dismss", {
            panelClass: ["error"],
            verticalPosition: "top",
          });
        });
      } else {
        setTimeout(() => {
          this.snackBar.open("Bad request data", "dismss", {
            panelClass: ["error"],
            verticalPosition: "top",
          });
        });
      }
    });
  }

  ngOnDestroy(){
    this.snackBar.dismiss();
    (<HTMLElement>document.querySelector('.mat-drawer-content')).style.overflow = 'auto';
  }
  
}
