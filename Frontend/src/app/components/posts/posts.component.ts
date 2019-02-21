import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { HttpClient } from '@angular/common/http';
import { SubmitPostService } from '../../services/submit-post.service'
import { Post } from 'src/app/models/post.model';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
 

SubmittedPost = new Post ();
  _SubmitPostService: any;
  
  //onSubmit() {
   // this._submitPostService.submit(this.SubmittedPost)
    //.subscribe(
     // data => console.log('success!', data),
      //error => console.error('Error!', error)
    //)
   //}

  log(x) {console.log(x); };

  selectedFile: File = null;

  constructor(private http: HttpClient, _submitPostService: SubmitPostService) { }

onFileSelected(event){
 this.selectedFile = <File>event.target.files[0];
 }

  onUpload(){
    const fd = new FormData();
    fd.append('image', this.selectedFile, this.selectedFile.name)
    this.http.post('', 'fd')
    .subscribe(res =>{
     console.log(res);
    })
  } 

  ngOnInit() {
  }

}
