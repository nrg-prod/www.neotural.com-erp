import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { VendorAndCustomerRoutingModule } from "./vendor-and-customer-routing.module";
import { VendorAndCustomerComponent } from "./components/vendor-and-customer/vendor-and-customer.component";
import { CustomMaterialModule } from "src/app/core/material.module";
import { VendorAndCustomerListComponent } from "./components/vendor-and-customer-list/vendor-and-customer-list.component";
import { VendorAndCustomerDetailComponent } from "./components/vendor-and-customer-detail/vendor-and-customer-detail.component";
import { CustomerComponent } from "./components/customer/customer.component";
import { CustomerAddComponent } from "./components/customer-add/customer-add.component";

import { CoreModule } from "../../../core/core.module";
import { CustomerService } from "./services/customer.service";
import { VendorService } from "./services/vendor.service";
import { VendorDetailsService } from "./services/vendorDetails.service";
import { MAT_TABS_CONFIG } from "@angular/material";
import { VendorDetailsComponent } from './components/vendor-details/vendor-details.component';

@NgModule({
  declarations: [
    VendorAndCustomerComponent,
    VendorAndCustomerListComponent,
    VendorAndCustomerDetailComponent,
    CustomerComponent,
    CustomerAddComponent,
    VendorDetailsComponent
  ],
  imports: [
    CommonModule,
    VendorAndCustomerRoutingModule,
    CoreModule,
    CustomMaterialModule
  ],
  providers: [
    CustomerService,
    VendorService,
    VendorDetailsService,
    { provide: MAT_TABS_CONFIG, useValue: { animationDuration: "0ms" } }
  ],
  entryComponents: [VendorDetailsComponent]
})
export class VendorAndCustomerModule {}
