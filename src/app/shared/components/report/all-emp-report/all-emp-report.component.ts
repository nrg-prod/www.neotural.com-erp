import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { ReportService } from '../report.service';
import { AlertService } from '../../../../core/common/_services';

@Component({
  selector: 'app-all-emp-report',
  templateUrl: './all-emp-report.component.html',
  styleUrls: ['./all-emp-report.component.css']
})
export class AllEmpReportComponent implements OnInit {

  model:any ={};
  public empPreviewdiv=false;
  public empreportdetails=false;

  displayedColumns: string[] = ['EmployeeName','Empcode'];
  dataSource1: MatTableDataSource<any>;
  empDetailsList: any;

  displayedColumns1: string[] = ['Date','Checkin','Checkout'];
  dataSource2: MatTableDataSource<any>;
  empAbsetList: any;

  @ViewChild('sortCol1',{static:false}) sortCol1: MatSort;
  @ViewChild('sortCol2',{static:false}) sortCol2: MatSort;
  dataSource: any;
  paginator: any;
  sort: any;

  constructor(
    private  reportService:ReportService,
    private alertService:AlertService,
  ) { 
    const purchasedata1 = require("src/assets/json/EmpAbsentcardTable.json");
      this.empAbsetList=purchasedata1;
      this.dataSource2 = new MatTableDataSource(this.empAbsetList);
      this.dataSource2.sort = this.sortCol2;

  }

  ngOnInit() {
    this.allemplist();
  }
  allemplist(){
    this.reportService.load()
    .subscribe(
      data => {
        this.empDetailsList = data;
        console.log("employee code -->"+this.empDetailsList[0].employeecode);
        this.dataSource1 = new MatTableDataSource(this.empDetailsList);
        this.dataSource1.sort = this.sortCol1;
      },
      error => {
        setTimeout(() => {
          this.alertService.error("Network error: server is temporarily unavailable");
        }, 2000);
      }
    );
  }


  applyFilter(filterValue: string) {
    this.dataSource1.filter = filterValue.trim().toLowerCase();

    if (this.dataSource1.paginator) {
      this.dataSource1.paginator.firstPage();
    }
  }

  absentCardDetails(employeecode: string){
    this.empPreviewdiv=true;
    this.empreportdetails=false;
    for(let i=0;i<this.empDetailsList.length;i++){
      if(this.empDetailsList[i].employeecode==employeecode){
        this.model.name = this.empDetailsList[i].name;
        this.model.employeecode = this.empDetailsList[i].employeecode;
        this.model.rank = this.empDetailsList[i].rank;
        this.model.phonenumber = this.empDetailsList[i].phonenumber;
        this.model.email = this.empDetailsList[i].email;
        this.model.addeddate = this.empDetailsList[i].addeddate;
        this.model.status = this.empDetailsList[i].status;
      }
    }
  }

  empdailyreportcall(date: string){
    this.empreportdetails=true;
    for(let j=0;j<this.empAbsetList.length;j++){
      if(this.empAbsetList[j].date==date){
        this.model.date = this.empAbsetList[j].date;
      }
    }
  }

}
