import { Component } from '@angular/core';
import { Races } from './races';
import { RacesService } from './races.service';

@Component({
  selector: 'my-races',
  templateUrl: 'races.component.html',
  styleUrls:['races.component.css']
})
export class RacesComponent {
  heading = "Ultra Racing Schedule"
  cash = 10000;
  races: Races[];

  constructor(private raceService: RacesService) { }

  ngOnInit() {
    this.raceService.getRaces()
        .subscribe(data => this.races = data['racesData']);
  }

  totalCost() {
    let sum = 0;
    if (this.races) {
      for (let race of this.races) {
        if (race.isRacing) sum += race.entryFee;
      }
    }
    return sum;
  }

  castDate(date) {
    return new Date(date);
  }

  cashLeft() {
    return this.cash - this.totalCost();
  }

  enterRace(race) {
    if (this.cashLeft() > race.entryFee) {
      race.isRacing = true;
    } else {
      alert("You don't have enough cash");
    }
  }

  cancelRace(race) {
    race.isRacing = false;
  }

}
