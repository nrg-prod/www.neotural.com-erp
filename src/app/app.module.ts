import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
//import { ModalModule } from 'ngx-bootstrap/modal';
import { ModalModule } from "ngx-bootstrap";

// Custom Modules
import { AppRoutingModule } from "./templates/modules/app-routing/app-routing.module";
import { CoreModule } from "./core/core.module";
import { CustomMaterialModule } from "./core/material.module";

import { AppComponent } from "./app.component";

import { LoginComponent } from "./templates/login/login.component";
import { LandingpageComponent } from "./templates/landingpage/landingpage.component";
import {
  AlertService,
  AuthenticationService,
  UserService
} from "./core/common/_services/index";

import { DashboardWidgetComponent } from "./shared/components/dashboard-widget/dashboard-widget.component";
import { DataWidgetComponent } from "./shared/components/data-widget/data-widget.component";
import { NavigationComponent } from "./core/components/navigation/navigation.component";

import { NgIdleKeepaliveModule } from '@ng-idle/keepalive'; // this includes the core NgIdleModule but includes keepalive providers for easy wireup
import { MomentModule } from 'angular2-moment'; // optional, provides moment-style pipes for date formatting

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LandingpageComponent,
    NavigationComponent,
    DashboardWidgetComponent,
    DataWidgetComponent
  ],

  imports: [
    AppRoutingModule,
    CoreModule,
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    HttpClientModule,
    CustomMaterialModule,
    NgIdleKeepaliveModule.forRoot(),
    ModalModule.forRoot(),
    MomentModule,
  ],
  providers: [AlertService, AuthenticationService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule {}
