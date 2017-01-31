import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AppRoutingModule} from './app.routing';
import { AppComponent }  from './app.component';
import {HomeComponent} from './components/home/home.component';
import {ProfileComponent} from './components/profile/profile.component';
import {Auth} from './services/auth.service';
import {AUTH_PROVIDERS} from 'angular2-jwt';
import {AuthGuard} from './auth.guard';

@NgModule({
  imports:      [ BrowserModule, AppRoutingModule ],
  declarations: [ AppComponent,HomeComponent,ProfileComponent ],
  bootstrap:    [ AppComponent ],
  providers:[AUTH_PROVIDERS, Auth,AuthGuard]
})
export class AppModule { }
