import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../../models/post.model';


@Injectable({
  providedIn: 'root'
})
export class SubmitPostService {

	constructor(private http: HttpClient){

	}
	
	addPost(post: Post){
		return this.http.post('/api/post/createPost',{
			title : post.title,
      description : post.description,
      topic : post.topics
		})
	}

  _url = '';

  //submit(post: Post){
  //  return this._http.post<any>(this._url,post);

  }
//}
