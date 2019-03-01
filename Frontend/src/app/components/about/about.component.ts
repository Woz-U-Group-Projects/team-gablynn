import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() {
    const root = document.documentElement;
    root.style.setProperty(
      '--bg-image', 'url(https://ecuaexperience.com/wp-content/uploads/2018/10/light-gradient-wallpaper-26039-26724-hd-wallpapers.jpg.png)'
      );
   }

  ngOnInit() {
  }

}
