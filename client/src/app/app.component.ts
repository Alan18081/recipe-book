import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDi5gHhdw-M3tKlr-Wrft_Qric3wh96OYk',
      authDomain: 'todo-ea259.firebaseio.com'
    });
  }
}
