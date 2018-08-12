import {Directive, HostBinding, HostListener, ContentChild, OnInit, ElementRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective implements OnInit {
  @HostBinding('class.show') isOpen = false;
  @ContentChild('recipeDropdown') content: ElementRef;
  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
    if (this.isOpen) {
      this.content.nativeElement.classList.add('show');
    } else {
      this.content.nativeElement.classList.remove('show');
    }
  }
  constructor() { }
  ngOnInit() {
  }
}
