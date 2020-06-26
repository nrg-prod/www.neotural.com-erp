import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryItemComponent, AddpromotionComponent, DiscounteditComponent, DiscountdeleteComponent, CategoryeditdeleteComponent, AddnewcategoryComponent, AddnewproductComponent ,ProductviewComponent, ProducteditComponent, AllproducteditComponent, CategorytableComponent} from './categoryitem/categoryitem.component';
import { Routes, RouterModule } from '@angular/router';
import { MatDialogModule, MatDialog, MatFormFieldModule, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material';
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
} from '@angular/material';
import { CdkTableModule } from '@angular/cdk/table';
import { CdkTreeModule } from '@angular/cdk/tree';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FormsModule } from '@angular/forms';
import { Ng2CompleterModule } from 'ng2-completer';
import { VendorService } from '../vendor-and-customer/services/vendor.service';
import { CategoryproductService } from './services/categoryproduct.service';
import { CategoryProductRoutingModule } from "./categoryproduct-routing.module";
import { UnitsComponent } from './units/units.component';
import { AddunitsComponent } from './addunits/addunits.component';
import { CategoryComponent } from './category/category.component';

@NgModule({
  declarations: [AddnewcategoryComponent,CategoryItemComponent,CategoryeditdeleteComponent,AddpromotionComponent,DiscounteditComponent, DiscountdeleteComponent,AddnewproductComponent,ProductviewComponent,ProducteditComponent,AllproducteditComponent,CategorytableComponent, UnitsComponent, AddunitsComponent, CategoryComponent],
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
    //RouterModule.forChild(routes) ,
    Ng2CompleterModule,
    CategoryProductRoutingModule
  ],
  entryComponents: [AddnewcategoryComponent,AddpromotionComponent,DiscounteditComponent, CategoryeditdeleteComponent,DiscountdeleteComponent,AddnewproductComponent,ProductviewComponent,ProducteditComponent,AllproducteditComponent],
  providers: [CategoryproductService,VendorService]
})
export class CategoryproductModule { 
  constructor(private dialog: MatDialog) {}
}
 