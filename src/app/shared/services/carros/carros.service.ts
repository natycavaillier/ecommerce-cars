import { Injectable } from '@angular/core';
import { Carro } from 'src/app/models/carro';

@Injectable({
  providedIn: 'root'
})
export class CarrosService {

  private carros: Carro[] = [
    {
      imagem: 'https://img.freepik.com/vetores-gratis/carro-sedan-azul-isolado-no-branco-vector_53876-67375.jpg?t=st=1653005126~exp=1653005726~hmac=fed3fdb5c03fc566e9efbf8290f5bef8afc052f764787e4c57220f49b2672215&w=826',
      modelo: 'HONDA CIVIC',
      descricao: '1.5 16V TURBO GASOLINA TOURING 4P CVT',
      preco: 134990,
      ano: '2018/2019',
      kmRodados: 51300,
      localizacao: 'Barueri, SP'
    },
    {
      imagem: 'https://img.freepik.com/vetores-gratis/carro-sedan-azul-isolado-no-branco-vector_53876-67375.jpg?t=st=1653005126~exp=1653005726~hmac=fed3fdb5c03fc566e9efbf8290f5bef8afc052f764787e4c57220f49b2672215&w=826',
      modelo: 'TOYOTA COROLLA',
      descricao: '2.0 VVT-IE FLEX ALTIS DIRECT SHIFT',
      preco: 149990,
      ano: '2020/2020',
      kmRodados: 13664,
      localizacao: 'Salvador, BA'
    },
    {
      imagem: 'https://img.freepik.com/vetores-gratis/carro-sedan-azul-isolado-no-branco-vector_53876-67375.jpg?t=st=1653005126~exp=1653005726~hmac=fed3fdb5c03fc566e9efbf8290f5bef8afc052f764787e4c57220f49b2672215&w=826',
      modelo: 'HONDA FIT',
      descricao: '1.5 LX 16V FLEX 4P AUTOMÁTICO',
      preco: 75500,
      ano: '2017/2017',
      kmRodados: 46072,
      localizacao: 'São Paulo, SP'
    },
    {
      imagem: 'https://img.freepik.com/vetores-gratis/carro-sedan-azul-isolado-no-branco-vector_53876-67375.jpg?t=st=1653005126~exp=1653005726~hmac=fed3fdb5c03fc566e9efbf8290f5bef8afc052f764787e4c57220f49b2672215&w=826',
      modelo: 'HONDA CIVIC',
      descricao: '1.5 16V TURBO GASOLINA TOURING 4P CVT',
      preco: 134990,
      ano: '2018/2019',
      kmRodados: 51300,
      localizacao: 'Barueri, SP'
    },
    {
      imagem: 'https://img.freepik.com/vetores-gratis/carro-sedan-azul-isolado-no-branco-vector_53876-67375.jpg?t=st=1653005126~exp=1653005726~hmac=fed3fdb5c03fc566e9efbf8290f5bef8afc052f764787e4c57220f49b2672215&w=826',
      modelo: 'HONDA CIVIC',
      descricao: '1.5 16V TURBO GASOLINA TOURING 4P CVT',
      preco: 134990,
      ano: '2018/2019',
      kmRodados: 51300,
      localizacao: 'Barueri, SP'
    },
    {
      imagem: 'https://img.freepik.com/vetores-gratis/carro-sedan-azul-isolado-no-branco-vector_53876-67375.jpg?t=st=1653005126~exp=1653005726~hmac=fed3fdb5c03fc566e9efbf8290f5bef8afc052f764787e4c57220f49b2672215&w=826',
      modelo: 'HONDA CIVIC',
      descricao: '1.5 16V TURBO GASOLINA TOURING 4P CVT',
      preco: 134990,
      ano: '2018/2019',
      kmRodados: 51300,
      localizacao: 'Barueri, SP'
    },
    {
      imagem: 'https://img.freepik.com/vetores-gratis/carro-sedan-azul-isolado-no-branco-vector_53876-67375.jpg?t=st=1653005126~exp=1653005726~hmac=fed3fdb5c03fc566e9efbf8290f5bef8afc052f764787e4c57220f49b2672215&w=826',
      modelo: 'HONDA CIVIC',
      descricao: '1.5 16V TURBO GASOLINA TOURING 4P CVT',
      preco: 134990,
      ano: '2018/2019',
      kmRodados: 51300,
      localizacao: 'Barueri, SP'
    },
    {
      imagem: 'https://img.freepik.com/vetores-gratis/carro-sedan-azul-isolado-no-branco-vector_53876-67375.jpg?t=st=1653005126~exp=1653005726~hmac=fed3fdb5c03fc566e9efbf8290f5bef8afc052f764787e4c57220f49b2672215&w=826',
      modelo: 'HONDA CIVIC',
      descricao: '1.5 16V TURBO GASOLINA TOURING 4P CVT',
      preco: 134990,
      ano: '2018/2019',
      kmRodados: 51300,
      localizacao: 'Barueri, SP'
    },
    {
      imagem: 'https://img.freepik.com/vetores-gratis/carro-sedan-azul-isolado-no-branco-vector_53876-67375.jpg?t=st=1653005126~exp=1653005726~hmac=fed3fdb5c03fc566e9efbf8290f5bef8afc052f764787e4c57220f49b2672215&w=826',
      modelo: 'HONDA CIVIC',
      descricao: '1.5 16V TURBO GASOLINA TOURING 4P CVT',
      preco: 134990,
      ano: '2018/2019',
      kmRodados: 51300,
      localizacao: 'Barueri, SP'
    }
  ];

  getCarros(): Carro[] {
    return this.carros;
  }

  constructor() { }
}
