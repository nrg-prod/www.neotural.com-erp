import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

// Modules
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CustomMaterialModule } from "src/app/core/material.module";

// Components
import { HeaderComponent } from "./components/header/header.component";
import { UserAvatarComponent } from "./components/user-avatar/user-avatar.component";
import { SidebarNavComponent } from "./components/sidebar-nav/sidebar-nav.component";
import { PlaceholderComponent } from "./components/placeholder/placeholder.component";
import { HideInPrintDirective } from "./directives/hide-in-print/hide-in-print.directive";
import { IdFilterPipe } from "./pipes/id-filter.pipe";
import { CommonService } from "./common/_services/common.service";
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    UserAvatarComponent,
    SidebarNavComponent,
    PlaceholderComponent,
    HideInPrintDirective,
    IdFilterPipe
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    CustomMaterialModule
  ],
  exports: [
    HeaderComponent,
    SidebarNavComponent,
    FormsModule,
    HideInPrintDirective,
    IdFilterPipe
  ],
  providers: [CommonService]
})
export class CoreModule {}
