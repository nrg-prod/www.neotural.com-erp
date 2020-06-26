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

import { FinanceRoutingModule } from "./finance-routing.module";
import { DataTablesModule } from "angular-datatables";
import { CoreModule } from "src/app/core/core.module";

// Services
import { FinanceService } from "./services/finance.service";

// Components
import { FinanceComponent } from "./components/finance/finance.component";
import { PettycashlistComponent } from "./components/pettycashlist/pettycashlist.component";
import { CustomMaterialModule } from "src/app/core/material.module";
import { AddPettycashComponent } from "./components/addpettycash/addpettycash.component";
import { ReturnListComponent } from "./components/return-list/return-list.component";
import { InvoiceListComponent } from "./components/invoice-list/invoice-list.component";
import { ProfitandLossComponent } from "./components/profitandloss/profitandloss.component";

import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    FinanceComponent,
    PettycashlistComponent,
    AddPettycashComponent,
    ReturnListComponent,
    InvoiceListComponent,
    ProfitandLossComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    FinanceRoutingModule,
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
  entryComponents: [ ],
  providers: [FinanceService]
})
export class FinanceModule {}
