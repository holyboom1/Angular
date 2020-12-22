import {Component, EventEmitter, Input, OnInit, Output, } from '@angular/core';


@Component({
  selector: 'app-addcomment',
  templateUrl: './addcomment.component.html',
  styleUrls: ['./addcomment.component.css']
})
export class AddcommentComponent implements OnInit {
  @Input() name;
  @Input() comment;
  @Output() newComment = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }

  addComment(name, comment){
    if ((this.comment&&this.name)!=undefined) {
      this.newComment.emit({name: name, comment: comment})
    }
  }
  setName(event){
    this.name=event.target.value
  }

  setComment(event){
    this.comment=event.target.value
  }
}
