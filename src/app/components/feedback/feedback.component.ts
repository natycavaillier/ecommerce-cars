import { Component, OnInit } from '@angular/core';
import {
 
  FormBuilder,
  Validators

} from '@angular/forms';


@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  constructor(private fb: FormBuilder) {}

  feedbackForm = this.fb.group({
    nome: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email,]],
    feedback: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(150)]],
    comentario:['', [Validators.required]],
    erro:['',[Validators.required]],
    questionamento:['', [Validators.required]]
  });

  get nome() {
    return this.feedbackForm.get('nome');
  }

  get email() {
    return this.feedbackForm.get('email');
  }

  get feedback() {
    return this.feedbackForm.get('feedback');
  }

  get comentario() {
    return this.feedbackForm.get('comentario');
  }

  get erro() {
    return this.feedbackForm.get('erro');
  }

  get questionamento() {
    return this.feedbackForm.get('questionamento');
  }

  onSubmit() {
    alert('Obrigado por seu feedback!');
    
  }

  ngOnInit(): void {}
}

  
