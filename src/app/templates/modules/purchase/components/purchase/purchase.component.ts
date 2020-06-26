import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-purchase",
  templateUrl: "./purchase.component.html",
  styleUrls: ["./purchase.component.scss"]
})
export class PurchaseComponent implements OnInit {
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
