import { NgModule } from "@angular/core";
import { MatMomentDateModule } from "@angular/material-moment-adapter";
import {
  MatSnackBarModule,
  MAT_SNACK_BAR_DEFAULT_OPTIONS
} from "@angular/material/snack-bar";

import {
  MatDatepickerModule,
  MatPaginatorModule,
  MatSidenavModule,
  MatTableModule,
  MatTabsModule,
  MatListModule,
  MatDialogModule
} from "@angular/material";

@NgModule({
  imports: [
    MatDatepickerModule,
    MatPaginatorModule,
    MatSidenavModule,
    MatTableModule,
    MatTabsModule,
    MatListModule,
    MatMomentDateModule,
    MatDialogModule,
    MatSnackBarModule
  ],
  exports: [
    MatDatepickerModule,
    MatPaginatorModule,
    MatSidenavModule,
    MatTableModule,
    MatTabsModule,
    MatListModule,
    MatMomentDateModule,
    MatDialogModule,
    MatSnackBarModule
  ],
  providers: [
    { provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: { duration: 1500 } }
  ]
})
export class CustomMaterialModule {}
