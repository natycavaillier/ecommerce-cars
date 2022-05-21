import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Carro } from 'src/app/models/carro';
import { CarrosService } from 'src/app/shared/services/carros/carros.service';

@Component({
  selector: 'app-vender',
  templateUrl: './vender.component.html',
  styleUrls: ['./vender.component.css']
})
export class VenderComponent implements OnInit {

  carro: Carro = {} as Carro;

  constructor(private fb: FormBuilder, private carrosService: CarrosService) { }

  venderForm = this.fb.group({
    modelo: ['', [Validators.required, Validators.minLength(5)]],
    descricao: ['', [Validators.required, Validators.minLength(10)]],
    imagem: ['', [Validators.required]],
    preco: ['', [Validators.required, Validators.min(1000)]],
    ano: ['', [Validators.required]],
    kmRodados: ['', [Validators.required]],
    localizacao: ['', [Validators.required]]
  })

  //#region Getters
  get modelo() {
    return this.venderForm.get('modelo');
  }
  get descricao() {
    return this.venderForm.get('descricao');
  }
  get imagem() {
    return this.venderForm.get('imagem');
  }
  get preco() {
    return this.venderForm.get('preco');
  }
  get ano() {
    return this.venderForm.get('ano');
  }
  get kmRodados() {
    return this.venderForm.get('kmRodados');
  }
  get localizacao() {
    return this.venderForm.get('localizacao');
  }
  //#endregion

  onSubmit(){
    this.carro.modelo = this.carro.modelo.toUpperCase();
    this.carro.descricao = this.carro.descricao.toUpperCase();
    this.carro.id = this.carrosService.getCarros().length + 1;
    this.carrosService.pushCarros(this.carro);
    alert(`Anúncio do carro ${this.carro.modelo} publicado!`);
  }

  ngOnInit(): void {
  }

}
