import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CookieService {

  constructor() { }

   setCookie(name, val , expires) {
    document.cookie=`${name}=${val};max-age=${expires * 3600}`;
    return 'OK'
  }


   getCookie(name) {
  let x = document.cookie.split("; ")
  let val=null;
  x.forEach((item)=>{
    let res = item.split("=");
    if(res[0]==name) {
      val = res[1];
    }
  })

  return val;

  //return document.cookie.split("=")[1];
}

   deleteCookie(name) {
    document.cookie=`${name}='';max-age=0`;
  }

}
