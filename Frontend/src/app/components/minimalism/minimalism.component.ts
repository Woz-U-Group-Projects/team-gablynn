import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-minimalism',
  templateUrl: './minimalism.component.html',
  styleUrls: ['./minimalism.component.css']
})
export class MinimalismComponent implements OnInit {

  constructor() {
    let root = document.documentElement;
    root.style.setProperty("--bg-image","url(https://www.listenmoneymatters.com/wp-content/uploads/2014/11/LMM-Cover-Images-6.jpg)");
   }

  ngOnInit() {
    
  }

}
