import { Component, OnInit } from '@angular/core';
import { MinimalismPostService } from 'src/app/components/minimalism/minimalism-post.service';
import { Post } from '../../../../models/post.model';
import { SubmitPostService } from 'src/app/components/posts/submit-post.service';
import { Title } from '@angular/platform-browser';
import { map } from 'rxjs/operators';


 @Component({
   selector: 'app-minimalism',
  templateUrl: './minimalism.component.html',
  styleUrls: ['./minimalism.component.css'],
  providers: [ MinimalismPostService ]
})
 export class MinimalismComponent implements OnInit {

  constructor(private minimalismPostService: MinimalismPostService, private submitPostService: SubmitPostService) {
    const root = document.documentElement;
    root.style.setProperty('--bg-image', 'url(https://www.listenmoneymatters.com/wp-content/uploads/2014/11/LMM-Cover-Images-6.jpg)');
  }

  postLikes = 0;

  public posts: any [];
  data: any = [];
  delRow;

  onPostLikesUpdate = function(event) {
    this.postLikes = event;
  };

  ngOnInit() {
    this.getAllPost();
    //  this.submitPostService.postAdded_Observable.subscribe(res => {
    //    this.getAllPost();
    //  });
  }

  getAllPost() {
    this.minimalismPostService.getAllPost().subscribe(result => {
      console.log('result is ', result);
      this.posts = result;
    });
  }


  deletePost(post) {
    const posts = this.posts;

    this.minimalismPostService.deletePost(post.title)
    // .map(res => res.json())
    // .subscribe(data => {
      // if (data.n === 1) {
       // for (let i = 0; i < posts.length; i++) {
       //   if (posts [i].title === post.title) {
        //    posts.splice(i, 1);
          }
        }
    //  }
  //  });
 // }

// }
