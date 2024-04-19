import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LanguageDialogComponent } from '../../language-dialog/dialog/language.dialog.component';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrl: './language.component.css'
})
export class LanguageComponent {

  constructor(
    public dialog: MatDialog,
    private translate: TranslateService
    ){}
    openLanguageDialog(): void {
    const dialogRef = this.dialog.open(LanguageDialogComponent, {
    });

    dialogRef.componentInstance.languageChange.subscribe((selectedLanguage: string) => {
      this.switchLanguage(selectedLanguage);
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
    switchLanguage(language: string) {
      this.translate.use(language);
      localStorage.setItem('appLanguage', language);
    }
  }

  

