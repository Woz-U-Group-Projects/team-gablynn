import { Component, OnInit } from '@angular/core';
import { TravelhacksPostService } from 'src/app/components/travelhacks/travelhacks-post.service';
import { SubmitPostService } from 'src/app/components/posts/submit-post.service';

@Component({
  selector: 'app-travelhacks',
  templateUrl: './travelhacks.component.html',
  styleUrls: ['./travelhacks.component.css'],
  providers: [ TravelhacksPostService ]
})
export class TravelhacksComponent implements OnInit {

  postLikes = 0;

  public posts: any [];
  data: any = [];
  delRow;

  onPostLikesUpdate = function(event) {
    this.postLikes = event;
  };

  constructor(private travelhacksPostService: TravelhacksPostService, private submitPostService: SubmitPostService) {

    const root = document.documentElement;
    root.style.setProperty(
      '--bg-image', 'url(https://botanalytics.co/blog/wp-content/uploads/2017/06/1.jpeg)'
      );

  }

  ngOnInit() {
    this.getAllPost();
    //  this.submitPostService.postAdded_Observable.subscribe(res => {
    //    this.getAllPost();
    //  });
  }

  getAllPost() {
    this.travelhacksPostService.getAllPost().subscribe(result => {
      console.log('result is ', result);
      this.posts = result;
    });
  }


  delete(row) {
    console.log(row);
    this.delRow = this.data.indexOf(row);
    this.data.splice(this.delRow, 1);
    console.log(this.data);

}

 }
