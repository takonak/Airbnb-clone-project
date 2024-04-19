import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import {Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-language-dialog',
  templateUrl: './language.dialog.component.html',
  styleUrl: './language.dialog.component.css'
})
export class LanguageDialogComponent {
  constructor(private translateService: TranslateService){}

  
  @Output() languageChange = new EventEmitter<string>();
  changeLanguage(language: string) {
    this.languageChange.emit(language);
}
}
