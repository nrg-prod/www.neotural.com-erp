import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-finance",
  templateUrl: "./finance.component.html",
  styleUrls: ["./finance.component.scss"]
})
export class FinanceComponent implements OnInit {
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
