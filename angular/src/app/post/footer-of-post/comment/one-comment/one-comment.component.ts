import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-one-comment',
  templateUrl: './one-comment.component.html',
  styleUrls: ['./one-comment.component.css']
})
export class OneCommentComponent implements OnInit {
  @Input() comment;
  constructor() { }

  ngOnInit(): void {
  }

}
