import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Carro } from 'src/app/models/carro';
import { CarrosService } from 'src/app/shared/services/carros/carros.service';

@Component({
  selector: 'app-negociar',
  templateUrl: './negociar.component.html',
  styleUrls: ['./negociar.component.css']
})
export class NegociarComponent implements OnInit, OnDestroy {

  constructor(private fb: FormBuilder, private rota: ActivatedRoute, private carrosService: CarrosService, ) { }

  carro: Carro = {} as Carro;
  id?: number;
  private inscricao: any;

  negociarForm = this.fb.group({
    nome: ['', [Validators.required, Validators.minLength(4)]],
    email: ['', [Validators.required, Validators.email]],
    senha: ['', [Validators.required, Validators.minLength(5)]],
  })

  get nome() {
    return this.negociarForm.get('nome');
  }
  get email() {
    return this.negociarForm.get('email');
  }
  get senha() {
    return this.negociarForm.get('senha');
}

  ngOnInit(): void {
    this.inscricao = this.rota.params.subscribe(params => {

      this.id = +params['id'];
      this.carro = this.carrosService.getCarro(this.id);
    })
  }

  ngOnDestroy(): void {
    this.inscricao.unsubscribe()
  }

  onSubmit(){
    
  }

  

}
