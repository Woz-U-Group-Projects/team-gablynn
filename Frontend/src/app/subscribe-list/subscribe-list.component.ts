import { Component, OnInit } from '@angular/core';
import { SubscribeDataService } from '../subscribe-data.service';
import { Subscribe } from '../subscribe';

@Component({
  selector: 'app-subscribe-list',
  templateUrl: './subscribe-list.component.html',
  styleUrls: ['./subscribe-list.component.css']
})
export class SubscribeListComponent implements OnInit {

  subscribers: Subscribe[];

  constructor(private subscribeDataService : SubscribeDataService) {
    subscribeDataService.getSubscribe().subscribe(s => (this.subscribers = s));
   }

  ngOnInit() {
  }

}
