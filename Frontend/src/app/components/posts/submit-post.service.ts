import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap } from "rxjs/operators";
import { Post } from '../../../../models/post.model';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SubmitPostService {
  postAdded_Observable: any;
  constructor(private http: HttpClient) { }

  url = 'http://localhost:3000/posts/';

  getPost(): Observable<Post[]> {
    return this.http.get<Post[]>(this.url);
  }


  //this is what the mean-fileupload had
  // addPost(submitPost: Post): Observable<Post> {
  //   const formData = new FormData();
  //   formData.append("image", submitPost.image);
  //   formData.append("name", submitPost.name);
  //   return this.http.post<Post>(this.url, formData);
  // }

  //this is what I had before
  // addPost () {
  // 	if(this.post.title && this.post.description){
  // 		this.submitPostService.addPost(this.post).subscribe(res =>{
  // 			this.closeBtn.nativeElement.click();
  //       this.router.navigate (['/','minimalism']);
  // 		});
  // 	} else {
  //     alert('Title and Description required');
  //     console.log(this.post.topics);
  //     if(this.post.topics=="Minimalism"){
  //       this.router.navigate (['/','minimalism']);
  //     } else {
  //       this.router.navigate (['/','travelhacks']);
  //     }

  //   }
  // }



  //this is what I think it is suppose to but it is not working. 
  // addPost(submitPost: Post): Observable<Post> {
  //   const formData = new FormData();
  //   if (this.post.title && this.post.description) {
  //     this.submitPostService.addPost(this.post).subscribe(res => {
  //       this.closeBtn.nativeElement.click();
  //       this.router.navigate(['/', 'minimalism']);
  //       formData.append("image", post.image);
  //       formData.append("name", post.name);
  //     });
  //   } else {
  //     alert('Title and Description required');
  //     console.log(this.post.topicList);
  //     if (this.post.topics == "Minimalism") {
  //       this.router.navigate(['/', 'minimalism']);
  //     } else {
  //       this.router.navigate(['/', 'travelhacks']);
  //       return this.http.post<Post>(this.url, formData);
  //     }
  //   };
  // }

  addPost(submitPost: Post): Observable<Post> {
    const formData = new FormData();
    formData.append("image", submitPost.image);
    formData.append("name", submitPost.name);
    return this.http.post<Post>(this.url, formData);
  }

}


