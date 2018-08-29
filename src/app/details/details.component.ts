import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DataService } from './../data.service';

@Component({
  selector: "app-details",
  templateUrl: "./details.component.html",
  styleUrls: ["./details.component.css"]
})
export class DetailsComponent implements OnInit {
  user: Object;
  constructor(
    private aRoute: ActivatedRoute,
    private dataService: DataService
  ) {
    this.aRoute.params.subscribe(params => {
      this.user = params.id;
    });
  }

  ngOnInit() {
    this.dataService.getUser(this.user).subscribe(data => {
      this.user = data;
    });
  }
}
