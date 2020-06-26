import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-employee-card",
  templateUrl: "./employee-card.component.html",
  styleUrls: ["./employee-card.component.scss"]
})
export class EmployeeCardComponent implements OnInit {
  @Input() employee: any;
  @Input() rowClass: string;

  constructor() {}

  ngOnInit() {}
}
