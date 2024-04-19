import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(
    private router: Router,
    ) {}

  navigateToSignIn(){
    this.router.navigate(['/auth/sign-in'])
  };
  navigateToSignUp() {
    this.router.navigate(['/auth/sign-up']);
  }
}
