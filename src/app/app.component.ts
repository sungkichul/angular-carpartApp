import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(){
    console.log("AppComponent constructor called")
  }

  ngOnInit(){
    console.log("AppComponent ngOnInit called")
  }
}
