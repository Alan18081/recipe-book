import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'recipes-book';
  activeNav = 'recipes';
  changeLink(event: {path: string}): void {
    this.activeNav = event.path;
  }
}
