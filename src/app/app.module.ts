import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { routing, appRoutingProviders } from './app.routing';
import {HttpClientModule} from '@angular/common/http';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { C404Component } from './components/c404/c404.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { CuentaComponent } from './components/cuenta/cuenta.component';
import { compileNgModuleFromRender2 } from '@angular/compiler/src/render3/r3_module_compiler';
import { ModeloVehiculoComponent } from './components/modelo-vehiculo/modelo-vehiculo.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    C404Component,
    FooterComponent,
    HeaderComponent,
    LoginComponent,
    CuentaComponent,
    ModeloVehiculoComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    routing
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
