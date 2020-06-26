import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

// Modules
import {
  MatAutocompleteModule,  
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule
} from "@angular/material";

import { UserMgtRoutingModule } from "./usermgt-routing.module";
import { DataTablesModule } from "angular-datatables";
import { CoreModule } from "src/app/core/core.module";

// Services
import { UserManagementService } from "./services/usermanagement.service";

// Components
import { UserManagementComponent } from "./components/usermgt/usermgt.component";
import { AddUserMgtComponent } from "./components/addusermgt/addusermgt.component";
import { CustomMaterialModule } from "src/app/core/material.module";
import { FormsModule } from "@angular/forms";

//import { MultiSelectComponent, MultiSelectModule } from '@syncfusion/ej2-angular-dropdowns';
//import { CheckBoxComponent, CheckBoxModule } from '@syncfusion/ej2-angular-buttons';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

@NgModule({
  declarations: [
    UserManagementComponent,
    AddUserMgtComponent,
    //MultiSelectComponent,
    //CheckBoxComponent,

  ],
  imports: [
    CommonModule,
    FormsModule,
    UserMgtRoutingModule,
    CustomMaterialModule,
    CoreModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    //MultiSelectModule,
    //CheckBoxModule,
    NgMultiSelectDropDownModule.forRoot(),
    DataTablesModule.forRoot()
  ],
  entryComponents: [ ],
  providers: [UserManagementService]
})
export class UserMgtModule {}
