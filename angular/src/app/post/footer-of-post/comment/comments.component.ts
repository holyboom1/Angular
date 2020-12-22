import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-comment',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  @Input() comments;
  @Input() name;
  @Input() comment;
  @Input() newComment;
  constructor() { }

  ngOnInit(): void {
  }



  addComment($event: Event) {
    this.comments.push($event)
  }
}
