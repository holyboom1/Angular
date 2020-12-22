import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-body-of-post',
  templateUrl: './body-of-post.component.html',
  styleUrls: ['./body-of-post.component.css']
})
export class BodyOfPostComponent implements OnInit {

  @Input() src;
  constructor() { }

  ngOnInit(): void {

  }

}
