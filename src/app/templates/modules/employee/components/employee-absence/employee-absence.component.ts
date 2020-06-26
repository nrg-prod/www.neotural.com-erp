import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { EmployeeService } from "../../services/employee.service";
import { CommonService } from "../../../../../core/common/_services/common.service";

@Component({
  selector: "app-employee-absence",
  templateUrl: "./employee-absence.component.html",
  styleUrls: ["./employee-absence.component.scss"]
})
export class EmployeeAbsenceComponent implements OnInit {
  model: any = {};
  @Output() closeAbsencePopup: EventEmitter<any> = new EventEmitter<any>();
  @Input() absenceItem: any;
  @Input() getAbsentDetail: any;
  isSaveAbsent: boolean = false;
  
  constructor(private employeeService: EmployeeService,
              public commonService: CommonService) {}

  ngOnInit() {
   setTimeout(() => {
    this.model.reason = this.getAbsentDetail !== undefined ? this.getAbsentDetail.reason:'';
  }, 200);
  }

  absencePopupClose() { 
    this.closeAbsencePopup.emit(false);
  }

  objectKeys(obj) {
    return Object.keys(obj);
  }

  saveAbsence() { 
    let msg = '';
    this.isSaveAbsent = true;
    this.model.employeecode = this.absenceItem.employeecode;
    this.model.type = this.getAbsentDetail === undefined ? 'save':'update';
    this.model.date = this.commonService.getTodayDate();
    this.model.checkinreason = null;
    this.model.checkintime = null;
    this.model.checkoutreason = null;
    this.model.checkouttime = null;
    this.model.absent = 'yes';
    if (this.model.reason !== '') {
      if (this.getAbsentDetail === undefined) {
        msg = 'Absence has been added successfully';
      } else { console.log('model', this.model)
        msg = 'Absence has been updated successfully';
      }
        this.employeeService.saveEmployeeAbsent(this.model).subscribe((res: any) => {
          this.commonService.getSuccessErrorMsg(res,msg);
          if (res === null) {
            this.absencePopupClose();
          }
        });
    
    // else {
    //     this.model.checkinreason = null;
    //     this.model.checkintime = null;
    //     this.model.checkoutreason = null;
    //     this.model.checkouttime = null;
    //     this.model.absent = 'yes';
    //     msg = 'Absence has been updated successfully';
    //     this.employeeService.updateEmployeeAbsent(this.model).subscribe((res: any) => {
    //       this.commonService.getSuccessErrorMsg(res,msg);
    //       if (res === null) {
    //         this.absencePopupClose();
    //       }
    //     });
    // } 
    }
  }
}
