import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-negociar',
  templateUrl: './negociar.component.html',
  styleUrls: ['./negociar.component.css']
})
export class NegociarComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  negociarForm = this.fb.group({
    nome: ['', [Validators.required, Validators.minLength(4)]],
    email: ['', [Validators.required, Validators.email]],
    telefone: ['', [Validators.required]],
    mensagem: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(100)]]

  })

  get nome() {
    return this.negociarForm.get('nome');
  }
  get email() {
    return this.negociarForm.get('email');
  }
  get telefone() {
    return this.negociarForm.get('telefone');
  }
  get mensagem() {
    return this.negociarForm.get('mensagem');
  }

  onSubmit(){
    alert('Mensagem enviada!')
  }

  ngOnInit(): void {
  }

}
