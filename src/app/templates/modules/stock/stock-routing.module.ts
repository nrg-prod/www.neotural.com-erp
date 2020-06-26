import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router"; 

// Components
import { StockComponent } from "./components/stock/stock.component";

const routes: Routes = [
  {
      path: '',
      component: StockComponent,
      pathMatch: 'full'
  },
  {
    path: 'stock',
    component: StockComponent,
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StockRoutingModule {}
