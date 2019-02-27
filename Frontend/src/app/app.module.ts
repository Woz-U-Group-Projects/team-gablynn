import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { ModalModule } from 'ngx-bootstrap/modal';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SubscribeFormComponent } from './components/subscribe-form/subscribe-form.component';
import { SubscribeListComponent } from './components/subscribe-list/subscribe-list.component';
import { AboutComponent } from './components/about/about.component';
import { MinimalismComponent } from './components/minimalism/minimalism.component';
import { TravelhacksComponent } from './components/travelhacks/travelhacks.component';
import { ContactComponent } from './components/contact/contact.component';
import { PostsComponent } from './components/posts/posts.component';
import { CommentsComponent } from './components/comments/comments.component';
import { PostsService } from './services/posts.service';
import { CommentsService } from './services/comments.service';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { LikesComponent } from './components/likes/likes.component';


@NgModule({
  declarations: [
    AppComponent,
    SubscribeFormComponent,
    SubscribeListComponent,
    AboutComponent,
    MinimalismComponent,
    TravelhacksComponent,
    ContactComponent,
    PostsComponent,
    CommentsComponent,
    HeaderComponent,
    HomeComponent,
    LikesComponent,
  ],
  imports: [
    BrowserModule, FormsModule,
    AppRoutingModule, HttpClientModule, ModalModule.forRoot(), NgbModule
  ],
  providers: [PostsService, CommentsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
