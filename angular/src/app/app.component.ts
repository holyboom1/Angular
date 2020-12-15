import {Component, Input, Output} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  title = 'angular';
  @Input() ok;
  public value: number;
  public v1 = 0;
  public v2 = 0;

  constructor() {
    this.value = 0;
  }

  vqw = ($event , v) => {
    v === 1 ? this.v1 = $event.target.value :  this.v2 = $event.target.value;
  }
  set = event => {
    this.value = event;
  }
}
