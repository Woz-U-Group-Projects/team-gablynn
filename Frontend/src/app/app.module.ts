import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SubscribeFormComponent } from './subscribe-form/subscribe-form.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { FooterComponent } from './footer/footer.component';
import { SubscribeListComponent } from './subscribe-list/subscribe-list.component';

@NgModule({
  declarations: [
    AppComponent,
    SubscribeFormComponent,
    SubscribeComponent,
    FooterComponent,
    SubscribeListComponent
  ],
  imports: [
    BrowserModule, FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
