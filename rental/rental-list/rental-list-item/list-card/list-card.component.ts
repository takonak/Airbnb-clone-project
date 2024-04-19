import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rental-list-card',
  templateUrl: './list-card.component.html',
  styleUrl: './list-card.component.css'
})
export class RentalListItemComponent  implements OnInit{

 @Input ()
  rental : any;

  constructor()  { }

  ngOnInit(): void {
    
  }
}
