import { Component, OnInit, OnDestroy, ViewChild ,ElementRef,Inject} from '@angular/core';
import { MatExpansionPanel, MatSnackBar, Sort } from "@angular/material";
import { PurchaseService } from '../../services/purchase.service';

@Component({
  selector: 'app-purchase-invoice',
  templateUrl: './purchase-invoice.component.html',
  styleUrls: ['./purchase-invoice.component.scss']
})
export class PurchaseInvoiceComponent implements OnInit, OnDestroy {
  
  model:any = {};
  invoiceList: any;
  public invTale = false;
  isCheckedArr = [];
  invArr = [];
  isShowEditDelete = [];
  isAddStock: boolean = false;
  constructor(
    private purchaseservice: PurchaseService,
    private snackBar: MatSnackBar
  ) { 
       
  }
  

  ngOnInit() { 
      this.getInvoiceLists();
     // this.removeScrollBar();
  }

  ngOnDestroy() {
    (<HTMLElement>(
      document.querySelector(".mat-drawer-content")
    )).style.overflow = "auto";
  }
 /* removeScrollBar() {
    setTimeout(function () {
      (<HTMLElement>(
        document.querySelector(".mat-drawer-content")
      )).style.overflow = "inherit";
    }, 300);
  } */
  getInvoiceLists() {
    this.purchaseservice.load().subscribe(res => { 
      this.invoiceList = res;
      if(this.invoiceList.length == 0 ){
        this.invTale = false;
      }else{
        this.invTale = true;
      }
    },
    error => {
      setTimeout(() => {
        this.snackBar.open("Network error: server is temporarily unavailable", "dismss", {
          panelClass: ["error"],
          verticalPosition: 'top'      
        });
      });   
    }
  );
  }

  generatePdf(data: any){
    if (data === null) {
      setTimeout(() => {
        this.snackBar.open("PDF data is empty", "dismss", {
          panelClass: ["error"],
          verticalPosition: 'top'      
        });
      });
    } else {  
      const width = 800;
      const height = 370;
      var left = (screen.width/2)-(width/2);
      var top = (screen.height/2)-(height/2);
      const win = window.open("","", 'toolbar=0, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width='+width+', height='+height+', top='+top+', left='+left);

      //const win = window.open("","", 'width='+width+', height='+height+', top='+top+', left='+left);
      let html = '';

      html += '<html>';
      html += '<body style="margin:0!important">';
      html += '<embed width="100%" height="100%" src="data:application/pdf;base64,'+data+'" type="application/pdf" />';
      html += '</body>';
      html += '</html>';

      setTimeout(() => {
        win.document.write(html);
      }, 0);
    }
  }

  getaddStockStyle() {
    if (!this.isAddStock) {
      let myStyles = {
        color: "gray",
        background: "#1A2D39",
        border: "1px solid #1A2D39",
        display: "none",
      };
      return myStyles;
    }
  }

  rowSelected(index: number, item: any, isChecked: boolean) {
    
    if (isChecked) {
      item.indexVal = index;
      this.invArr.push(item);
      this.isCheckedArr.push({ checked: true, indexVal: index });
      this.isShowEditDelete[index] = false;
    } else {
      this.removeItem(this.isCheckedArr, index, "checked");
      this.removeItem(this.invArr, index, "product");
    }

    if (this.invArr.length > 0) {
      this.invArr.forEach((item, index) => {
        if (this.invArr.length > 1) {
          this.isAddStock = false;
          this.getErrorMsg(false);
        } else {
          if (this.isCheckedArr[0].checked) {
            this.isAddStock = true;
          } else{
            this.isAddStock = false;
          }
        }
      });
    } else {
      this.isAddStock = false;
    }
  }

  removeItem(isCheckedArr: any, index: number, type: string) {
    isCheckedArr.forEach((item, indexCheck) => {
      if (item.indexVal === index) {
        isCheckedArr.splice(indexCheck, 1);
      }
    });

    if (type === "checked") {
      this.isCheckedArr = isCheckedArr;
    } else if (type === "product") {
      this.invArr = isCheckedArr;
    }
  }

  getErrorMsg(isErrMsg: boolean) {
    if (isErrMsg) {
      setTimeout(() => {
        this.snackBar.open("Select only one Invoice", "dismss", {
          panelClass: ["warn"],
          verticalPosition: "top",
        });
      });
    } else {
      return "";
    }
  }

  addStock(){
    this.model.invoiceNumber = this.invArr[0].invoicenumber;
    this.purchaseservice.createStock(this.model.invoiceNumber).subscribe(
      (respose) => {
          setTimeout(() => {
            this.snackBar.open(
              "Stock was added Successfully",
              "dismss",
              {
                panelClass: ["success"],
                verticalPosition: "top",
              }
            );

          });

          this.getInvoiceLists();
      },
      (error) => {
        setTimeout(() => {
          this.snackBar.open(
            "Network error: server is temporarily unavailable",
            "dismss",
            {
              panelClass: ["error"],
              verticalPosition: "top",
            }
          );
        });
      }
    );
  }

}
