import {Component, Input, OnInit, Output} from '@angular/core';
import {LSService} from "./services/l-s.service";
import {DataServiceService} from "./services/data-service.service";
import {Observable, pipe, Subscription} from "rxjs";
import {filter, map, toArray} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})


export class AppComponent implements OnInit{


  constructor(private dataService:DataServiceService) {
  }

  posts : object = [];

  getDataFromServer():void {
    let data;
     this.dataService.getData("https://picsum.photos/v2/list")
       .pipe(
         margemap
         map 
    toArray

       )
       .subscribe(
        response => console.log(response)
    )


  }

  ngOnInit() : void {
      this.getDataFromServer()
  }

  // posts = [
  //   {
  //     author: "name1",
  //     gender: "mr",
  //     img: "https://picsum.photos/300/200?random=1",
  //     likes: 1232,
  //     comments: [{name: "seqwe", comment: "asdasdad"},
  //                 {name: "seqwe", comment: "asdasdad"},
  //                 {name: "seqwe", comment: "asdasdad"},
  //                 {name: "seqwe", comment: "asdasdad"}]
  //   },
  //   {
  //     author: "name2",
  //     gender: "mr",
  //     img: "https://picsum.photos/300/200?random=2",
  //     likes: 1232,
  //     comments: [{name: "seqwe", comment: "asdasdad"},
  //       {name: "seqwe", comment: "asdasdad"},
  //       {name: "seqwe", comment: "asdasdad"},
  //       {name: "seqwe", comment: "asdasdad"}]
  //   },
  //   {
  //     author: "name3",
  //     gender: "ms",
  //     img: "https://picsum.photos/300/200?random=3",
  //     likes: 1232,
  //     comments: [{name: "seqwe", comment: "asdasdad"},
  //       {name: "seqwe", comment: "asdasdad"},
  //       {name: "seqwe", comment: "asdasdad"},
  //       {name: "seqwe", comment: "asdasdad"}]
  //   },
  // ]

  // tostr() {
  //   let i = 0;
  //   for (let item of this.posts ) {
  //
  //     Object.entries(item).forEach((item)=>{
  //     let comments : string = "";
  //     // isArray(item[1])
  //     //   ?
  //     //   console.log(item[1].forEach((item)=>{console.log(item)}))
  //     //   :
  //     //     localStorage.setItem((`id*${i}--`+item[0]),item[1])
  //     }
  //     )
  //     i++
  //     }
  //
  //
  // }

}
