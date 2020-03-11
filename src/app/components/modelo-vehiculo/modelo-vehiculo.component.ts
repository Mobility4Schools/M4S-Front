import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import {ModeloVehiculoService} from '../../services/modelo-vehiculo.service';

@Component({
  selector: 'app-modelo-vehiculo',
  templateUrl: './modelo-vehiculo.component.html',
  styleUrls: ['./modelo-vehiculo.component.scss']
})
export class ModeloVehiculoComponent implements OnInit {

  public formModelVehiculo = new FormGroup({ 
    mv_nombre: new FormControl('',[
      Validators.required
    ]),
    mv_nroAsientos: new FormControl(''),
    mv_nroPasajeros: new FormControl(''),
    id_marcas: new FormControl(''),
    id_tVehiculo: new FormControl('')
  });

  constructor(private _modeloVehiculoService:ModeloVehiculoService) { }
  
  ngOnInit() {
  }

  saveModelVehiculo(form){
    
    let obj=form.value;
    obj.mv_status="1";
    obj.usuario_create =1;
    obj.usuario_update=1;
    this._modeloVehiculoService.saveModelVehiculo(obj).subscribe(
      result=>{
        console.log(result);
      },
      error=>{  
        console.log(error);
      }
    );
    console.log(obj);
  }

}
