import { createInjectableType } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RentalService } from '../../rental-shared/rental.service';
import { Rental } from '../../rental-shared/rental.model';
import {Output, EventEmitter } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';


@Component({
  selector: 'app-rental-list',
  templateUrl: './rental-list.component.html',
  styleUrl: './rental-list.component.css'
})
export class RentalListComponent implements OnInit {

  rentals: Rental[] = [];

  constructor(private rentalService: RentalService,
    private translate: TranslateModule) {}


  ngOnInit() {
    const rentalObservable = this.rentalService.getRentals();

    rentalObservable.subscribe(
      (rentals:Rental[]) => {
        this.rentals = rentals;

      },
      (err) => {
        
      },
      () => {
        
      }
      )
  }

}
