import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FirebaseAuthService } from '../../../firebase/firebase-auth.service';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})

export class SignUpComponent {

  constructor(
    private dialogRef: MatDialogRef<SignUpComponent>,
    private firebaseAuthService: FirebaseAuthService,
    private router: Router
    ) { }

  onFormSubmit(form: NgForm) {
    console.log(form.value);
    var data = Object.assign({}, form.value);
    delete data.password;
    this.firebaseAuthService.signUp(form.value.email, form.value.password, data).then(response => {
      console.log(response);
      form.reset();
      this.dialogRef.close('registered');
    })
  }
}



