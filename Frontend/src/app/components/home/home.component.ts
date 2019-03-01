import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() {
    let root = document.documentElement;
    root.style.setProperty("--bg-image","url(https://ecuaexperience.com/wp-content/uploads/2018/10/light-gradient-wallpaper-26039-26724-hd-wallpapers.jpg.png)");
   }
  ngOnInit() {
  }

}
