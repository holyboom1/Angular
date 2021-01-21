import {Component, EventEmitter, Input, OnInit, Output, } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";


@Component({
  selector: 'app-addcomment',
  templateUrl: './addcomment.component.html',
  styleUrls: ['./addcomment.component.css']
})
export class AddcommentComponent implements OnInit {

  @Output() newComment = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }
  comment
  name
  // addComment(name, comment){
  //   if ((this.comment&&this.name)!=undefined) {
  //     this.newComment.emit({name: name, comment: comment})
  //   }
  // }
  // setName(event){
  //   this.name=event.target.value
  // }
  //
  // setComment(event){
  //   this.comment=event.target.value
  // }
  conmmentForm = new FormGroup(
    {
      name : new FormControl( this.name ,  [Validators.required,
        Validators.minLength(4), Validators.maxLength(10)])
      ,
      comment : new FormControl( this.comment ,  [Validators.required,
        Validators.minLength(4), Validators.maxLength(100)])
    }
  )
  }
