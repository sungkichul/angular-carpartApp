import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {MyDatePipe} from "./mydate.pipe";
import {TextDecorationDirective} from "./text-decoration.directive";


@NgModule({
  imports:[CommonModule],
  declarations:[MyDatePipe, TextDecorationDirective],
  exports:[MyDatePipe, TextDecorationDirective]
})

export class SharedModule{}
