import {Component, Input, Output} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {

  posts = [
    {
      author: "name1",
      gender: "mr",
      img: "https://picsum.photos/300/200?random=1",
      likes: 1232,
      comments: [{name: "seqwe", comment: "asdasdad"},
                  {name: "seqwe", comment: "asdasdad"},
                  {name: "seqwe", comment: "asdasdad"},
                  {name: "seqwe", comment: "asdasdad"}]
    },
    {
      author: "name2",
      gender: "mr",
      img: "https://picsum.photos/300/200?random=2",
      likes: 1232,
      comments: [{name: "seqwe", comment: "asdasdad"},
        {name: "seqwe", comment: "asdasdad"},
        {name: "seqwe", comment: "asdasdad"},
        {name: "seqwe", comment: "asdasdad"}]
    }, {
      author: "name3",
      gender: "ms",
      img: "https://picsum.photos/300/200?random=3",
      likes: 1232,
      comments: [{name: "seqwe", comment: "asdasdad"},
        {name: "seqwe", comment: "asdasdad"},
        {name: "seqwe", comment: "asdasdad"},
        {name: "seqwe", comment: "asdasdad"}]
    },
  ]
}
