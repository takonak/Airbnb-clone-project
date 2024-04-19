import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SignInComponent } from '../../sign-in/sign-in.component';
import { SignUpComponent } from '../../sign-up/sign-up.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hamburger-menu',
  templateUrl: './hamburger-menu.component.html',
  styleUrl: './hamburger-menu.component.css'
})

export class HamburgerMenuComponent {
  constructor(
    private dialog: MatDialog,
    private router: Router 
  ) {}

  openSignUpDialog(): void {
    const dialogRef = this.dialog.open(SignUpComponent, {
      width: '500px',
    });

   
    dialogRef.afterClosed().subscribe(result => {
      if (result === 'registered') {
        this.navigateToSignInPage();
      }
    });
  }

  private navigateToSignInPage(): void {
    this.router.navigate(['/auth/sign-in']);
  }

  openSignInDialog(): void {
        this.dialog.open(SignInComponent, {
          width: '500px',
        });
}
}

