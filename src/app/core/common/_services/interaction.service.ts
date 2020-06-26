import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InteractionService {

  currentView:boolean = false;
  viewSideNaviSource = new BehaviorSubject(this.currentView);

  constructor() { }

  toggleSideNavi(value?) {
    this.currentView = value === false ? value : !this.currentView
    this.viewSideNaviSource.next(this.currentView);
  }


}
