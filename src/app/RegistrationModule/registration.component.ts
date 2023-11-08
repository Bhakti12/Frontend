import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})

export class RegisterComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required, Validators.pattern('^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!@$%^&(){}[]:;<>,.?/~_+-=|\]).{8,32}$')]);
  hide = true;
  firstname = new FormControl('', [Validators.required]);
  lastname = new FormControl('', [Validators.required]);
  profilePic = new FormControl('', [Validators.required]);
  idProof = new FormControl('', [Validators.required]);
  address = new FormControl('', [Validators.required]);
  mobileNo = new FormControl('', [Validators.required]);
  status = new FormControl('Inactive', [Validators.required]);

  getErrorMessage() {
    if (
      this.email.hasError('required') ||
      this.password.hasError('required') ||
      this.address.hasError('required') ||
      this.firstname.hasError('required') ||
      this.lastname.hasError('required') ||
      this.profilePic.hasError('required') ||
      this.idProof.hasError('required') ||
      this.mobileNo.hasError('required')
    ) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
}
