import { Component, OnInit, HostListener } from '@angular/core';
import { InteractionService } from './../../common/_services/interaction.service';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../common/_services';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  searchText:string;
  showMenu = false;

  @HostListener('document:click', ['$event']) closeNaviOnOutClick(event) {

    this.optionListToggle(false);
    
    if (event.target && event.target.classList.contains('header-menu')){
      return;
    }
    if (event.target && event.target.classList.contains('navi-link-deduct')) {
      return;
    }
    if (event.target && event.target.classList.contains('child-shuffle')) {
      return;
    }
    
    this.interactionService.toggleSideNavi(false);
  }
  
  constructor(private authenticationService:AuthenticationService,private router: Router,private interactionService: InteractionService) { }

  ngOnInit() { }

  toggleSideNavi() {
    this.interactionService.toggleSideNavi();
  }

  optionListToggle(value) {
    this.showMenu = value;
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }

}
