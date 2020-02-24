import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//Bootstrap
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { C404Component } from './components/c404/c404.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { SliderComponent } from './components/slider/slider.component';
import { BodyComponent } from './components/body/body.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    C404Component,
    FooterComponent,
    HeaderComponent,
    SliderComponent,
    BodyComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
