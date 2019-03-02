import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../../../../models/post.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MinimalismPostService {

    constructor(private http: HttpClient) {

  }

  getAllPost(): Observable<Post[]> {
    return this.http.get<Post[]>("http://localhost:3000/posts", {});
  }

}
