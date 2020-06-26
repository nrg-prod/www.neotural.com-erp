import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SalesComponent } from './components/sales/sales.component';
import { SalesinvoiceComponent } from './components/salesinvoice/salesinvoice.component';
import { SalesreturnComponent } from './components/salesreturn/salesreturn.component';

// const routes: Routes = [
//   { path: "", component: SalesComponent, pathMatch: "full" }
// ];
const routes: Routes = [
  {
      path: '',
      component: SalesComponent,
      pathMatch: 'full'
  },
  {
    path: 'invoice',
    component: SalesinvoiceComponent
  },
  {
    path: 'return',
    component: SalesreturnComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalesRoutingModule {}
