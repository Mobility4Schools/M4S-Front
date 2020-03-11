import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModeloVehiculoService {

  public url:string

  constructor(public _http:HttpClient) { 
    this.url = "http://127.0.0.1:8000/api/modeloVehiculo/store";
  }
  headers:HttpHeaders= new HttpHeaders({
    "Content-Type":"application/json"
  });
  saveModelVehiculo(data):Observable<any>{
    return this._http.post(this.url,JSON.stringify(data),{headers:this.headers});
  }

}
