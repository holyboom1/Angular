import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor(private http: HttpClient) { }

  getData(url, headers ) : Observable<any>{
    return this.http.get(url, {headers : headers})
  }

  postData(url,body, headers) : Observable<any>{
    return this.http.post(url, body ,{headers : headers})
  }

  putData(url,body, headers , idItem){
    let  fineURL = url + "/" + idItem
    return this.http.put(fineURL, body ,{headers : headers})
  }

  deleteData(url, headers , idItem){
    let  fineURL = url + "/" + idItem
    return this.http.delete(fineURL,{headers : headers})
  }

  getDataPost(id) : Observable<any>{
   let  url  = `https://testitschool-c0b7.restdb.io/rest/instagramm/${id}`
    let headers =  {
    "content-type": "application/json",
    "x-apikey": "5fadbc0e8639597288385325",
    "cache-control": "no-cache"}
    return this.http.get(url, {headers : headers})
  }

  getComments(parentID :string ){
    let url = `https://testitschool-c0b7.restdb.io/rest/instagramm/${parentID}/comments`
    let headers = {
        "content-type": "application/json",
        "x-apikey": "5fadbc0e8639597288385325",
        "cache-control": "no-cache"}

    return this.http.get(url, {headers : headers})
  }

  postComment(parentID :string , comment : object){
    let url = `https://testitschool-c0b7.restdb.io/rest/instagramm/${parentID}/comments`
    let headers = {
      "content-type": "application/json",
      "x-apikey": "5fadbc0e8639597288385325",
      "cache-control": "no-cache"}
    return this.http.post(url, comment, {headers : headers})}

  //
  // editComment(parentID :string , commentID :string , comment : object){
  //   this.dataService.postData(`https://testitschool-c0b7.restdb.io/rest/instagramm/${parentID}/comments/${commentID}` ,
  //     comment
  //     ,
  //     {
  //       "content-type": "application/json",
  //       "x-apikey": "5fadbc0e8639597288385325",
  //       "cache-control": "no-cache"}
  //   )
  //
  //     .subscribe(
  //       response => console.log(response),
  //       error => console.error(error)
  //     )
  // }

  UsersData() : Observable<any>{
    //регистрацию и логин делаю так тк нету возможности настроить бэк
    let  url  = `https://testitschool-c0b7.restdb.io/rest/usersofinstagramm`
    let headers =  {
      "content-type": "application/json",
      "x-apikey": "5fadbc0e8639597288385325",
      "cache-control": "no-cache"}
    return this.http.get(url, {headers : headers},)
  }

  postUserData(body) : Observable<any>{
    let  url  = `https://testitschool-c0b7.restdb.io/rest/usersofinstagramm`
    let headers =  {
      "content-type": "application/json",
      "x-apikey": "5fadbc0e8639597288385325",
      "cache-control": "no-cache"}
    return this.http.post(url, body ,{headers : headers})
  }

}
//
// "https://testitschool-c0b7.restdb.io/rest/instagramm" ,
//   {
//     "content-type": "application/json",
//     "x-apikey": "5fadbc0e8639597288385325",
//     "cache-control": "no-cache"}
