import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: []
})
export class HeaderComponent {
  @Output() linkChanged = new EventEmitter<{path: string}>();
  toggleNav(path: string): void {
    this.linkChanged.emit({path});
  }
}
