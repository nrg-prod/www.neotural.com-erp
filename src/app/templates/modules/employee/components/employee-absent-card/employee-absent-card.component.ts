import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-employee-absent-card",
  templateUrl: "./employee-absent-card.component.html",
  styleUrls: ["./employee-absent-card.component.scss"]
})
export class EmployeeAbsentCardComponent implements OnInit {
  @Input() absentCardDetail;

  constructor() {}

  ngOnInit() {}
}
