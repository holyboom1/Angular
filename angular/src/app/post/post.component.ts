import {Component, Input, OnInit} from '@angular/core';
import {LSService} from "../services/l-s.service";
import {ActivatedRoute, Router} from "@angular/router";
import {DataServiceService} from "../services/data-service.service";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input() post ;

  constructor(private dataService  : DataServiceService,
              private router : Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params=>{

      params.id!=null ?
      this.dataService.getDataPost(params.id).subscribe(
        (response)=>{
          this.post = response},
        error => console.log(error)
      ) : null
    })
  }
    topost(){
    this.router.navigate(["post", this.post._id])
    }
}
