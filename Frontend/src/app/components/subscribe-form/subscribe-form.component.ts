import { Component, OnInit } from '@angular/core';
import { SubscribeDataService } from '../../services/subscribe-data.service';
import { Subscribe } from '../../subscribe';


@Component({
  selector: 'app-subscribe-form',
  templateUrl: './subscribe-form.component.html',
  styleUrls: ['./subscribe-form.component.css']
})
export class SubscribeFormComponent implements OnInit {
  currentSubscribe : Subscribe = new Subscribe();

  addSubscribe(): void {
    this.subscibeDataService.addSubscribe(this.currentSubscribe);
    this.currentSubscribe = new Subscribe();
  }

  constructor(private subscibeDataService : SubscribeDataService) {}

  ngOnInit() {
  }

}
