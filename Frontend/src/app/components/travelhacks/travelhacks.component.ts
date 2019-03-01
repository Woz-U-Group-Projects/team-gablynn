import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-travelhacks',
  templateUrl: './travelhacks.component.html',
  styleUrls: ['./travelhacks.component.css']
})
export class TravelhacksComponent implements OnInit {

  constructor() {
    const root = document.documentElement;
    root.style.setProperty(
      '--bg-image', 'url(https://botanalytics.co/blog/wp-content/uploads/2017/06/1.jpeg)'
      );
      
  }

  ngOnInit() {

  }

}
