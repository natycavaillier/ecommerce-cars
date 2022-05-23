import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, ValidationErrors, Validators } from '@angular/forms';
import { Login } from 'src/app/models/login';
import { LoginService } from 'src/app/shared/services/login/login.service';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  constructor(private fb: FormBuilder, private loginService: LoginService) { }

  login: Login = {} as Login;

  cadastroForm = this.fb.group({
    nome: ['', [Validators.required, Validators.minLength(4)]],
    email: ['', [Validators.required, Validators.email]],
    senha: ['', [Validators.required, Validators.minLength(5)]],
    estado: ['', [Validators.required]],
    cidade: ['', [Validators.required]],
  });

 //#region Getters
  get nome() {
    return this.cadastroForm.get('nome');
  }

  get email() {
    return this.cadastroForm.get('email');
  }

  get senha() {
    return this.cadastroForm.get('senha');
  }

  get cidade() {
    return this.cadastroForm.get('cidade');
  }

  get cep() {
    return this.cadastroForm.get('cep');
  }

  get estado() {
    return this.cadastroForm.get('estado');
  }
  //#endregion

  getPrimeiroNome(nome: string) {
    let primeiroNome = nome.split(' ');
    return primeiroNome[0];
  }

  onSubmit() {
    this.loginService.pushLogin(this.login);
    console.log(this.loginService.getLogins());
    alert(`Cadastro feito com sucesso! Bem-vindo(a) ${this.loginService.getPrimeiroNome(this.login.nome)}`);
  }

  ngOnInit(): void {
  }

}


