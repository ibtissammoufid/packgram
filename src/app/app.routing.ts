import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { ComponentsComponent } from './components/components.component';
import { ProfileComponent } from './examples/profile/profile.component';
import { SignupComponent } from './examples/signup/signup.component';
import { LandingComponent } from './examples/landing/landing.component';
import { NucleoiconsComponent } from './components/nucleoicons/nucleoicons.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { DispatchComponent } from './dispatch/dispatch.component';
import { SearchComponent } from './search/search.component';
import { ProfilComponent } from './profil/profil.component';
import { MyprofilComponent } from './myprofil/myprofil.component';
import { ReserveComponent } from './reserve/reserve.component';
import { AboutusComponent } from './aboutus/aboutus.component';

const routes: Routes =[
    { path: '', redirectTo: 'home', pathMatch: 'full' },//dyalna
    { path: 'component',             component: ComponentsComponent },
    { path: 'user-profile',     component: ProfileComponent },
    { path: 'signup',           component: SignupComponent },
    { path: 'landing',          component: LandingComponent },
    { path: 'login',          component: LoginComponent },//dyalna
    { path: 'home',          component: HomeComponent },//dyalna
    { path: 'register',          component: RegisterComponent },//dyalna
    { path: 'acceuil',          component: AcceuilComponent },//dyalna
    { path: 'dispatch',          component: DispatchComponent },//dyalna
    { path: 'search',          component: SearchComponent },//dyalna
    { path: 'profil',     component: ProfilComponent },//dyalna
    { path: 'myprofil',          component: MyprofilComponent },//dyalna
    { path: 'reserve',     component: ReserveComponent },//dyalna
    { path: 'about',     component: AboutusComponent },//dyalna
    { path: 'nucleoicons',      component: NucleoiconsComponent }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
      useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
