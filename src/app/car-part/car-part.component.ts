import { Component, OnInit } from '@angular/core';
import {CarPart} from "./car-part";
import {CarPartService} from "./car-part.service";

@Component({
  selector: 'app-car-part',
  templateUrl: './car-part.component.html',
  styleUrls: ['./car-part.component.css']
})
export class CarPartComponent implements OnInit {
  title = 'Ultra Racing';
  today = Date.now();
  carParts:CarPart[];

  constructor(private carPartService:CarPartService){
    console.log("CarPartComponent constructor called")
  }

  ngOnInit(){
    console.log("CarPartComponent ngOnInit called")
    //this.carParts = this.carPartService.getCarParts();
    this.carPartService.getCarParts().subscribe(response => this.carParts = response['data']);
  }

  totalCarParts(){
    // let sum = 0;
    //
    // for(let carPart of this.carParts) {
    //   sum += carPart.inStock;
    // }
    // return sum;
    if(Array.isArray(this.carParts)){
      return this.carParts.reduce((prev, curr) => prev + curr.inStock, 0);
    }
  }

  upQuantity(carPart){
    //console.log(carPart);
    if(carPart.quantity <  carPart.inStock) carPart.quantity++;
  }

  downQuantity(carPart){
    //console.log(carPart);
    if(carPart.quantity != 0) carPart.quantity--;
  }

  keyupQuantity(event, carPart){
    //console.log(event.target.value);
    if(event.target.value < carPart.inStock)  carPart.quantity = event.target.value;
  }
}
