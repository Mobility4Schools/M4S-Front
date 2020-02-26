import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'] 
  })
export class HomeComponent implements OnInit {
  planes:any[]=[
    {name:'Plan Basico',
      img:'assets/imagenes/plan1.jpg',
      desc:'Plan Basico de 3 meses por contrato',
    },
    {
      name:'Plan Medium',
      img:'assets/imagenes/plan2.jpg',
      desc:'Plan Medium de 6 meses',
    },
    {
      name:'Plan Pemiun',
      img:'assets/imagenes/plan3.jpg',
      desc:'Plan Premium de todo el año escolar',
    }
  
    ];

    constructor(private_config:NgbCarouselConfig){}


  ngOnInit() {
  }

}





