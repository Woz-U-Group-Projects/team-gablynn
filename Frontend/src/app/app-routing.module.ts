import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component'
import { AboutComponent } from '../app/components/about/about.component';
import { MinimalismComponent } from '../app/components/minimalism/minimalism.component';
import { TravelhacksComponent } from '../app/components/travelhacks/travelhacks.component';
import { ContactComponent } from '../app/components/contact/contact.component';

const routes : Routes = [
{ path: '', redirectTo: 'home', pathMatch: 'full' },
{ path: 'home', component: HomeComponent },
 { path: 'aboutus', component: AboutComponent },
 { path: 'minimalism', component: MinimalismComponent },
 { path: 'travelhacks', component: TravelhacksComponent },
 { path: 'contact', component: ContactComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
