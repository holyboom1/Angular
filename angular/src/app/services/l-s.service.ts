import { Injectable } from '@angular/core';
import {combineAll} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})

export class LSService {


  constructor() { }


  setData = (data: Array<object>) => {
    let id = 0;
    for (let item of data){
     let i : any = item
      localStorage.setItem(`id*${id}*-author`, i.author);
      localStorage.setItem(`id*${id}*-gender`, i.gender);
      localStorage.setItem(`id*${id}*-download_url`, i.download_url);
      localStorage.setItem(`id*${id}*-likes`, i.likes);
      let comments : string = "";
      for (let com of i.comments){
       comments+= `${com.name}`+`&${com.comment}*`
      }
      localStorage.setItem(`id*${id}*-comments`, comments);
      localStorage.setItem(`dataLength`, ``)
      id++
  }
    localStorage.setItem(`dataLength`, `${id}`)
}


  getData (){
    let data : Array<any> = [];
    let length : number  = +localStorage.getItem(`dataLength`)
    for (let i = 0 ; i<length; i++){
      let comData = localStorage.getItem(`id*${i}*-comments`).split("*")
      let comments = []
        for ( let com of comData) {

          let part = com.split("&")
          part[0]!="" ?
          comments.push({name: part[0], comment: part[1]}) : null
        }
      data[i] = {
        author : localStorage.getItem(`id*${i}*-author`),
        gender : localStorage.getItem(`id*${i}*-gender`),
        download_url : localStorage.getItem(`id*${i}*-download_url`),
        likes : localStorage.getItem(`id*${i}*-likes`),
        comments : comments,
        id: i
      }
    }
    return data;
  }

  getDataID (id){
    let data : object;
      let comData = localStorage.getItem(`id*${id}*-comments`).split("*")
      let comments = []
      for ( let com of comData) {
        let part = com.split("&")
        part[0]!="" ?
          comments.push({name: part[0], comment: part[1]}) : null
      }
      data = {
        author : localStorage.getItem(`id*${id}*-author`),
        gender : localStorage.getItem(`id*${id}*-gender`),
        download_url : localStorage.getItem(`id*${id}*-download_url`),
        likes : localStorage.getItem(`id*${id}*-likes`),
        comments : comments,
        id: id
      }

    return data;
  }


}
