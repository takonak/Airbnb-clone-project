import { Component } from '@angular/core';
import { FirebaseAuthService } from '../../../firebase/firebase-auth.service';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})

export class SignInComponent {
  constructor(private firebaseAuthService: FirebaseAuthService) { }

  onFormSubmit(form: NgForm) {
    console.log(form.value);
    this.firebaseAuthService.signInWithEmailAndPassword(form.value.email, form.value.password).then(observResponse => {
      observResponse.subscribe((response:any) => {
        console.log(response);
      })
    })
  }

  onResetPasswordBtnClick() {
    Swal.fire({
      title: "Enter your email address",
      input: "text",
      inputAttributes: {
        autocapitalize: "off"
      },
      showCancelButton: true,
      confirmButtonText: "Sent reset link",
      showLoaderOnConfirm: true
    })
      .then((result) => {
        this.firebaseAuthService.resetPassword(result.value).then(response => {
          Swal.fire("Reset link was send successfully");
        })
      });
  }
}

