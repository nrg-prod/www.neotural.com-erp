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

import { EmployeeRoutingModule } from "./employee-routing.module";
import { DataTablesModule } from "angular-datatables";
import { CoreModule } from "src/app/core/core.module";

// Services
import { EmployeeService } from "./services/employee.service";

// Components
import { EmployeeComponent } from "./components/employee/employee.component";
import { EmployeeListComponent } from "./components/employee-list/employee-list.component";
import { EmployeeDetailComponent } from "./components/employee-detail/employee-detail.component";
import { EmployeeAddComponent } from "./components/employee-add/employee-add.component";
import { EmployeeAbsenceComponent } from "./components/employee-absence/employee-absence.component";
import { EmployeeContractTemplateComponent } from "./components/employee-contract-template/employee-contract-template.component";
import { EmployeeReportComponent } from "./components/employee-report/employee-report.component";
import { CustomMaterialModule } from "src/app/core/material.module";
import { FormsModule } from "@angular/forms";
import { EmployeeCardComponent } from "./components/employee-card/employee-card.component";
import { EmployeeAbsentCardComponent } from "./components/employee-absent-card/employee-absent-card.component";
import { EmployeeChecinCheckoutComponent } from "./components/employee-checkin-checkout/employee-checkin-checkout.component";

@NgModule({
  declarations: [
    EmployeeComponent,
    EmployeeListComponent,
    EmployeeAddComponent,
    EmployeeAbsenceComponent,
    EmployeeContractTemplateComponent,
    EmployeeReportComponent,
    EmployeeDetailComponent,
    EmployeeCardComponent,
    EmployeeAbsentCardComponent,
    EmployeeChecinCheckoutComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    EmployeeRoutingModule,
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
    DataTablesModule.forRoot()
  ],
  entryComponents: [EmployeeReportComponent, 
                    EmployeeAbsenceComponent, 
                    EmployeeChecinCheckoutComponent,
                    EmployeeDetailComponent],
  providers: [EmployeeService]
})
export class EmployeeModule {}
