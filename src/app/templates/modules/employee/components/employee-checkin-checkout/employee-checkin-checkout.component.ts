import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { EmployeeService } from "../../services/employee.service";
import { CommonService } from "../../../../../core/common/_services/common.service";
import {formatDate } from '@angular/common';

@Component({
  selector: "app-employee-checkin-checkout",
  templateUrl: "./employee-checkin-checkout.component.html",
  styleUrls: ["./employee-checkin-checkout.component.scss"]
})
export class EmployeeChecinCheckoutComponent implements OnInit {
  model: any = {};
  @Output() closeCheckinCheckoutPopup: EventEmitter<any> = new EventEmitter<any>();
  @Output() enableAbsentIcon: EventEmitter<any> = new EventEmitter<any>();
  @Input() absenceItem: any;
  @Input() getAbsentDetail: any;
  @Input() currentTime: any;
  isSaveAbsent: boolean = false;
  todayTime: any;
  isSaveChecinCheckout: boolean = false;
  isDisableCheckout: boolean = false;
  isDisableCheckin: boolean = false;
  checkoutLabel: string = '';
  checkinLabel: string = '';

  constructor(private employeeService: EmployeeService,
              public commonService: CommonService) { 
               
              }

  ngOnInit() { 
   this.todayTime = formatDate(this.currentTime, 'HH:mm', 'en-US', '+0530');
   setTimeout(() => { 
    this.model.checkinCheckoutReason = '';
    this.disableCheckoutButton();
    this.disableCheckinButton();
  }, 200);
  }

  checkinCheckoutPopupClose() { 
    this.closeCheckinCheckoutPopup.emit(false);
  }

  objectKeys(obj) {
    return Object.keys(obj);
  }
  saveCheckinCheckedout(type: string) {
    this.isSaveChecinCheckout = true; 
    this.model.employeecode = this.absenceItem.employeecode;
    this.model.type = this.getAbsentDetail === undefined ? 'save':'update';
    this.model.date = this.commonService.getTodayDate();
    let msg = '';
    if (type === 'checkedin') {
      this.model.checkinreason = this.model.checkinCheckoutReason;
      this.model.checkintime = this.todayTime;
      this.model.checkoutreason = null;
      this.model.checkouttime = null;
      msg = 'Checked in successfully';
    } else {
      this.model.checkoutreason = this.model.checkinCheckoutReason;
      this.model.checkouttime = this.todayTime;
      this.model.checkinreason = this.getAbsentDetail.checkinreason;
      this.model.checkintime = this.getAbsentDetail.checkintime; 
      msg = 'Checked out successfully';
    }
    
    this.model.absent = null;
    this.model.reason = null;
    if (this.model.checkinCheckoutReason !== '') {
          this.employeeService.saveEmployeeAbsent(this.model).subscribe((res: any) => {
          this.commonService.getSuccessErrorMsg(res,msg);
          if (res === null) {
            this.enableAbsentIcon.emit(false);
            this.checkinCheckoutPopupClose();
          }
        });
    }
  }

  disableCheckoutButton() { 
    if (this.getAbsentDetail !== undefined && this.getAbsentDetail.checkoutreason !== null) {
      this.isDisableCheckout = true;
      this.checkoutLabel = 'Checked-Out';
    } else { 
      this.isDisableCheckout = false;
      this.checkoutLabel = 'Check-Out';
    } 
  }

  disableCheckinButton() { 
    if (this.getAbsentDetail !== undefined && this.getAbsentDetail.checkinreason !== null) {
      this.isDisableCheckin = true;
      this.checkinLabel = 'Checked-In';
    } else { 
      this.isDisableCheckin = false;
      this.checkinLabel = 'Check-In';
    } 
  }
}
