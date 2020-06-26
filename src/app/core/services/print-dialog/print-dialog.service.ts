import { Injectable, TemplateRef } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";

@Injectable({
  providedIn: "root"
})
export class PrintDialogService {
  constructor(public dialog: MatDialog) {}

  openDialog(template: TemplateRef<any>) {
    const dialogConfig = {
     // hasBackdrop: false,
      panelClass: "print-dialog"
    };
    const dialogRef = this.dialog.open(template, dialogConfig);

    setTimeout(() => {
      window.print();
    }, 100);

    window.addEventListener("afterprint", () => {
      dialogRef.close();
    });
  }
}
