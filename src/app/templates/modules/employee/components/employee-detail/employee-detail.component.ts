import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnDestroy
} from "@angular/core";
import { EmployeeService } from "../../services/employee.service";
import { MatSnackBar } from "@angular/material";
import { CommonService } from "../../../../../core/common/_services/common.service";
import { Router, ActivatedRoute, UrlSegment } from '@angular/router';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: "app-employee-detail",
  templateUrl: "./employee-detail.component.html",
  styleUrls: ["./employee-detail.component.scss"]
})
export class EmployeeDetailComponent implements OnInit {
  
  attendanceDetails = [];
  employeeDet: any;
  events: string[] = [];
  
   constructor(
    private employeeService: EmployeeService,
    private snackBar: MatSnackBar,
    public commonService: CommonService,
    private _sanitizer: DomSanitizer,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.viewEmployee(params.id);
    });
    // setTimeout(function () {
    //   (<HTMLElement>document.querySelector('#date-picker')).click();
    // }, 500);
  }

  getImage(imgData) {
    //if (Array.isArray(imgData)){
      return this._sanitizer.bypassSecurityTrustResourceUrl(imgData);
    //}    
  }

  viewEmployee(empCode: string) {
    this.employeeService.getEmployeeDetail(empCode).subscribe((res: any) => {
      if (res.length > 0) {
        this.employeeDet = res[0];
        const item = {date:this.commonService.getTodayDate(),type:'M',employeecode: empCode};
        this.employeeService.getAbsentLists(item).subscribe((data: any) => { 
          if (data.length > 0) { 
            this.attendanceDetails = data;
          }
        })
        
      }
    });
  }
  
  showDailyReport() { 
    setTimeout(function () { 
      (<HTMLElement>document.querySelector('.mat-icon-button')).click();
      (<HTMLElement>document.querySelector('.mat-calendar')).style.width = '300px';
      (<HTMLElement>document.querySelector('.mat-calendar')).style.height = '0px';
      (<HTMLElement>document.querySelector('.mat-icon-button ')).style.visibility = 'hidden';
     }, 500);
  }

  addEvent(type: string, event: MatDatepickerInputEvent<Date>,picker) {
    this.events.push(`${type}: ${event.value}`); 
    console.log('test', `${type}: ${event.value}`);
    (<HTMLElement>document.querySelector('.mat-datepicker-popup')).style.pointerEvents = 'initial !important';
    //picker.open();
    console.log('picker', picker)
  }
}
