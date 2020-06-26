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

import { StockRoutingModule } from "./stock-routing.module";
import { DataTablesModule } from "angular-datatables";
import { CoreModule } from "src/app/core/core.module";

// Services
import { StockService } from "./services/stock.service";

// Components
import { StockComponent } from "./components/stock/stock.component";
import { StockListComponent } from "./components/stock-list/stock-list.component";
import { CustomMaterialModule } from "src/app/core/material.module";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    StockComponent,
    StockListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    StockRoutingModule,
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
  providers: [StockService]
})
export class StockModule {}
