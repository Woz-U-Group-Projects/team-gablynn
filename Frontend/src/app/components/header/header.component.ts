import { Component, OnInit } from '@angular/core';
import { Subscribe } from '../../subscribe';
import { SubscribeDataService } from 'src/app/services/subscribe-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  subscribers: Subscribe[];

  constructor(private subscribeDataService : SubscribeDataService) {
    subscribeDataService.getSubscribe().subscribe(s => (this.subscribers = s));
   }


  ngOnInit() {
  }

}
