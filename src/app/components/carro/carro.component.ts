import { Component, Input, OnInit } from '@angular/core';
import { Carro } from 'src/app/models/carro';

@Component({
  selector: 'app-carro',
  templateUrl: './carro.component.html',
  styleUrls: ['./carro.component.css']
})
export class CarroComponent implements OnInit {

  //Propriedade de entrada
  @Input('dadoCarro') carro!: Carro;

  constructor() { }

  ngOnInit(): void {
  }

}
