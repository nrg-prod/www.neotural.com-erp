import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-data-widget",
  templateUrl: "./data-widget.component.html",
  styleUrls: ["./data-widget.component.scss"]
})
export class DataWidgetComponent implements OnInit {
  @Input() title: string;
  constructor() {}

  ngOnInit() {}
}
