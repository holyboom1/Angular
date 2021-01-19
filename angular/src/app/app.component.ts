import {Component, Input, OnInit, Output} from '@angular/core';
import {DataServiceService} from "./services/data-service.service";
import {from, Observable, pipe, Subscription} from "rxjs";
import {filter, map, mergeMap, toArray} from 'rxjs/operators';
import {LSService} from "./services/l-s.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})


export class AppComponent implements OnInit{


  constructor(private dataService:DataServiceService,
              private ls : LSService) {
  }

  posts : Array<object>

  getDataFromServer() : void {
    this.dataService.getData("https://picsum.photos/v2/list")
      .pipe(
        mergeMap((item) => {

          function randomInteger(min, max) {
            let rand = min + Math.random() * (max + 1 - min);
            return Math.floor(rand);
          }
          function makeid(length) {
            var result           = '';
            var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for ( var i = 0; i < length; i++ ) {
              result += characters.charAt(Math.floor(Math.random() * charactersLength));
            }
            return result;
          }

          let addetI = [];
          for (let i = 0; i < 10; i++) {
            let x;
            x = randomInteger(0, item.length - 1)

            if (addetI.includes(x)) {
              x = randomInteger(0, item.length - 1)
              addetI.push(x)
            } else {
              addetI.push(x)
            }

          }
          let filtredData = [];
          for (let i = 0; i < addetI.length; i++) {
            filtredData.push(item[addetI[i]])
          }
          filtredData.forEach((item)=>{
                                        item.likes = randomInteger(0,999);
                                          item.comments = []
                                          let x = randomInteger(1, 10)
                                          for (let i=0 ; i<x; i++ ){
                                            let nam = makeid(randomInteger(3,10)),
                                                 com = makeid(randomInteger(3,10))
                                            item.comments.push({name: nam, comment: com})
                                          }
                                        randomInteger(0,1) ? item.gender = "mr" : item.gender = "ms"
                                      })
          return filtredData
        }),
        toArray()
      )
      .subscribe(
        response => this.ls.setData(response),
        error => console.error(error)
      )

  }
  async ngOnInit()  {
      await this.getDataFromServer();
      await this.FR()
  }

  FR () {
    this.posts = this.ls.getData()
  }
}
