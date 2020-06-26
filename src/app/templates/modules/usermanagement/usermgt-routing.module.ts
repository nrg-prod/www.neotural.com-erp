import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router"; 

// Components
import { UserManagementComponent } from "./components/usermgt/usermgt.component";
import { AddUserMgtComponent } from "./components/addusermgt/addusermgt.component";


const routes: Routes = [
  {
      path: '',
      component: UserManagementComponent,
      pathMatch: 'full'
  },
  {
    path: 'user-management',
    component: UserManagementComponent,
  },
  {
    path: 'addusermgt',
    component: AddUserMgtComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserMgtRoutingModule {}
