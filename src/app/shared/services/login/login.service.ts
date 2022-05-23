import { Injectable } from '@angular/core';
import { Login } from 'src/app/models/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor() { }

  private logins: Login[] = [
    {
      nome: 'Dev Administrador',
      email: 'admin@soulcars.com',
      senha: 'admin123',
      estado: 'Bahia',
      cidade: 'Salvador'
    }
  ];

  getLogins(): Login[] {
    return this.logins;
  }

  pushLogin(login: Login) {
    this.logins.push(login);
  }

  getLogin(email: string) {
    return this.logins.find(login => login.email == email);
  }

  buscaLogin(email: string) {
    if(this.logins.find(login => login.email == email)){
      return true;
    }else{
      return false;
    }
  }

  getPrimeiroNome(nome: string) {
    let primeiroNome = nome.split(' ');
    return primeiroNome[0];
  }

  comparaSenha(senha: string) {
    if(this.logins.find(login => login.senha == senha)){
      return true;
    }else{
      return false;
    }
  }
}
