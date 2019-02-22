import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { SubmitPostService } from 'src/app/components/posts/submit-post.service';
import { Post } from 'src/app/models/post.model';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
  providers: [ SubmitPostService ]
})
export class PostsComponent implements OnInit {
  ngOnInit(): void {
    //throw new Error("Method not implemented.");
  }
 
  @ViewChild('closeBtn') closeBtn: ElementRef;
  public post : Post;

  constructor(private submitPostService: SubmitPostService, private router: Router){
  	this.post = new Post();
  }

  addPost() {
  	if(this.post.title && this.post.description){
  		this.submitPostService.addPost(this.post).subscribe(res =>{
  			this.closeBtn.nativeElement.click();
        this.router.navigate (['/','minimalism']);
  		});
  	} else {
      alert('Title and Description required');
      console.log(this.post.topics);
      if(this.post.topics=="Minimalism"){
        this.router.navigate (['/','minimalism']);
      } else {
        this.router.navigate (['/','travelhacks']);
      }

  	}
  }

}
//SubmittedPost = new Post ();
  //_SubmitPostService: any;
  
  //onSubmit() {
   // this._submitPostService.submit(this.SubmittedPost)
    //.subscribe(
     // data => console.log('success!', data),
      //error => console.error('Error!', error)
    //)
   //}

  //log(x) {console.log(x); };

  //selectedFile: File = null;

  //constructor(private http: HttpClient, _submitPostService: SubmitPostService) { }

//onFileSelected(event){
 //this.selectedFile = <File>event.target.files[0];
// }

  //onUpload(){
   // const fd = new FormData();
    //fd.append('image', this.selectedFile, this.selectedFile.name)
    //this.http.post('', 'fd')
    //.subscribe(res =>{
    // console.log(res);
    //})
  //} 

  //ngOnInit() {
  //}

