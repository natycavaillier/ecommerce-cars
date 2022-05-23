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
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb:FormBuilder) { }
  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email, onlyCadastro]],
    senha: ['', [Validators.required, Validators.minLength(5)]],
  });

  get email () {
    return this.loginForm.get('email');
  }

  get senha () {
    return this.loginForm.get('senha');
  }

  onSubmit() {
    this.loginForm.reset();
    alert('Login feito com sucesso!');
  }

  ngOnInit(): void {
  }

}
