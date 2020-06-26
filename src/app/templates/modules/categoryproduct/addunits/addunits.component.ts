import { Router } from '@angular/router';
import { MatSnackBar, MAT_DIALOG_DATA } from "@angular/material";
import { CategoryproductService } from '../services/categoryproduct.service';
import { Component, OnInit, Inject,Optional } from '@angular/core';

// categoryeditdelete end
export interface UsersData {
  id: number;
  unitname: string;
  unitsymbol: string;
  quantityname: string;
  quantitysymbol: string;
  dimensionsymbol: string;
  //unitsymbol: string;
  //desc:string;
}


@Component({
  selector: 'app-addunits',
  templateUrl: './addunits.component.html',
  styleUrls: ['./addunits.component.scss']
})
export class AddunitsComponent implements OnInit {
  model: any = {};
  local_data:any;
  showbackbtn:boolean;
  btnsave:string;//="Save";

  constructor(
    private router: Router,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: UsersData,
    private catprodservice: CategoryproductService,
    private snackBar: MatSnackBar
  ) { 
    console.log(data);
    this.local_data = {...data};
    this.model.id=this.local_data.id;
    this.model.unitname=this.local_data.unitname;
    this.model.unitsymbol=this.local_data.unitsymbol;
    this.model.quantityname=this.local_data.quantityname;
    this.model.quantitysymbol=this.local_data.quantitysymbol;
    this.model.dimensionsymbol=this.local_data.dimensionsymbol;    
    if(this.local_data.id!=null){
     // alert("Yes Value Update");
      this.showbackbtn=false;
      this.btnsave="Update";
    }else{
     // alert("No Value New");
      this.showbackbtn=true;
      this.btnsave="Save";
     // this.showbackbtn=true;
    }
  }

  ngOnInit() {
  }

  unitClose(){
    this.router.navigate(["category-and-product/units"]);
  }

  addUnit(btnsave:string) {
    if(btnsave == "Save"){
      this.saveUnit();
    }else if(btnsave == "Update"){
      this.updateUnit();
    }
  }
  
  saveUnit(){
    console.log(this.model.unitname);
    console.log(this.model.unitsymbol);
    console.log(this.model.quantityname);
    console.log(this.model.quantitysymbol);
    console.log(this.model.dimensionsymbol);
    this.catprodservice.saveUnit(this.model)
      .subscribe(
        data => {
          setTimeout(() => {
            this.snackBar.open("Unit Saved Successfully", "", {
              panelClass: ["success"],
              verticalPosition: 'top'      
            });
          });
          this.unitClose();
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

  updateUnit(){
    console.log(this.model.unitname);
    console.log(this.model.unitsymbol);
    console.log(this.model.quantityname);
    console.log(this.model.quantitysymbol);
    console.log(this.model.dimensionsymbol);
    this.catprodservice.saveUnit(this.model)
      .subscribe(
        data => {
          setTimeout(() => {
            this.snackBar.open("Unit Updated Successfully", "", {
              panelClass: ["success"],
              verticalPosition: 'top'      
            });
          });
          this.unitClose();
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
