import { Component, OnInit } from "@angular/core";
import { InteractionService } from './../../common/_services/interaction.service';
import { MenuItem } from "./sidebar-nav.model";
import { SidenavItems } from "src/app/core/common/config/sidenav.config";
import { Location } from "@angular/common";
import { Router, NavigationEnd } from "@angular/router";

@Component({
  selector: "app-sidebar-nav",
  templateUrl: "./sidebar-nav.component.html",
  styleUrls: ["./sidebar-nav.component.scss"]
})
export class SidebarNavComponent implements OnInit {
  
  menuItems: MenuItem[];
  isExpanded: boolean;
  currentPath: string;
  assignPath: string;
  showChildNum:number = NaN;

  constructor(
      private interactionService:InteractionService, 
      location: Location, router: Router) {

    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.currentPath = location.path();
        const splitPath = this.currentPath.split('/');
        this.assignPath = splitPath[0]+'/'+splitPath[1];
       }
    });
  }

  ngOnInit() {
    this.menuItems = SidenavItems;
    this.interactionService.viewSideNaviSource.subscribe(value => {
      this.isExpanded = value;

      this.menuItems.map((item, index) => {
        if(item.path == this.assignPath) {
          this.shuffleOverrideLinks(index);
        }
      })
    });
  }
  //added to toggle sidenavi

  shuffleChildLinks(num){
    this.showChildNum = this.showChildNum !== num ? this.showChildNum = num : -1;
  }

  shuffleOverrideLinks(num) {
    setTimeout(() => {
      this.showChildNum = num;
    })
  }
}
