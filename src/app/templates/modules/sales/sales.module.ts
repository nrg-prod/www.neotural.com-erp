import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CustomMaterialModule } from "src/app/core/material.module";
import { CoreModule } from "../../../core/core.module";
import { SalesRoutingModule } from "./sales-routing.module";
import { SalesComponent } from "./components/sales/sales.component";
import { SalesorderComponent } from "./components/salesorder/salesorder.component";

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
import { Ng2CompleterModule } from "ng2-completer";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { PurchaseService } from "../purchase/services/purchase.service";
import { SalesService } from "./services/sales.service";
import {
  SalesinvoiceComponent  
} from "./components/salesinvoice/salesinvoice.component";
import { SalesreturnComponent } from "./components/salesreturn/salesreturn.component";
import { SalesreportComponent } from "./components/salesreport/salesreport.component";
import { SalesListComponent } from "./components/sales-list/sales-list.component";
import { SalesCreateInvoiceComponent } from './components/sales-create-invoice/sales-create-invoice.component';
import { SalesCreateReturnComponent } from './components/sales-create-return/sales-create-return.component';

@NgModule({
  declarations: [
    SalesComponent,
    SalesorderComponent,
    SalesinvoiceComponent,
    SalesreturnComponent,
    SalesreportComponent,
    SalesListComponent,
    SalesCreateInvoiceComponent,
    SalesCreateReturnComponent
  ],
  imports: [
    CommonModule,
    SalesRoutingModule,
    CoreModule,
    CustomMaterialModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatRippleModule,
    MatTableModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
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
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    MatPaginatorModule,
    Ng2CompleterModule
  ],
  providers: [SalesService, PurchaseService],
  entryComponents: [SalesorderComponent,
    SalesCreateInvoiceComponent,SalesCreateReturnComponent]
})
export class SalesModule {}
