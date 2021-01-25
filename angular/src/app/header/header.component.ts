import {Component, OnInit, TemplateRef} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {DialogComponent} from "../dialog/dialog.component";
import {DataServiceService} from "../services/data-service.service";
import {CookieService} from "../services/cookie.service";
import {check} from "ngx-bootstrap-icons";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  login : number | null

  ngOnInit(): void {
    this.login = this.cookie.getCookie("login")
  }

  constructor(public dialog: MatDialog,
              private dataService : DataServiceService,
              private cookie : CookieService ) {}

 Login() {
    // делаю так тк нету доступа к бэку для настройки
    this.dialog.open(DialogComponent,{data : {title  : "Вход" ,
        content : "Авторизация пользователя",
        type: "login" ,
        onClickFN : (username, pass)=>{
          this.dataService.UsersData().subscribe(
            response => {
                for (let i=0 ; i<response.length ; i++){
                  if (response[i].UserName == username.toLowerCase() && response[i].pass == pass)
                  {
                      this.cookie.setCookie('login', 1 , 1)
                      this.cookie.setCookie('userid', response[i]._id , 1)
                      this.cookie.setCookie('username', response[i].UserName , 1)
                      this.login = 1
                  }
                }
            },
            error => console.log(error)
          )
        }}});
  }

  Register() {
    // делаю так тк нету доступа к бэку для настройки
    this.dialog.open(DialogComponent,{data : {title  : "Вход" ,
        content : "Регистрация  пользователя",
        type: "register" ,
        onClickFN : (username, pass, email)=>{
          this.dataService.postUserData({"Email": email, "UserName" : username , "pass": pass})
            .subscribe(
            response => {
                  this.cookie.setCookie('login', 1 , 1)
                  this.cookie.setCookie('userid', response._id , 1)
                  this.cookie.setCookie('username', response.UserName , 1)
                  this.login = 1
            },
            error => console.log(error)
          )
        }}});
  }
  LogOF() {
    this.cookie.deleteCookie('login')
    this.cookie.deleteCookie('userid')
    this.cookie.deleteCookie('username')
    this.login = 0

  }
}
//


