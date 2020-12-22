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
      img: "https://picsum.photos/200",
      likes: 1232,
      comments: [{name: "seqwe", comment: "asdasdad"},
        {name: "seqwe", comment: "asdasdad"},
        {name: "seqwe", comment: "asdasdad"},
        {name: "seqwe", comment: "asdasdad"}]
    },
    {
      author: "name2",
      img: "https://picsum.photos/200",
      likes: 1232,
      comments: [{name: "seqwe", comment: "asdasdad"},
        {name: "seqwe", comment: "asdasdad"},
        {name: "seqwe", comment: "asdasdad"},
        {name: "seqwe", comment: "asdasdad"}]
    }, {
      author: "name3",
      img: "https://picsum.photos/200",
      likes: 1232,
      comments: [{name: "seqwe", comment: "asdasdad"},
        {name: "seqwe", comment: "asdasdad"},
        {name: "seqwe", comment: "asdasdad"},
        {name: "seqwe", comment: "asdasdad"}]
    },
  ]
}
