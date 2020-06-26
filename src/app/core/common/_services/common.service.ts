import { Injectable } from '@angular/core';
import { formatDate } from '@angular/common';
import { MatExpansionPanel, MatSnackBar, Sort } from "@angular/material";

@Injectable()
export class CommonService { 
    currentDate = new Date();
    todayDate: any;
    currentTime: any;
    constructor(public snackBar: MatSnackBar) {
        this.todayDate = formatDate(this.currentDate, 'dd/MMM/yyy', 'en-US');
        this.currentTime = formatDate(this.currentDate, 'dd/MMM/yyy hh:mm:ss a', 'en-US');
    }

    getTodayDate() {
        return this.todayDate;
    }

    getCurrentTime() {
      return this.currentTime;
    }

    getSuccessErrorMsg(res: any, msg: string) {
      if (res === null) {
        setTimeout(() => {
          this.snackBar.open(msg, "dismss", {
            panelClass: ["success"],
            verticalPosition: 'top'      
          });
        });
      } else if (res === 500) {
        setTimeout(() => {
          this.snackBar.open("Internal server error", "dismss", {
            panelClass: ["error"],
            verticalPosition: 'top'      
          });
        });
      } else {
        setTimeout(() => {
          this.snackBar.open("Bad request error", "dismss", {
            panelClass: ["error"],
            verticalPosition: 'top'      
          });
        });
      }
       error => {
        setTimeout(() => {
          this.snackBar.open("Network error: server is temporarily unavailable", "dismss", {
            panelClass: ["error"],
            verticalPosition: 'top'      
          });
        });
  }
  }
}
