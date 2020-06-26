import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AllreportComponent } from "./allreport/allreport.component";
import { Routes, RouterModule } from "@angular/router";
import { AllEmpReportComponent } from "./all-emp-report/all-emp-report.component";
import { AllPurchasereportComponent } from "./all-purchasereport/all-purchasereport.component";
import { AllSalesreportComponent } from "./all-salesreport/all-salesreport.component";
import { AllFinancereportComponent } from "./all-financereport/all-financereport.component";
import { AllStockreportComponent } from "./all-stockreport/all-stockreport.component";

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
  MatTreeModule,
  MatDialogModule,
  MatFormFieldModule
} from "@angular/material";
import { FormsModule } from "@angular/forms";
import { CdkTableModule } from "@angular/cdk/table";
import { CdkTreeModule } from "@angular/cdk/tree";
import { DragDropModule } from "@angular/cdk/drag-drop";
import { ReportService } from "./report.service";

const routes: Routes = [
  { path: "", component: AllreportComponent },
  { path: "allreport", component: AllreportComponent },
  { path: "all-emp-report", component: AllEmpReportComponent },
  { path: "all-purchasereport", component: AllPurchasereportComponent },
  { path: "all-salesreport", component: AllSalesreportComponent },
  { path: "all-financereport", component: AllFinancereportComponent },
  { path: "all-stockreport", component: AllStockreportComponent }
];

@NgModule({
  declarations: [
    AllreportComponent,
    AllEmpReportComponent,
    AllPurchasereportComponent,
    AllSalesreportComponent,
    AllFinancereportComponent,
    AllStockreportComponent
  ],
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    CdkTableModule,
    CdkTreeModule,
    DragDropModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
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
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    MatPaginatorModule,
    MatDialogModule,
    CommonModule,
    RouterModule.forChild(routes)
    // CommonModule,RouterModule.forChild(routes)
  ],
  providers: [ReportService]
})
export class ReportModule {}
