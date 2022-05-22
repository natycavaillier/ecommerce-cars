import { Component, OnDestroy, OnInit } from '@angular/core';
import { Carro, MarcaCarro } from 'src/app/models/carro';
import { CarrosService } from 'src/app/shared/services/carros/carros.service';

@Component({
  selector: 'app-comprar',
  templateUrl: './comprar.component.html',
  styleUrls: ['./comprar.component.css']
})
export class ComprarComponent implements OnInit, OnDestroy {

  inputModelo = '';
  carros: Carro[] = [];
  marca!: MarcaCarro;


  constructor(private carrosService: CarrosService) { }

  // getMarca(marca: string) {
  //   return this.carros.filter((carro): any => {
  //     if(carro.marca == marca){
  //       return carro.marca;
  //     }
  //   });
  // }

  buscarModelo(modelo: string){
    this.carros = this.carrosService.getCarros();
    modelo = modelo.toUpperCase();
    this.carros = this.carros.filter(carro => carro.modelo == modelo);
  }

  onMarca(marca: string){
    this.carros = this.carrosService.getCarros();
    this.carros = this.carros.filter(carro => carro.marca == marca);
  }

  ngOnInit(): void {
    this.carros = this.carrosService.getCarros();
  }

  ngOnDestroy(): void {
    this.carros = this.carrosService.getCarros();
  }

}
