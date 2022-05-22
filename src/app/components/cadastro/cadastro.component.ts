import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, ValidationErrors, Validators } from '@angular/forms';


function onlyCadastro(control: AbstractControl): ValidationErrors | null {
  if (Validators.email(control) === null && Validators.required(control) === null) {
    if(!control.value.includes("@gmail.com")) {
      return {onlyCadastro: true};
    }
  }

  return null;
}


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  constructor(private fb: FormBuilder) { }
  cadastroForm = this.fb.group({
    nome: ['', [Validators.required, Validators.minLength(4)]],
    email: ['', [Validators.required, Validators.email, onlyCadastro]],
    senha: ['', [Validators.required, Validators.minLength(5)]],
    cidade: ['', [Validators.required]],
    cep: ['', [Validators.required, Validators.minLength(8)]]
  });


  get nome () {
    return this.cadastroForm.get('nome');
  }

  get email () {
    return this.cadastroForm.get('email');
  }

  get senha () {
    return this.cadastroForm.get('senha');
  }

  get cidade () {
    return this.cadastroForm.get('cidade');
  }

  get cep () {
    return this.cadastroForm.get('cep');
  }

  onSubmit() {
    this.cadastroForm.reset();
    alert('Cadastro feito com sucesso!');
   
  }

  ngOnInit(): void {
  }

}


