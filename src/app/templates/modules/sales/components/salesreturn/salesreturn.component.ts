import { Component, OnInit, ViewChild ,ElementRef,Inject} from '@angular/core';
import { Purchase } from 'src/app/core/common/_models';
import { AlertService } from 'src/app/core/common/_services';
import { Router } from '@angular/router';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MatDialog, MatDialogConfig, MatPaginator, MatSort, MatTableDataSource} from "@angular/material";
import { MatExpansionPanel, MatSnackBar, Sort } from "@angular/material";
import { SalesService } from '../../services/sales.service';

@Component({
  selector: 'app-salesreturn',
  templateUrl: './salesreturn.component.html',
  styleUrls: ['./salesreturn.component.scss']
})
export class SalesreturnComponent implements OnInit {
  model: any ={};
  public poreturnList : any;
  dialogConfig = new MatDialogConfig();
  isDtInitialized:boolean = false;
  todayDate : Date = new Date();

  public returntable = false;

  fieldArray: Array<any> = [];
  returnarray: Array<any> = [];

  constructor(
    private salesService: SalesService,
    private dialog: MatDialog,
    private router: Router, 
    private alertService: AlertService
  ) {  
  

   }
  ngOnInit() {
    this.returnList();
  }

  returnList(){
    this.salesService.loadReturn()
      .subscribe(res => { 
        this.poreturnList = res;
        if(this.poreturnList.length == 0){
          this.returntable = false;
        }else{
          this.returntable = true;
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
