import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PurchaseComponent } from './components/purchase/purchase.component';
import { PurchaseInvoiceComponent } from './components/purchase-invoice/purchase-invoice.component';
import { PurchaseReturnComponent } from './components/purchase-return/purchase-return.component';

const routes: Routes = [
  {
      path: '',
      component: PurchaseComponent,
      pathMatch: 'full'
  },
  {
    path: 'invoice',
    component: PurchaseInvoiceComponent
  },
  {
    path: 'return',
    component: PurchaseReturnComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PurchaseRoutingModule {}
