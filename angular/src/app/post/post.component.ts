import {Component, Input, OnInit} from '@angular/core';
import {LSService} from "../services/l-s.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input() post ;

  constructor(private LS : LSService,
              private router : Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      params.id!=null ?
      this.post = this.LS.getDataID(params.id) : null
    })
  }
    topost(){
    this.router.navigate(["post", this.post.id])
    }
}
