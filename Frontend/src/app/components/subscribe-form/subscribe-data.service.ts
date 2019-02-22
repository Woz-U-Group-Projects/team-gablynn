import { Injectable } from '@angular/core';
import { Subscribe } from "../../models/subscribe";
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SubscribeDataService {
  constructor(private http: HttpClient) {}

  url: string = "http://localhost:3000/subscriber";

  subscribers: Subscribe[] = [{FirstName: "Gabby", LastName: "Swanson", Email: "gabrielle.swasnon94@gmail.com"} ];


  getSubscribe() : Observable<Subscribe[]> {
    return this.http.get<Subscribe[]>(this.url);
    //return of(this.subscribers);
  }

  addSubscribe(subscribe : Subscribe) {
    //this.subscribers.push(subscribe)
    this.http.post<Subscribe>(this.url, subscribe).subscribe(result => this.subscribers.push(result));
  }
}
