import { Component } from '@angular/core';
import { FiltersDialogComponent } from './filters-dialog/filters-dialog.component';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-filter-bar',
  templateUrl: './filter-bar.component.html',
  styleUrl: './filter-bar.component.css',
})
export class FilterBarComponent {

  constructor(
    public dialog:MatDialog,
  ){}

  openFilterDialog(): void {
    this.dialog.open(FiltersDialogComponent,{
      
    })
  }

}
