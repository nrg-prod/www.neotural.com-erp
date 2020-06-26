import { Component, OnInit, ViewChild, HostListener } from "@angular/core";
import { MenuItem } from "src/assets/json/menuItem.model";
import { RouterModule, Routes, Router, ActivatedRoute } from "@angular/router";
import { BehaviorSubject, Observable } from "rxjs";
import {
  MatTableDataSource,
  MatPaginator,
  MatSort,
  MatCalendar
} from "@angular/material";
import { Moment } from "moment";

import { dashboardWidgets } from "../../../core/common/config/dashboard-widgets.config";
import { WidgetData } from "../../../shared/components/dashboard-widget/dashboard-widget.model";
import { RecentUpdate, Stock, Sale } from "./navigation.model";
import { RecentUpdatesMock } from "../../../core/common/config/mock/recent-updates.mock";
import { StocksMock } from "../../../core/common/config/mock/stocks.mock";
import { SalesMock } from "../../../core/common/config/mock/sales.mock";

@Component({
  selector: "app-navigation",
  templateUrl: "./navigation.component.html",
  styleUrls: ["./navigation.component.scss"]
})
export class NavigationComponent implements OnInit {
  widgets: WidgetData[];
  recentUpdates: RecentUpdate[];
  stocks: Stock[];
  sales: MatTableDataSource<Sale>;

  searchText: any;
  heroes = [
    { id: 11, name: "CHanaka Nice", country: "India" },
    { id: 12, name: "MNarco", country: "USA" }
  ];
  menuItems: MenuItem[];
  menuItemsIcons: MenuItem[];
  model: any = {};

  displayedColumns: string[] = ["invoicenumber", "client", "date", "status"];

  allproductlist: any = {}; 

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;

  ngAfterViewInit() {
    this.sales.paginator = this.paginator;
    this.sales.sort = this.sort;
  }

  @ViewChild("calendar", { read: true, static: false }) calendar: MatCalendar<
    Moment
  >;
  selectedDate: Moment;

  showToggle: string;
  mode: string;
  openSidenav: boolean;
  private screenWidth$ = new BehaviorSubject<number>(window.innerWidth);

  public menu1 = false;
  public notSelected = true;
  //private count=0;
  static showParent: any;

  constructor(private router: Router, public route: ActivatedRoute) {
    //this.count=route.firstChild.children.length;

    this.sales = new MatTableDataSource(SalesMock);
    this.sales.paginator = this.paginator;
    this.sales.sort = this.sort;
  }
  @HostListener("window:resize", ["$event"])
  onResize(event) {
    this.screenWidth$.next(event.target.innerWidth);
  }
  getScreenWidth(): Observable<number> {
    return this.screenWidth$.asObservable();
  }

  ngOnInit() {
    this.widgets = dashboardWidgets;
    this.recentUpdates = RecentUpdatesMock;
    this.stocks = StocksMock;
    // this.sales = SalesMock;

    this.getScreenWidth().subscribe(width => {
      if (width < 640) {
        this.showToggle = "show";
        this.mode = "over";
        this.openSidenav = false;
      } else if (width > 640) {
        this.showToggle = "hide";
        this.mode = "side";
        this.openSidenav = true;
      }
    });

    this.menuItems = [
      new MenuItem("DashBoard", "/landingpage"),
      new MenuItem("Employment", "employeedata"),
      //new MenuItem("TimeSheet","timesheet"),
      new MenuItem("Vendor & Customer", "vendoradd"),
      new MenuItem("Category & Product", "categoryitem"),
      new MenuItem("Purchase", "purchaseadd"),
      new MenuItem("Sales", "salesorder"),
      new MenuItem("Finance", "pettycashlist"),
      new MenuItem("Stock", "stock"),
     // new MenuItem("Report", "allreport"),
     // new MenuItem("User Management", "usermgtadd"),
      new MenuItem("Log Out", "logout"),

   //   new MenuItem("", "")
    ];

    this.menuItemsIcons = [
      new MenuItem("./assets/images/dashboard.png", "/landingpage"),
      new MenuItem("./assets/images/employee.png", "employeelist"),
      //new MenuItem("./assets/images/employee.png","employeelist"),
      new MenuItem("./assets/images/vendor-customer.png", "Customervendoradd"),
      new MenuItem(
        "./assets/images/category-product.png",
        "Productcategoryadd"
      ),
      new MenuItem("./assets/images/circle-cropped.png", "purchaseadd"),
      new MenuItem("./assets/images/sales.png", "salesorder"),
      new MenuItem("./assets/images/finance.png", "pettycashlist"),
      new MenuItem("./assets/images/stock.png", "stock"),
     // new MenuItem("./assets/images/reports.png", "allreport"),
    //  new MenuItem("./assets/images/usermgt.png", "usermgtadd"),
      new MenuItem("./assets/images/logout.png", "login"),

    //  new MenuItem("./assets/images/null.png", "")

      /*
new MenuItem("home","/landingpage"),
new MenuItem("./assets/images/employee.png","employeelist"),
new MenuItem("person", "Customervendoradd"),
new MenuItem("home", "Productcategoryadd"),
new MenuItem("shopping_cart","purchaseadd"),
new MenuItem("home","salesorder"),
new MenuItem("home","pettycashadd"),
new MenuItem("home","stockadd"),
new MenuItem("home","allreport"),
new MenuItem("contacts","usermgtadd"),
new MenuItem("home","login"),

*/
    ];
  }

  showDropdown() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  dateChanged(date) {
    // alert(`Selected: ${date}`);
    this.model.date = date;
  }
}
