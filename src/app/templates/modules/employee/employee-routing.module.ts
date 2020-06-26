import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router"; 

// Components
import { EmployeeComponent } from "./components/employee/employee.component";
import { EmployeeAddComponent } from "./components/employee-add/employee-add.component";
import { EmployeeDetailComponent } from "./components/employee-detail/employee-detail.component";

const routes: Routes = [
  {
      path: '',
      component: EmployeeComponent,
      pathMatch: 'full'
  },
  {
    path: 'addEmployee',
    component: EmployeeAddComponent
  },
  {
    path: 'viewEmployee/:id',
    component: EmployeeDetailComponent
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule {}
