import { Injectable } from '@angular/core';
import { Carro, MarcaCarro } from 'src/app/models/carro';

@Injectable({
  providedIn: 'root'
})
export class CarrosService {

  private carros: Carro[] = [
    {
      id: 1,
      imagem: 'https://quatrorodas.abril.com.br/wp-content/uploads/2022/04/honda-civic-seda-e1650568274124.jpg',
      modelo: 'HONDA CIVIC',
      descricao: '1.5 16V TURBO GASOLINA TOURING 4P CVT',
      preco: 134990,
      ano: '2018/2019',
      kmRodados: 51300,
      localizacao: 'Barueri, SP',
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
      marca: MarcaCarro.TOYOTA
    },
    {
      id: 3,
      imagem: 'https://guiaauto.com.br/wp-content/uploads/2021/08/Honda-Fit-PCD-2022-2-750x460.jpg',
      modelo: 'HONDA FIT',
      descricao: '1.5 LX 16V FLEX 4P AUTOMÁTICO',
      preco: 75500,
      ano: '2017/2017',
      kmRodados: 46072,
      localizacao: 'São Paulo, SP',
      marca: MarcaCarro.HONDA
    },
    {
      id: 4,
      imagem: 'https://carro.blog.br/wp-content/uploads/2018/11/creta.jpeg',
      modelo: 'HYUNDAI CRETA',
      descricao: '1.6 16V FLEX PULSE PLUS AUTOMÁTICO',
      preco: 97990,
      ano: '2019/2020',
      kmRodados: 41900,
      localizacao: 'Barueri, SP',
      marca: MarcaCarro.HYUNDAI
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
      marca: MarcaCarro.RENAULT
    },
    {
      id: 6,
      imagem: 'https://motorshow.com.br/wp-content/uploads/sites/2/2021/03/09_hb20_premium.jpg',
      modelo: 'HYUNDAI HB20',
      descricao: '1.6 COMFORT PLUS 16V FLEX 4P MANUAL',
      preco: 66500,
      ano: '2019/2019',
      kmRodados: 42800,
      localizacao: 'Praia Grande, SP',
      marca: MarcaCarro.HYUNDAI
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
