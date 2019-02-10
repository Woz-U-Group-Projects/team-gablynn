import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { MinimalismComponent } from './minimalism/minimalism.component';
import { TravelhacksComponent } from './travelhacks/travelhacks.component';
import { ContactComponent } from './contact/contact.component';

const routes : Routes = [
 { path: '', redirectTo: 'aboutus', pathMatch: 'full' },
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
