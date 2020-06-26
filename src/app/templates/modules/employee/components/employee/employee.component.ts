import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-employee",
  templateUrl: "./employee.component.html",
  styleUrls: ["./employee.component.scss"]
})
export class EmployeeComponent implements OnInit {
  activeTab: number = 0;

  constructor() {}

  ngOnInit() {}

  tabChanged(event) {
    this.activeTab = event;
  }

  setTabIndex(tabIndex) {
    this.activeTab = tabIndex;
  }
}
