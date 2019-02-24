import { Component, OnInit, TemplateRef } from '@angular/core';
import { CommentsService } from '../../services/comments.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
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
