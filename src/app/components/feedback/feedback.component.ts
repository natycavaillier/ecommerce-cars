import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  ValidationErrors,
  Validators,
} from '@angular/forms';

function onlySoulcode(control: AbstractControl): ValidationErrors | null {
  if(Validators.email(control) === null && Validators.required(control) === null) {
    if (!control.value.includes('@soulcodeacademy.org')) {
      return { onlysoulcode: true };
    }
  }
  return null;
}

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  constructor(private fb: FormBuilder) {}

  feddbackForm = this.fb.group({
    nome: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email, onlySoulcode]],
    feedback: ['', [Validators.required, Validators.maxLength(150)]],
  });

  get nome() {
    return this.feedbackForm.get('nome');
  }

  get email() {
    return this.feedbackForm.get('email');
  }

  get feddback() {
    return this.feedbackForm.get('feedback');
  }

  onSubmit() {
    alert('Obrigado por seu feedback!');
    console.log(this.feedbackForm.value);
  }

  ngOnInit(): void {}
}

  ngOnInit(): void {
  }
}
