import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-allreport',
  templateUrl: './allreport.component.html',
  styleUrls: ['./allreport.component.css']
})
export class AllreportComponent implements OnInit {

  constructor(
    private router : Router
  ) { }

  ngOnInit() {
  }
}
