import { Component, OnInit, HostListener } from '@angular/core';
import { InteractionService } from './../../common/_services/interaction.service';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../common/_services';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  label1:string;
  label2:string;
  label3:string;
  label4:string;
  label5:string;
  label6:string;


  constructor(private authenticationService:AuthenticationService,private router: Router,private interactionService: InteractionService) { }

  ngOnInit() { }

  lang(lang:string) {
    console.log("Lang-->"+lang);
    if(lang == 'english') {
      this.label1 = "Employee";
    }
    if(lang == 'malay') {
      this.label1 = "Pekerja";
    }
    if(lang == 'indo') {
      this.label1 = "Nama pengguna";
    }

  }
  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }

}
