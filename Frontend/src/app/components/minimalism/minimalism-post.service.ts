import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../../../../models/post.model';

@Injectable({
  providedIn: 'root'
})
export class MinimalismPostService {

    constructor(private http: HttpClient){

	}
	
	getAllPost(){
		return this.http.post('/api/post/getAllPost',{})
	}

}
