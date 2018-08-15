import {Component} from '@angular/core';
import {ActivatedRoute, Data} from '@angular/router';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html'
})
export class ErrorPageComponent {
  errorMessage: string;
  constructor(private route: ActivatedRoute) {
    this.errorMessage = route.snapshot.data.message;
    this.route.data.subscribe((data: Data) => {
      this.errorMessage = data.message;
    });
  }
}