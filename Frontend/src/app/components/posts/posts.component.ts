import { Component, OnInit, TemplateRef } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { HttpClient } from 'selenium-webdriver/http';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  notHidden = false;

  unhide(){
    this.notHidden = true;
  }

  hide(){
    this.notHidden = false;
  }

  constructor() { }

  ngOnInit() {
  }

}
