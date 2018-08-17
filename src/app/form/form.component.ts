import { Component, OnInit } from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  signupForm: FormGroup;
  constructor() { }

  ngOnInit() {
    this.signupForm = new FormGroup({
      'name': new FormGroup({
        'firstName': new FormControl(null, [Validators.required, this.validateName.bind(this)]),
        'lastName': new FormControl(null, Validators.required),
      }),
      'age': new FormControl(null, [Validators.required, Validators.pattern(/^\d+$/)]),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'gender': new FormControl('male'),
      'friends': new FormArray([])
    });
  }
  addFriend(): void {
    const friendControl = new FormControl();
    (<FormArray>this.signupForm.get('friends')).push(friendControl);
  }

  submit(): void {
    console.log(this.signupForm.value);
  }

  validateName(control: FormControl): {[s: string]: boolean} {
    if (control.value && control.value.indexOf('s') !== -1) {
      console.log('Printed s');
      return {'haveS': true};
    }
  }
}
