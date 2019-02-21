import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';

import { LoginComponent } from 'src/app/components/login/login.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component'
import { AboutComponent } from '../app/components/about/about.component';
import { MinimalismComponent } from '../app/components/minimalism/minimalism.component';
import { TravelhacksComponent } from '../app/components/travelhacks/travelhacks.component';
import { ContactComponent } from '../app/components/contact/contact.component';

export const AppRoutes : Routes = [
{ path: '', component: LoginComponent },
{ path: '', redirectTo: 'home', pathMatch: 'full' },
{ path: 'home', component: HomeComponent },
 { path: 'aboutus', component: AboutComponent },
 { path: 'minimalism', component: MinimalismComponent },
 { path: 'travelhacks', component: TravelhacksComponent },
 { path: 'contact', component: ContactComponent },
];

//not sure if we need this?
//@NgModule({
 // imports: [RouterModule.forRoot(AppRoutes)],
 // exports: [RouterModule]
//})

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(AppRoutes);
