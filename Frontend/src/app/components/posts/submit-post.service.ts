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
  constructor(private http: HttpClient) {}

  url = 'http://localhost:3000/posts/';

  getPost(): Observable<Post[]> {
    return this.http.get<Post[]>(this.url);
  }

  addPost(submitPost: Post): Observable<Post> {
    const formData = new FormData();
    formData.append("image", submitPost.image);
    formData.append("name", submitPost.name);
    return this.http.post<Post>(this.url, formData);
  }

}


