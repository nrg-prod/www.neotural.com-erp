import { Router } from '@angular/router';
import { MatSnackBar } from "@angular/material";
import { FinanceService } from "../../services/finance.service";
import { Component, OnInit, Inject,Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

// categoryeditdelete end
export interface UsersData {
  id: number;
  description: string;
  addedDate: string;
  type: string;
  toPerson: string;
  totalAmount: string;
  dialogText: string;
  dialogTitle: string;
}


@Component({
  selector: 'app-addpettycash',
  templateUrl: './addpettycash.component.html',
  styleUrls: ['./addpettycash.component.scss']
})
export class AddPettycashComponent implements OnInit {
  model: any = {};
  local_data:any;
  showbackbtn:boolean;
  dialogText:string;
  typeList:any = {};
  currencyList:any = {};

  constructor(
    private router: Router,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: UsersData,
    public dialogRef: MatDialogRef<AddPettycashComponent>,
    private financeService: FinanceService,
    private snackBar: MatSnackBar,
  ) { 
    console.log(data);
    this.local_data = {...data};
    this.model.id=this.local_data.id;
    this.model.description=this.local_data.description;
    this.model.addedDate=this.local_data.addedDate;
    this.model.type=this.local_data.type;
    this.model.toPerson=this.local_data.toPerson;
    this.model.totalAmount=this.local_data.totalAmount;    
    this.model.currency=this.local_data.currency;   
    if(this.local_data.id!=null){
      this.showbackbtn=false;
    }else{
      this.showbackbtn=true;
    }
  }

  ngOnInit() {
    this.typeList = ['Credit','Debit'];
    this.currencyList = ['AED','AUD','USD','IDR','MYR'];

    
  }

  addPettyClose(){
    this.dialogRef.close();
  }

  pettyCash(btn:any){
    if(btn == "Add"){
      this.savePetty();
    }else if(btn == "Update"){
      this.updatePetty();  
    }
  }
  
  savePetty(){
    console.log("savePettyCash");
    console.log("description-->"+this.model.description);
    console.log("addedDate-->"+this.model.addedDate);
    console.log("type-->"+this.model.type);
    console.log("toPerson-->"+this.model.toPerson);
    console.log("totalAmount-->"+this.model.totalAmount);
    this.financeService.save(this.model)
      .subscribe(
      data => {
        setTimeout(() => {
          this.snackBar.open("Petty Cash Saved Successfully", "", {
            panelClass: ["success"],
            verticalPosition: 'top'      
          });
        });
        this.addPettyClose();
      },
      error => {
        setTimeout(() => {
          this.snackBar.open("Network error: server is temporarily unavailable", "dismss", {
            panelClass: ["error"],
            verticalPosition: 'top'      
          });
        }); 
      }
    ); 
  }

  updatePetty(){
    console.log("Update PettyCash");
    console.log("Update ID-->"+this.model.id);
    console.log("Update description-->"+this.model.description);
    console.log("Update AddedDate-->"+this.model.addedDate);
    console.log("Update Type-->"+this.model.type);
    console.log("Update ToPerson-->"+this.model.toPerson);
    console.log("Update TotalAmount-->"+this.model.totalAmount);
    this.financeService.save(this.model)
      .subscribe(
        data => {
          setTimeout(() => {
            this.snackBar.open("Petty Cash Updated Successfully", "", {
              panelClass: ["success"],
              verticalPosition: 'top'      
            });
          });
          this.addPettyClose();
      },
      error => {
        setTimeout(() => {
          this.snackBar.open("Network error: server is temporarily unavailable", "dismss", {
            panelClass: ["error"],
            verticalPosition: 'top'      
          });
        }); 
      }
    ); 
  } 

}
