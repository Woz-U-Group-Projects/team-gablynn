import { Component, OnInit, TemplateRef } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { HttpClient } from 'selenium-webdriver/http';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  
  modalRef: BsModalRef;

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, { class: 'modal-md' });
    console.log(this.modalRef);
  }

  closeModal(){
    console.log(this.modalRef);
    this.modalRef.hide();
  }

  constructor(private modalService: BsModalService) { }

  ngOnInit() {
  }

}
