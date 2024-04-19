import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatSliderModule } from '@angular/material/slider';
import { MatDialogModule } from '@angular/material/dialog';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { RentalListComponent } from './rental-list/rental-list/rental-list.component';
import { RentalListItemComponent } from './rental-list/rental-list-item/list-card/list-card.component';
import { RentalComponent } from './rental/rental.component';

import { RentalService } from "./rental-shared/rental.service";
import { RentalDetailComponent } from './rental-detail/rental-detail.component';
import { FilterBarComponent } from './filter-bar/filter-bar.component';
import { FiltersDialogComponent } from './filter-bar/filters-dialog/filters-dialog.component';

const routes: Routes = [
    {path: 'rentals', 
    component:RentalComponent, 
    children: [
        {
            path: '', component: RentalListComponent
        },
        {
            path: ':rentalId', component: RentalDetailComponent
        }
    ]
},
  ]

@NgModule({
    declarations:[
    RentalListComponent,
    RentalListItemComponent,
    RentalComponent,
    RentalDetailComponent,
    FilterBarComponent,
    FiltersDialogComponent,
    ],
    imports:[
        CommonModule,
        RouterModule.forChild(routes),
        TranslateModule.forChild(),

        MatToolbarModule,
        MatIconModule,
        MatListModule,
        MatMenuModule,
        MatButtonToggleModule,
        MatSliderModule,
        MatDialogModule,
        MatCheckboxModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [RentalService],
    
    exports: [
        RentalComponent 
      ]
})
export class RentalModule{

}