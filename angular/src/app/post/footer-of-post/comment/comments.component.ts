import {Component, Input, OnInit} from '@angular/core';
import {DataServiceService} from "../../../services/data-service.service";

@Component({
  selector: 'app-comment',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  @Input() comments;
  @Input() newComment;
  @Input() idItem;
  constructor(private dataService : DataServiceService) { }

  ngOnInit(): void {
    this.dataService.getComments(this.idItem)
      .subscribe(
        response => this.comments = response,
        error=> console.error(error)
      )
  }


  addComment($event: Event) {
    let data : any = $event
    let comment = {"name" : data.userName , "comment" : data.comment}
    this.dataService.postComment(this.idItem , comment).subscribe(
      response => this.ngOnInit(),
      error => console.log(error)
    )
  }
}
