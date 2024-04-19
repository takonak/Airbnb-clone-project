import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Rental } from './rental.model';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

 private rentals: Rental[] = [{
    id: 1,
    title:"Central Appartment",
    city: "New York",
    street: "Times Square",
    category: "apartment",
    image: "http://via.placeholder.com/350x250",
    bedrooms: 3,
    description: "Very cosy place",
    price: 34,
    shared: false,
    createdAt: "24/12/2023"
  },

  {
    id: 2,
    title:"Central Appartment",
    city: "New York",
    street: "Times Square",
    category: "apartment",
    image: "http://via.placeholder.com/350x250",
    bedrooms: 3,
    description: "Very cosy place",
    price: 34,
    shared: false,
    createdAt: "24/12/2023"
  },

  {
    id: 3,
    title:"Central Appartment",
    city: "New York",
    street: "Times Square",
    category: "apartment",
    image: "http://via.placeholder.com/350x250",
    bedrooms: 3,
    description: "Very cosy place",
    price: 34,
    shared: false,
    createdAt: "24/12/2023"
  }
  ]

  public getRentalById(rentalId:string): Observable<Rental>{
    return new Observable<Rental>((observer)=>{
      setTimeout(() => {
       const foundRental = this.rentals.find((rental)=> {
          return rentalId == rentalId
        })

        observer.next(foundRental)
      }, 500);
    })
  }

  public getRentals():Observable<Rental[]> {
    return new Observable<Rental[]>((observer) =>{
      setTimeout(() => {
        observer.next(this.rentals);
      }, 1000);
    })
  }
  constructor() { }
}
