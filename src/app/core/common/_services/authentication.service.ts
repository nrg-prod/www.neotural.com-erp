import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { User, Common } from '../_models/index';
import { HttpRequest, HttpEvent} from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Subject } from 'rxjs';


@Injectable()
export class AuthenticationService {

  constructor(private http: HttpClient,private router: Router) {
    this.userLoggedIn.next(false);

  }

  getToken(): string {
    return sessionStorage.getItem('TOKEN_NAME');
  }

  setToken(token: string): void {
    sessionStorage.setItem('TOKEN_NAME', token);
  }

  login(uname: string, pwd: string) {
    localStorage.setItem("username", uname);
    localStorage.setItem("password", pwd);
    return this.http.get(`${environment.apiUrl}${"/auth/login?username=+uname+&password=pwd"}`);

  }
  private userLoggedIn = new Subject<boolean>();

  setUserLoggedIn(userLoggedIn: boolean) {
    this.userLoggedIn.next(userLoggedIn);
  }

  getUserLoggedIn(): Observable<boolean> {
    return this.userLoggedIn.asObservable();
  }
  logout() {   
      console.log("logout"); 
      this.setUserLoggedIn(false);
      localStorage.removeItem('username');
      localStorage.removeItem('password');
      sessionStorage.removeItem('TOKEN_NAME');
      this.router.navigate(['/login']);
  }
  
  }
  