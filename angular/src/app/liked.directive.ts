import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appSelected]'
})
export class LikedDirective {
  set type(value: any) {
    this._type = value;
  }


  @Input()
  likeStatys
  @Input()
  private _type: any = this.el.nativeElement.localName


  @HostListener('mouseenter')
  public onMouseEnter(event): void {
    if (this._type==="button") {
      this.el.nativeElement.style = "transition: .5s; background : red"
    }
    if (this._type==="i-bs") {
      this.el.nativeElement.style = "fill: red;"
    }
  }

  @HostListener('mouseleave')
  public onMouseLeave(event): void {
    this.el.nativeElement.style= "transition: .5s; "
  }

  constructor(private el: ElementRef) {

  }

}
