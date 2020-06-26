import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-stock",
  templateUrl: "./stock.component.html",
  styleUrls: ["./stock.component.scss"]
})
export class StockComponent implements OnInit {
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
