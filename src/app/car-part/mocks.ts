import {CarPart} from "./car-part";

export const CARPARTS:CarPart[] = [
  {
    "id": 1,
    "name": "Super Tires",
    "description": "These tires are the very best",
    "price": 4.99,
    "inStock": 5,
    "image":"assets/images/tires.jpg",
    "quantity":0,
    "featured":false
  },
  {
    "id": 2,
    "name": "Reinforced Shocks",
    "description": "Shocks made from kryptonite",
    "price": 9.99,
    "inStock": 4,
    "image":"assets/images/shocks.jpg",
    "quantity":0,
    "featured":true
  },
  {
    "id": 3,
    "name": "Padded Seats",
    "description": "Super soft seats for a smooth ride",
    "price": 24.99,
    "inStock": 0,
    "image":"assets/images/seats.jpg",
    "quantity":0,
    "featured":false
  }
]
