import {Component, EventEmitter, Input, OnInit, Output, } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CookieService} from "../../../../services/cookie.service";


@Component({
  selector: 'app-addcomment',
  templateUrl: './addcomment.component.html',
  styleUrls: ['./addcomment.component.css']
})
export class AddcommentComponent implements OnInit {

  @Output() newComment : EventEmitter<any> = new EventEmitter<object>()

  constructor(private cookie : CookieService) { }

  login : number | null

  ngOnInit(): void {
    this.login = this.cookie.getCookie("login")
  }


  submit(){
    this.newComment.emit(this.commentForm.value)
    this.commentForm.reset()
  }

  // <!-- {{conmmentForm.value | json}}-->
  // <!--  {{conmmentForm.controls.comment.errors | json}}-->

  commentForm = new FormGroup(
    {
      userName : new FormControl( "", [Validators.required,
        Validators.minLength(4), Validators.maxLength(10)],
        )
      ,
      comment : new FormControl( "", [Validators.required,
        Validators.minLength(4), Validators.maxLength(20)])
    }
  )

}
