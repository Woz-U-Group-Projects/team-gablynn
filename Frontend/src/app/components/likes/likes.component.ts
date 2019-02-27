import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-likes',
  templateUrl: './likes.component.html',
  styleUrls: ['./likes.component.css']
})
export class LikesComponent {

  @Input() numberOfLikes: number = 0;

  @Output()
  change: EventEmitter<number> = new EventEmitter<number>();
  
  likeButtonClick(){
    this.numberOfLikes++;
    this.change.emit(this.numberOfLikes);
  }

  dislikeButtonClick(){
    this.numberOfLikes--;
    this.change.emit(this.numberOfLikes);
  }

  constructor() { }

  ngOnInit() {
  }

}
