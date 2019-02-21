import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { HttpClient } from 'selenium-webdriver/http';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  //selectedFile: File = null;

  //constructor(private http: HttpClient) { }

// onFileSelected(event){
 //  this.selectedFile = <File>event.target.files[0];
 // }

  //onUpload(){
    //const fd = new FormData();
    //fd.append('image', this.selectedFile, this.selectedFile.name)
    //this.http.post('fd')
    //.subscribe(res =>{
    //  console.log(res);
    //})
  //} 

  ngOnInit() {
  }

}
