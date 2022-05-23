import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
 

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  constructor(private fb: FormBuilder) {}

  feedbackForm = this.fb.group({
    nome: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    feedback: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(150)]]
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

  onSubmit() {
    this.feedbackForm.reset();
    alert('Obrigado por seu feedback!');
    
  }

  ngOnInit(): void {}


  
}