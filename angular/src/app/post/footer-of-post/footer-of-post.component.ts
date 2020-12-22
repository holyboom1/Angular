import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-footer-of-post',
  templateUrl: './footer-of-post.component.html',
  styleUrls: ['./footer-of-post.component.css']
})
export class FooterOfPostComponent implements OnInit {

  @Input() likes;
  @Input() comments;

  constructor() { }

  ngOnInit(): void {
  }

}
