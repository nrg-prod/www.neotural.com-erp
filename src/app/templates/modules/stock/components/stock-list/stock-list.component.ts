import {
  Component,
  OnInit,
  ViewChild,
  Input,
} from "@angular/core";

import { MatSnackBar } from "@angular/material/snack-bar";
import { StockService } from "../../services/stock.service";
import { Stock } from "src/app/core/common/_models/stock";
import { PrintDialogService } from "src/app/core/services/print-dialog/print-dialog.service";
import {MatDialog, MatDialogConfig, MatPaginator, MatSort, MatTableDataSource} from "@angular/material";
import { Router, ActivatedRoute, UrlSegment } from '@angular/router';

@Component({
  selector: "app-stock-list",
  templateUrl: "./stock-list.component.html",
  styleUrls: ["./stock-list.component.scss"]
})
export class StockListComponent implements OnInit {
	constructor(private router: Router,
		private dialog: MatDialog,
		private stockService: StockService,
		private snackBar: MatSnackBar
	) { 
		
	}

	stockList:any = {};
	stockEditList:any = {};
	model:any = {};
	stock:Stock = new Stock();
	public stockTable = false;
	loadinggif:boolean = false;

	ngOnInit() {
		this.loadStock();
	}

	loadStock(){
		let status = "Ready for Sales";
		this.loadinggif=true;
		this.stockService.load(status)
			.subscribe(
			data => {
				this.stockList = data;
				this.loadinggif=false;
				if(this.stockList.length == 0){
					this.stockTable = false;
				}else{
					for (var i = 0; i < this.stockList.length; i++) {
						this.stockList[i].editable = false; 
					}
					this.stockTable = true;
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

	editStock(c: any){
		c.editable = !c.editable;
	}

	cancelStock(c:any){
		c.editable = false;
	}

	updateStock(id:string,recentStock:number){
		this.model.id = id;
		this.model.recentStock = recentStock;
		this.stockService.updateStock(this.model)
		.subscribe(
			data => {
				this.stock =  data; 
				setTimeout(() => {
					this.snackBar.open("Stock Updated Successfully", "", {
						panelClass: ["success"],
						verticalPosition: 'top'      
					});
				});
				this.loadStock();
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
}
