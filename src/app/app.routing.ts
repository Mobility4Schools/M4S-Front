import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {HomeComponent} from './components/home/home.component';
import {C404Component} from './components/c404/c404.component';
import {LoginComponent} from './components/login/login.component';
import {CuentaComponent} from './components/cuenta/cuenta.component';
import {ModeloVehiculoComponent} from './components/modelo-vehiculo/modelo-vehiculo.component';

const appRoutes:Routes=[
    {path:'',component:HomeComponent},
    {path:'home',component:HomeComponent},
    {path:'login',component:LoginComponent},
    {path:'cuenta',component:CuentaComponent},
    {path:'modeloVehiculo',component:ModeloVehiculoComponent},
    {path:'**',component:C404Component}
]
export const appRoutingProviders:any[] = [];
export const routing:ModuleWithProviders =RouterModule.forRoot(appRoutes);
