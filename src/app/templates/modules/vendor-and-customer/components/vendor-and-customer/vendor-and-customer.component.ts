import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-vendor-and-customer",
  templateUrl: "./vendor-and-customer.component.html",
  styleUrls: ["./vendor-and-customer.component.scss"]
})
export class VendorAndCustomerComponent implements OnInit {
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
