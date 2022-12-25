import { Component, VERSION } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  register = new FormGroup({
    username: new FormControl('',Validators.required),
    password: new FormControl(''),
    confirmpass: new FormControl(''),
    address: new FormGroup({
      city: new FormControl(''),
      pin: new FormControl(''),
      state: new FormControl(''),
    }),
  });

  /*loadApidata() {
    this.register.setValue({
      username: 'rahul',
      password: 'pass',
      confirmpass: 'pass',
      address: {
        city: 'bengaluru',
        pin: '560064',
        state: 'karnataka',
      },
    });
  }
  */
}
