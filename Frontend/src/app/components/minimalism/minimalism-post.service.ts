import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Post } from '../../../../models/post.model';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { post } from 'selenium-webdriver/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class MinimalismPostService {

    constructor(private http: HttpClient) {

  }

  getAllPost(): Observable<Post[]> {
    return this.http.get<Post[]>('http://localhost:3000/posts', {});
  }

  // deletePost(post: Post | string): Observable<Post> {
  //   const title = typeof post === 'string' ? post : post.title;
  //   const url = `${this.postUrl}/${title}`;
  //   return this.http.delete<Post>(url, httpOptions).pipe(
  //     tap(_ => this.log(`deleted post title=${title}`)),
  //     catchError(this.handleError<Post>('deletePost'))
  //   );
  // }

}
