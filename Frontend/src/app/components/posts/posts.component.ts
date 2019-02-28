import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { SubmitPostService } from 'src/app/components/posts/submit-post.service';
import { Post } from '../../../../models/post.model';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { TopicList } from '../../../../models/topic-list.model'


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
  providers: [ SubmitPostService ]
})
export class PostsComponent implements OnInit {
  topicList: TopicList[] = [
    {id: 1, name: 'Minimalism'},
    {id: 2, name: 'Travel Hacks'},
  ]
  posts: Post[];
  submitPost: Post = new Post();
 
  //Do I need this?
  //@ViewChild('closeBtn') closeBtn: ElementRef;

  @ViewChild("fileInput")
  fileInput;

  onFileChanged($event) {
    this.submitPost.image = $event.target.files[0];
  }

  getPost() {
    this.submitPostService.getPost().subscribe(f => (this.posts = f));
  }

  onSubmit() {
    console.log('hello world');
    console.log(this.submitPost);
    this.submitPostService.addPost(this.submitPost).subscribe(f => {
      if (this.submitPost.topics == "Minimalism") {
        this.router.navigate(['/', 'minimalism']);
      } else {
        this.router.navigate(['/', 'travelhacks']);
        //return this.http.post<Post>(this.url, formData);
      }
      this.submitPost = new Post();
      this.fileInput.nativeElement.value = null;
      this.getPost();
    });
  }

  constructor(private submitPostService: SubmitPostService, private router: Router){}
  	ngOnInit() {
      this.getPost();
    }

}

