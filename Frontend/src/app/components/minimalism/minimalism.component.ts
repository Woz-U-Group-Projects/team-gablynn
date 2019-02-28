import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-minimalism',
  templateUrl: './minimalism.component.html',
  styleUrls: ['./minimalism.component.css']
})
export class MinimalismComponent implements OnInit {

  constructor() {
    let root = document.documentElement;
    root.style.setProperty("--bg-image","url(http://knowledge.ckgsb.edu.cn/wp-content/uploads/2017/10/simple-minimalism.jpg)");
   }

  ngOnInit() {
    
  }

}
