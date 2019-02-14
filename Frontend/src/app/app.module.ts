import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SubscribeFormComponent } from './subscribe-form/subscribe-form.component';
import { SubscribeListComponent } from './subscribe-list/subscribe-list.component';
import { AboutComponent } from './about/about.component';
import { MinimalismComponent } from './minimalism/minimalism.component';
import { TravelhacksComponent } from './travelhacks/travelhacks.component';
import { ContactComponent } from './contact/contact.component';
import { PostsComponent } from './posts/posts.component';
import { CommentsComponent } from './comments/comments.component';
import { PostsService } from './services/posts.service';
import { CommentsService } from './services/comments.service';

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
    CommentsComponent
  ],
  imports: [
    BrowserModule, FormsModule,
    AppRoutingModule, HttpClientModule
  ],
  providers: [PostsService, CommentsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
