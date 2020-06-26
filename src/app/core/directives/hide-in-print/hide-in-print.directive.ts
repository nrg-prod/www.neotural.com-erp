import { Directive, HostBinding, Input, ElementRef } from "@angular/core";

@Directive({
  selector: "[hideInPrint]"
})
export class HideInPrintDirective {
  @HostBinding("class") elementClass;

  constructor(el: ElementRef) {
    const defaultClass = el.nativeElement.classList;
    this.elementClass = `${defaultClass} hide-in-print`;
  }
}
