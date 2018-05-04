import {Injectable} from "@angular/core";
import {CARPARTS} from "./mocks";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class CarPartService {
  constructor(private http:HttpClient){
    console.log(this.http);
  }

  getCarParts() : Observable<any>{
    //return this.http.get('assets/json/car-part.json', {responseType:'json'});
    return this.http.get('http://localhost:52274/data.json', {responseType:'json'});
  }
}
