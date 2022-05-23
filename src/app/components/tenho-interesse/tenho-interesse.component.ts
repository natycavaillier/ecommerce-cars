import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Carro } from 'src/app/models/carro';
import { CarrosService } from 'src/app/shared/services/carros/carros.service';

@Component({
  selector: 'app-tenho-interesse',
  templateUrl: './tenho-interesse.component.html',
  styleUrls: ['./tenho-interesse.component.css']
})
export class TenhoInteresseComponent implements OnInit {


  carro: Carro = {} as Carro;
  id?: number;
  private inscricao: any;

  constructor(private route: ActivatedRoute, private carroService: CarrosService,) { }

  ngOnInit(): void {
    this.inscricao = this.route.params.subscribe(params => {

      this.id = +params['id'];
      this.carro = this.carroService.getCarro(this.id);
    })
  }
  ngOnDestroy(): void {
    this.inscricao.unsubscribe()
  }

}
