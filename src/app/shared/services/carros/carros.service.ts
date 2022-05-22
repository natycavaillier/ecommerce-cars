import { Injectable } from '@angular/core';
import { Carro, MarcaCarro } from 'src/app/models/carro';

@Injectable({
  providedIn: 'root'
})
export class CarrosService {

  private carros: Carro[] = [
    {
      id: 1,
      imagem: 'https://1.bp.blogspot.com/-63TSqz5WpzU/X8Amvcr9kKI/AAAAAAACzC4/DtJrroNty5UsFSJFkf81nriB9JJksr7QACLcBGAsYHQ/s1920/Honda%2BCivic%2B8.jpg',
      modelo: 'HONDA CIVIC',
      descricao: '1.5 16V TURBO GASOLINA TOURING 4P CVT',
      preco: 134990,
      ano: '2018/2019',
      kmRodados: 51300,
      localizacao: 'Ribeirão Preto, SP',
      cor: 'Preto',
      finalPlaca: 2,
      marca: MarcaCarro.HONDA
    },
    {
      id: 2,
      imagem: 'https://quatrorodas.abril.com.br/wp-content/uploads/2018/04/corolla_gli_2019.jpg?quality=70&strip=info',
      modelo: 'TOYOTA COROLLA',
      descricao: '2.0 VVT-IE FLEX ALTIS DIRECT SHIFT',
      preco: 149990,
      ano: '2020/2020',
      kmRodados: 13664,
      localizacao: 'Salvador, BA',
      cor: 'Prata',
      finalPlaca: 9,
      marca: MarcaCarro.TOYOTA
    },
    {
      id: 3,
      imagem: 'https://wallpaperaccess.com/full/2145000.jpg',
      modelo: 'HONDA FIT',
      descricao: '1.5 LX 16V FLEX 4P AUTOMÁTICO',
      preco: 75500,
      ano: '2017/2017',
      kmRodados: 46072,
      localizacao: 'São Paulo, SP',
      cor: 'Prata',
      finalPlaca: 9,
      marca: MarcaCarro.HONDA
    },
    {
      id: 4,
      imagem: 'https://fotos.jornaldocarro.estadao.com.br/uploads/2017/08/16155825/33285004.jpg',
      modelo: 'HYUNDAI CRETA',
      descricao: '1.6 16V FLEX PULSE PLUS AUTOMÁTICO',
      preco: 97990,
      ano: '2019/2020',
      kmRodados: 41900,
      localizacao: 'Barueri, SP',
      cor: 'Prata',
      finalPlaca: 9,
      marca: MarcaCarro.HONDA
    },
    {
      id: 5,
      imagem: 'https://1.bp.blogspot.com/--xj77uV_t5s/W-HvjTyoQWI/AAAAAAAALQo/rNpS7MAqK_YUG_ZvPezuKhXn5oU-l1KmACLcBGAs/s1600/Renault%2BKwid%2BOutsider%2B001.jpg',
      modelo: 'RENAULT KWID',
      descricao: '1.0 12V SCE FLEX ZEN MANUAL',
      preco: 45990,
      ano: '2019/2020',
      kmRodados: 33372,
      localizacao: 'São Paulo, SP',
      cor: 'Prata',
      finalPlaca: 9,
      marca: MarcaCarro.RENAULT
    },
    {
      id: 6,
      imagem: 'https://cdn.motor1.com/images/mgl/J4p1g/s1/hyundai-hb20-1.0-sense-2021-motor1.webp',
      modelo: 'HYUNDAI HB20',
      descricao: '1.6 COMFORT PLUS 16V FLEX 4P MANUAL',
      preco: 66500,
      ano: '2019/2019',
      kmRodados: 42800,
      localizacao: 'Praia Grande, SP',
      cor: 'Prata',
      finalPlaca: 9,
      marca: MarcaCarro.HYUNDAI
    },
    {
      id: 7,
      imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDVSySJBRUJ1utuUmRVbffg0gNjKG5Uwx1Pg&usqp=CAU',
      modelo: 'Honda Civic Type-R 2022',
      descricao: '2.0L turbo, 320 cv a 6500 rpm, 40,8 kgfm a 4500 rpm',
      preco: 184900,
      ano: '2022/2022',
      kmRodados: 300,
      localizacao: 'Araraquara, SP',
      cor: 'Beje',
      finalPlaca: 9,
      marca: MarcaCarro.HONDA
    },
  ];

  pushCarros(carro: Carro){
    this.carros.push(carro);
  }

  getCarros(): Carro[] {
    return this.carros;
  }

  getCarro(id: number) {
    return this.carros[id - 1];
  }

  constructor() { }
}
