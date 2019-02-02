import { Injectable } from '@angular/core';
import { Subscribe } from "./subscribe";
import { Observable, of } from 'rxjs';
import { getLocaleNumberSymbol } from '@angular/common';
import { getMaxListeners } from 'cluster';

@Injectable({
  providedIn: 'root'
})
export class SubscribeDataService {

  subscribers: Subscribe[] = [{name: "Gabby Swanson", email: "gabrielle.swasnon94@gmail.com"} ];


  getSubscribe() : Observable<Subscribe[]> {
    return of(this.subscribers);
  }

  addSubscribe(subscribe : Subscribe) {
    this.subscribers.push(subscribe)
  }

  constructor() { }
}
