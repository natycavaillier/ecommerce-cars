import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-vender',
  templateUrl: './vender.component.html',
  styleUrls: ['./vender.component.css']
})
export class VenderComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  venderForm = this.fb.group({

  })

  onSubmit(){
    alert('Anúncio publicado!');
  }

  ngOnInit(): void {
  }

}
