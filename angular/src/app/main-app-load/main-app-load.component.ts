import { Component, OnInit } from '@angular/core';
import {DataServiceService} from "../services/data-service.service";
import {LSService} from "../services/l-s.service";
import {mergeMap, toArray} from "rxjs/operators";

@Component({
  selector: 'app-main-app-load',
  templateUrl: './main-app-load.component.html',
  styleUrls: ['./main-app-load.component.css']
})
export class MainAppLoadComponent implements OnInit {


  constructor(private dataService:DataServiceService,
              private ls : LSService) {
  }

  posts : Array<object>

  getDataFromServer() : void {
    this.dataService.getData("https://testitschool-c0b7.restdb.io/rest/instagramm",
      {
              "content-type": "application/json",
              "x-apikey": "5fadbc0e8639597288385325",
              "cache-control": "no-cache"})

      .subscribe(
        response => this.posts = response,
        error => console.error(error)
      )

  }
  ngOnInit()  {
    this.getDataFromServer();

  }





}
