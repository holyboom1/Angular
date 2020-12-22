import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-header-post',
  templateUrl: './header-post.component.html',
  styleUrls: ['./header-post.component.css']
})
export class HeaderPostComponent implements OnInit {
  @Input() name;
  @Input() gender;
  constructor() { }

  ngOnInit(): void {
  }

}
