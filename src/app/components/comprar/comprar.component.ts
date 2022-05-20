import { Component, OnInit } from '@angular/core';
import { Carro } from 'src/app/models/carro';
import { CarrosService } from 'src/app/shared/services/carros/carros.service';

@Component({
  selector: 'app-comprar',
  templateUrl: './comprar.component.html',
  styleUrls: ['./comprar.component.css']
})
export class ComprarComponent implements OnInit {

  carros: Carro[] = [];


  constructor(private carrosService: CarrosService) { }

  ngOnInit(): void {
    this.carros = this.carrosService.getCarros();
  }

}
