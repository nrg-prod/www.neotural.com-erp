import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar, MatDialogConfig, MatDialog } from "@angular/material";
import { AddUserMgtComponent } from '../addusermgt/addusermgt.component';

@Component({
  selector: "app-usermgt",
  templateUrl: "./usermgt.component.html",
  styleUrls: ["./usermgt.component.scss"]
})
export class UserManagementComponent implements OnInit {
  activeTab: number = 0;
  dialogConfig = new MatDialogConfig();

  constructor(
    private dialog: MatDialog,
    private router: Router,
    private snackBar: MatSnackBar
  ) {
    
  }


  ngOnInit() {
    
  }

  tabChanged(event) {
    this.activeTab = event;
  }

  setTabIndex(tabIndex) {
    this.activeTab = tabIndex;
  }

  addUserMgt(){
    this.dialogConfig.disableClose = true;
    this.dialogConfig.autoFocus = true;
    this.dialogConfig.position = {
      top: "1000",
      left: "100",
    };
    let dialogRef = this.dialog
    .open(AddUserMgtComponent, {
      width:'150vh',
      height:'80vh',
      //data: data,
      disableClose: true,
     // hasBackdrop: true
    })
    dialogRef.backdropClick().subscribe(result => {
      this.ngOnInit();
    });                
    dialogRef.afterClosed().subscribe(result => {
      this.ngOnInit();
    });
  }


}
