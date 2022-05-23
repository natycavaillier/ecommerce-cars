import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Carro } from 'src/app/models/carro';
import { CarrosService } from 'src/app/shared/services/carros/carros.service';
import { GeolocationService } from 'src/app/shared/services/geolocation/geolocation.service';
import { WeatherApiService, WeatherData } from 'src/app/shared/services/weather-api/weather-api.service';

@Component({
  selector: 'app-vender', 
  templateUrl: './vender.component.html',
  styleUrls: ['./vender.component.css']
})
export class VenderComponent implements OnInit {
  constructor(private fb: FormBuilder, private carrosService: CarrosService, private geolocationService: GeolocationService,
    private weatherApiService: WeatherApiService) { }

  carro: Carro = {} as Carro;
  error = false;

  venderForm = this.fb.group({
    modelo: ['', [Validators.required, Validators.minLength(5)]],
    descricao: ['', [Validators.required, Validators.minLength(10)]],
    imagem: ['', [Validators.required]],
    preco: ['', [Validators.required, Validators.min(1000)]],
    ano: ['', [Validators.required]],
    kmRodados: ['', [Validators.required]],
    cor: ['', [Validators.required]],
    finalPlaca: ['', [Validators.required, Validators.maxLength(1)]],
    marca: ['',],
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
  get cor() {
    return this.venderForm.get('cor');
  }
  get finalPlaca() {
    return this.venderForm.get('finalPlaca');
  }
  get marca() {
    return this.venderForm.get('marca')
  }
  //#endregion

  onSubmit() {
    this.carro.modelo = this.carro.modelo.toUpperCase();
    this.carro.descricao = this.carro.descricao.toUpperCase();
    this.carro.id = this.carrosService.getCarros().length + 1;
    this.carrosService.pushCarros(this.carro);
    alert(`Anúncio do carro ${this.carro.modelo} publicado!`);
  }

  ngOnInit(): void {
    this.geolocationService.getPosition().subscribe({
      next: (coords) => {
        //Cria um observable novo de clima com base nas coordenadas do serviço
        this.weatherApiService.getWeatherData(coords).subscribe({
          next: (localizacao) => {
            this.carro.localizacao = localizacao;
          }
        })
      },
      error: (erro) => {
        this.error = true;
      }
    });
  }

}
