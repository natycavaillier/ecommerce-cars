import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Carro } from 'src/app/models/carro';
import { CarrosService } from 'src/app/shared/services/carros/carros.service';
import { LoginService } from 'src/app/shared/services/login/login.service';

@Component({
  selector: 'app-negociar',
  templateUrl: './negociar.component.html',
  styleUrls: ['./negociar.component.css']
})
export class NegociarComponent implements OnInit, OnDestroy {

  constructor(private fb: FormBuilder, private rota: ActivatedRoute, private router: Router, private carrosService: CarrosService, private loginService: LoginService) { }


  carro: Carro = {} as Carro;
  id?: number;
  private inscricao: any;
  loginEmail: string = '';
  loginSenha: string = '';

  negociarForm = this.fb.group({
    nome: ['', [Validators.required, Validators.minLength(4)]],
    email: ['', [Validators.required, Validators.email]],
    senha: ['', [Validators.required, Validators.minLength(5)]],
  })

  //#region Getters
  get nome() {
    return this.negociarForm.get('nome');
  }
  get email() {
    return this.negociarForm.get('email');
  }
  get senha() {
    return this.negociarForm.get('senha');
  }
  //#endregion

  ngOnInit(): void {
    this.inscricao = this.rota.params.subscribe(params => {

      this.id = +params['id'];
      this.carro = this.carrosService.getCarro(this.id);
    })
  }

  ngOnDestroy(): void {
    this.inscricao.unsubscribe()
  }

  goToTenhoInteresse(){
    this.router.navigate(['/comprar/negociar', this.carro.id, 'interesse']);
  }

  onSubmit() {
    if(this.loginService.buscaLogin(this.loginEmail)){
      if(this.loginService.comparaSenha(this.loginSenha)){
        this.goToTenhoInteresse();
      }else{
        alert(`Senha inválida`);
      }
    }else{
      alert(`Usuário inexistente, crie uma conta e volte aqui!`);
    }
  }
}
