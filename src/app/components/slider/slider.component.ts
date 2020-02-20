import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  planes:any[]=[
  {name:'Plan Basico',
    img:'assets/imagenes/plan1.jpg',
    desc:'Plna Basico de 3 meses por contrato',
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
