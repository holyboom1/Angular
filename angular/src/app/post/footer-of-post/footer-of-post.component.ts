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

  likeAdd : boolean = false
  CommentsShow : boolean= false
  ngOnInit(): void {
  }

  AddLikes(){
  this.likeAdd= !this.likeAdd
    if (this.likeAdd) {
      this.likes++
    }
    else {
      this.likes--
    }
  }
  ShowComments(){
    this.CommentsShow= !this.CommentsShow
  }

}
