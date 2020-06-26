import { MatDialog  } from '@angular/material';
import { Router } from '@angular/router';
import { AuthenticationService } from './core/common/_services';
import { Idle, DEFAULT_INTERRUPTSOURCES } from '@ng-idle/core';
import { Keepalive } from '@ng-idle/keepalive';
import { Component, ViewChild, ViewContainerRef, TemplateRef, ElementRef, AfterViewInit } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ModalDirective } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  idleState = 'Not started.';
  timedOut = false;
  lastPing?: Date = null;
  public modalRef: BsModalRef;
  //@ViewChild('childModal', { static: false })  childModal: ModalDirective;
  @ViewChild('childModal', {static:false}) public childModal:ModalDirective;

  constructor(private router: Router,
    private authenticationService:AuthenticationService,
    private dialog: MatDialog,
    private viewContainerRef: ViewContainerRef,
    private idle: Idle, private keepalive: Keepalive) {
      console.log(authenticationService.getToken());
    if(authenticationService.getToken()!=null){
      this.router.navigate(['/']);

    } else {
      this.router.navigate(['/login']);

    }


// sets an idle timeout of 5 seconds, for testing purposes.
idle.setIdle(1800);
// sets a timeout period of 5 seconds. after 10 seconds of inactivity, the user will be considered timed out.
idle.setTimeout(5);
//idle.setTimeout(1800); // 30 mints
// sets the default interrupts, in this case, things like clicks, scrolls, touches to the document
idle.setInterrupts(DEFAULT_INTERRUPTSOURCES);

idle.onIdleEnd.subscribe(() => { 
  this.idleState = 'No longer idle.'
  console.log(this.idleState);
  this.reset();
});

idle.onTimeout.subscribe(() => {
  this.idleState = 'Timed out!';
  this.timedOut = true;
  console.log(this.idleState);
  //this.router.navigate(['/']);
});

idle.onIdleStart.subscribe(() => {
    this.idleState = 'You\'ve gone idle!'
    console.log(this.idleState);
    this.childModal.show();
});

idle.onTimeoutWarning.subscribe((countdown) => {
  this.idleState = 'You will time out in ' + countdown + ' seconds!'
  console.log(this.idleState);
});

// sets the ping interval to 15 seconds
keepalive.interval(15);

keepalive.onPing.subscribe(() => this.lastPing = new Date());

this.authenticationService.getUserLoggedIn().subscribe(userLoggedIn => {
  if (userLoggedIn) {
    idle.watch()
    this.timedOut = false;
  } else {
    idle.stop();
  }
})
}

reset() {
this.idle.watch();
this.idleState = 'Started.';
this.timedOut = false;
}

hideChildModal(): void {
  this.childModal.hide();
}

stay() {
  this.childModal.hide();
  this.reset();
}

logout() {
  if(this.dialog.open) {
    this.dialog.closeAll();
  }
  this.childModal.hide();
  this.authenticationService.logout();
  this.router.navigate(['/login']);
  }
}

