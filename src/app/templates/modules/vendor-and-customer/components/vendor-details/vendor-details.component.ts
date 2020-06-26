import { Component, Inject, ElementRef, OnInit, HostListener, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA  } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { MatSnackBar } from "@angular/material/snack-bar";


import { VendorDetailsService } from './../../services/vendorDetails.service';
import { Vendor } from 'src/app/core/common/_models';

@Component({
  selector: 'app-vendor-details',
  templateUrl: './vendor-details.component.html',
  styleUrls: ['./vendor-details.component.scss']
})
export class VendorDetailsComponent implements OnInit {

  @ViewChild('dropDwn', {static:true}) dropDwn:ElementRef;

  allCategoryItems = [];
  backAllCategoryItems = [];
  filteredItems = [];
  categoriesForFilter:any = [];
  selectedCategoryInFilter:any;
  dropDownView = false;
  selectedCategory = "All Category";
  editIndex = -1;
  onEdit = -1;
  isLabelEdited = false;
  labelNewText="";
  isAddCategory = false;
  newCateogry = "";
  vendor:Vendor = new Vendor;

  @HostListener('document:click', ['$event']) closeNaviOnOutClick(event) {

    const parent = this.dropDwn.nativeElement;

    if(parent.contains(event.target)){
      return;
    }

    if(this.dropDownView) {
      this.dropDownView = false;
      this.isAddCategory = false;
    }
    return;
  }

  constructor(
    private dialogRef: MatDialogRef<VendorDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    private _sanitizer: DomSanitizer,
    private vendorDetailsService:VendorDetailsService,
    private snackBar: MatSnackBar

    ) { }

  ngOnInit() {
    console.log("Data e-->"+this.data);
    console.log("Vendor code-->"+this.data['vendorcode']);
     this.vendorDetailsService.loadsidepanel(this.data.vendorcode).subscribe(data => {
       console.log(data);
       this.data.editable = false;
     })
    let id = this.data['vendorcode'];
    this.vendorDetailsService.loadallcategoryitems(id).subscribe((data:any) => {
        if(!data.length) return;
        this.backAllCategoryItems = data;
        this.filterItems({ categorycode:null});
    })

    this.getCategoryItems();

  }
  
  getCategoryItems() {
    this.vendorDetailsService.loadallcategories().subscribe((data: any) => {
      this.categoriesForFilter = data;
    });
  }


  searchItems(event) {

    const searchPhrase = String(event.target.value).trim().toLocaleLowerCase();
    const itemsToSearch = this.filteredItems || [];

    const searchResult = itemsToSearch.filter((item) => {
      return String(item.productname).trim().toLocaleLowerCase().includes(searchPhrase);
    });

    this.allCategoryItems = searchResult;
  }

  filterItems({ categorycode }) {

    if(!categorycode){
      this.allCategoryItems = this.backAllCategoryItems;
      this.filteredItems = this.backAllCategoryItems;
      return;
    }
    this.allCategoryItems = this.backAllCategoryItems.filter((item) => item.categorycode === categorycode);
    this.filteredItems = this.allCategoryItems;
  }

  vendorDetailsClose(): void {
    this.dialogRef.close();
  }

  categoyDropDownHandler():void {
    this.dropDownView = !this.dropDownView;
    this.editMenu(-1);
    this.isLabelEdited = false;
  }

  selectCategory(item):void {
    this.dropDownView = false;
    this.selectedCategory = item.name;
    this.filterItems(item);
  }

  showEditMenu(index){
    this.editIndex = index;
  }

  editMenu(i){
    this.onEdit = i;
    this.dropDownView = true;
    this.isAddCategory = false;
    this.newCateogry = "";
  }

  menuLabelChange(event){

    if (!event.target.value.trim()) {
      this.isLabelEdited = false;
      this.labelNewText = "";
      return;
    }
    this.isLabelEdited = true;
    this.labelNewText = event.target.value;
    
  }

  updateMenu(category){
    const newCategory = {
      "categorycode": category.categorycode,
      "name": this.labelNewText,
    }
    this.categoyDropDownEditor(newCategory);
    this.dropDownView = false;
  }

  showAddCategory() {
    this.isAddCategory = true;
    this.editIndex = -1;
    this.onEdit = -1;
  }

  addCategory() {

    if (!this.newCateogry.trim().length) return;
    
    const newCategory = {
      "name": this.newCateogry
    }

    this.categoyDropDownEditor(newCategory);
    
  }

  getImage(imgData) {
    if (Array.isArray(imgData)){
      return this._sanitizer.bypassSecurityTrustResourceUrl(imgData[0]);
    }    
  }

  categoyDropDownEditor(newCategory){
    this.vendorDetailsService.postnewcategories(newCategory)
      .subscribe((respose) => {
        if (respose === null) {

          this.getCategoryItems();
          this.newCateogry = "";
          this.dropDownView = false;
          this.isAddCategory = false;

          setTimeout(() => {
            this.snackBar.open(
              "Category added Successfully",
              "dismss",
              {
                panelClass: ["success"],
                verticalPosition: "top",
              }
            );

          });
        }
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
        })
  }

  editVendor(data: any){
    data.editable = !data.editable;
  }

  update(data: any){
    this.vendorDetailsService.updateVendor(data)
		.subscribe(
			data => {
				this.vendor =  data; 
				setTimeout(() => {
					this.snackBar.open("Vendor Updated Successfully", "", {
						panelClass: ["success"],
						verticalPosition: 'top'      
					});
				});
				this.ngOnInit();
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

  cancelVendor(data: any){
    data.editable = false;
  }

  deleteVendor(vendorcode:string) {
    this.vendorDetailsService.removeVendor(vendorcode)
    .subscribe(
      data => {
        setTimeout(() => {
          this.snackBar.open("Vendor Removed Successfully", "", {
            panelClass: ["success"],
            verticalPosition: 'top'      
          });
        });
        this.vendorDetailsClose();
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
