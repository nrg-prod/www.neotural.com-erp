import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { EmployeeService } from "../../services/employee.service";
import { CommonService } from "../../../../../core/common/_services/common.service";

@Component({
  selector: "app-employee-report",
  templateUrl: "./employee-report.component.html",
  styleUrls: ["./employee-report.component.scss"]
})
export class EmployeeReportComponent implements OnInit {
  model: any = {};
  @Output() closeDailyReport: EventEmitter<any> = new EventEmitter<any>();
  @Input() dailyReportItem: any;
  @Input() getDailyReportDetail: any;
  isSaveDailyReport: boolean = false;
  
  constructor(
    private employeeService: EmployeeService,
    public commonService: CommonService
  ) {
    
  }

  ngOnInit() { 
    setTimeout(() => { 
      this.model.report = this.getDailyReportDetail !== undefined ? this.getDailyReportDetail.report: '';
    }, 600);
      
  }

  objectKeys(obj) {
    return Object.keys(obj);
  }

  dailyReportClose() { 
    this.closeDailyReport.emit(false);
  }

  saveDailyReport() { 
    this.model.employeecode = this.dailyReportItem.employeecode;
    this.model.type = this.getDailyReportDetail === undefined ? 'save': 'update';
    this.model.date = this.commonService.getTodayDate();
    let msg = '';
    this.isSaveDailyReport = true;
    if (this.model.report !== '') { 
          this.employeeService.saveDailyReport(this.model).subscribe((res: any) => {
          if (this.getDailyReportDetail === undefined) {
            msg = 'Daily report has been added Successfully';
          } else {
            msg = 'Daily report has been updated Successfully';
          }
          this.commonService.getSuccessErrorMsg(res,msg);
          if (res === null) {
            this.dailyReportClose();
          }
        });
      } 
  
  }
}
