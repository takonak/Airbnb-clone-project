import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RentalService } from '../rental-shared/rental.service';
import { Rental } from '../rental-shared/rental.model';

@Component({
  selector: 'app-rental-detail',
  templateUrl: './rental-detail.component.html',
  styleUrl: './rental-detail.component.css'
})
export class RentalDetailComponent implements OnInit{
constructor(private route: ActivatedRoute, 
            private rentalService: RentalService){}


rental: Rental | undefined;

ngOnInit(): void {
  this.rental = new Rental();
  this.route.params.subscribe((params)=>{
    this.getRental( params ['rentalId']);

  })
}

getRental(rentalId:string){
  this.rentalService.getRentalById(rentalId).subscribe((
    rental: Rental
  )=>{
    this.rental = rental;
  })
}
}
