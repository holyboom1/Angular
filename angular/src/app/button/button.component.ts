import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() text;
  @Input() v1;
  @Input() v2;
  @Output() ok: EventEmitter<any> = new EventEmitter();
  public result: any;
  constructor() {
  }

  ngOnInit(): void {
  }
  summ () {
    this.result = +this.v1 + +this.v2;
    this.ok.emit(this.result);
  }

}
