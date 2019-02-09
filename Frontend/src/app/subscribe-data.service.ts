import { Injectable } from '@angular/core';
import { Subscribe } from "./subscribe";
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubscribeDataService {

  subscribers: Subscribe[] = [{FirstName: "Gabby", LastName: "Swanson", Email: "gabrielle.swasnon94@gmail.com"} ];


  getSubscribe() : Observable<Subscribe[]> {
    return of(this.subscribers);
  }

  addSubscribe(subscribe : Subscribe) {
    this.subscribers.push(subscribe)
  }

  constructor() { }
}
