import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../models/post.model';

@Injectable({
  providedIn: 'root'
})
export class SubmitPostService {

  _url = '';
  constructor(private _http: HttpClient) { }

  submit(post: Post){
    return this._http.post<any>(this._url,post);

  }
}
