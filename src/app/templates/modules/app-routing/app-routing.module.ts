import { NgModule } from "@angular/core";
import { RouterModule, Routes, PreloadAllModules } from "@angular/router";

import { LandingpageComponent } from "../../landingpage/landingpage.component";
import { LoginComponent } from "../../login/login.component";

// Modules for lazyloading
import { PlaceholderComponent } from "../../../core/components/placeholder/placeholder.component";
import { EmployeeAddComponent } from "../employee/components/employee-add/employee-add.component";

const routes: Routes = [
  {
    path: "login",
    component: LoginComponent,
    data: { title: "Login Component" }
  },
  {
    path: "",
    component: PlaceholderComponent,
    children: [
      {
        path: "",
        pathMatch: "full",
        redirectTo:"dashboard"
      },
      {
        path:'dashboard',
        component: LandingpageComponent,
        data: { title: "Landing Component" }
      },
      {
        path: "employment",
        loadChildren: () =>
          import("../employee/employee.module").then(
            (m) => m.EmployeeModule)
      },
      {
        path: "vendor-and-customer",
        loadChildren: () =>
          import("./../../modules/vendor-and-customer/vendor-and-customer.module"
          ).then(
            (m) => m.VendorAndCustomerModule)
      },
      {
        path: "category-and-product",
        loadChildren: () =>
          import("./../../modules/categoryproduct/categoryproduct.module").then(
            (m) => m.CategoryproductModule
          )
      },
      {
        path: "purchase",
        loadChildren: () =>
          import("./../../modules/purchase/purchase.module").then(
            (m) => m.PurchaseModule
          )
      },
      {
        path: "sales",
        loadChildren: () =>
          import("./../../modules/sales/sales.module").then(
            (m) => m.SalesModule)
      },
      {
        path: "stock",
        loadChildren: () =>
          import("../stock/stock.module").then(
            (m) => m.StockModule)
      },
      {
        path: "finance",
        loadChildren: () =>
          import("./../../modules/finance/finance.module").then(
            (m) => m.FinanceModule)
      },
     
      {
        path: "report",
        loadChildren: () =>
          import("../../../shared/components/report/report.module").then(
            (m) => m.ReportModule)
      },
      {
        path: "user-management",
        loadChildren: () =>
          import("./../../modules/usermanagement/usermgt.module").then(
            (m) => m.UserMgtModule)
      }
    ]
  },
  { path: "**", redirectTo: "login" }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes, { 
      preloadingStrategy: PreloadAllModules, 
      onSameUrlNavigation: 'ignore'
    }
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
