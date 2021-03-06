import { Component, OnInit} from '@angular/core';
import { CommentsService } from '../comments/comments.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  notHidden = false;

  unhide() {
    this.notHidden = true;
  }

  hide() {
    this.notHidden = false;
  }

  constructor() { }

  ngOnInit() {
  }

}
