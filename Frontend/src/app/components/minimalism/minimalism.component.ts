import { Component, OnInit } from '@angular/core';
import { MinimalismPostService } from 'src/app/components/minimalism/minimalism-post.service';
import { Post } from 'src/app/models/post.model';
import { SubmitPostService } from 'src/app/components/posts/submit-post.service';

@Component({
  selector: 'app-minimalism',
  templateUrl: './minimalism.component.html',
  styleUrls: ['./minimalism.component.css'],
  providers: [ MinimalismPostService ]
})
export class MinimalismComponent implements OnInit {

  public posts : any [];

  constructor(private minimalismPostService: MinimalismPostService, private postsService: SubmitPostService) {
  	
  }

  ngOnInit(){
  	this.getAllPost();

    // this.postsService.postAdded_Observable.subscribe(res => {
    //   this.getAllPost();
    // });
  }



  getAllPost(){
  	this.minimalismPostService.getAllPost().subscribe(result => {
  		console.log('result is ', result);
  		this.posts = result['data'];
  	});
  }

}
