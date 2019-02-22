import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRouting } from 'src/app/app-routing.module';
import { FormsModule} from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { LoginComponent } from './components/login/login.component';
import { AppComponent } from './app.component';
import { SubscribeFormComponent } from './components/subscribe-form/subscribe-form.component';
import { SubscribeListComponent } from './components/subscribe-list/subscribe-list.component';
import { AboutComponent } from './components/about/about.component';
import { MinimalismComponent } from './components/minimalism/minimalism.component';
import { TravelhacksComponent } from './components/travelhacks/travelhacks.component';
import { ContactComponent } from './components/contact/contact.component';
import { PostsComponent } from './components/posts/posts.component';
import { CommentsComponent } from './components/comments/comments.component';
import { CommentsService } from './components/comments/comments.service';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { RootComponent } from './components/root/root.component';
import { SubmitPostService } from './components/posts/submit-post.service';



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
    LoginComponent,
  ],
  imports: [
    BrowserModule, FormsModule,
    AppRouting, HttpClientModule
  ],
  providers: [SubmitPostService, CommentsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
