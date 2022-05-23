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
      localizacao: {
        sys: {
          country: 'BR'
        },
        name: 'Barueri'
      },
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
      localizacao: {
        sys: {
          country: 'BR'
        },
        name: 'Barueri'
      },
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
      localizacao: {
        sys: {
          country: 'BR'
        },
        name: 'Barueri'
      },
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
      localizacao: {
        sys: {
          country: 'BR'
        },
        name: 'Barueri'
      },
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
      localizacao: {
        sys: {
          country: 'BR'
        },
        name: 'Barueri'
      },
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
      localizacao: {
        sys: {
          country: 'BR'
        },
        name: 'Barueri'
      },
      cor: 'Prata',
      finalPlaca: 9,
      marca: MarcaCarro.HYUNDAI
    },
    {
      id: 7,
      imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDVSySJBRUJ1utuUmRVbffg0gNjKG5Uwx1Pg&usqp=CAU',
      modelo: 'HONDA CIVIC TYPE-R 2022',
      descricao: '2.0L TURBO, 320 CV C 6500 RPM, 40,8 KGFM A 4500 RPM',
      preco: 184900,
      ano: '2022/2022',
      kmRodados: 300,
      localizacao: {
        sys: {
          country: 'BR'
        },
        name: 'Barueri'
      },
      cor: 'Bege',
      finalPlaca: 9,
      marca: MarcaCarro.HONDA
    },
    {
      id: 8,
      imagem: 'https://cdn.revendamais.com.br/FC/3733/3423753_2_W_8d20187e72.jpg',
      modelo: 'VOLKSWAGEN AMAROK 2022',
      descricao: '2.0 HIGHLINE 4X4 CD 16V TURBO INTERCOOLER DIESEL 4P AUTOMÁTICO',
      preco: 348900,
      ano: '2021/2022',
      kmRodados: 0,
      localizacao: {
        sys: {
          country: 'Brasil'
        },
        name: 'São Bernardo do Campo, SP'
      },
      cor: 'Cinza',
      finalPlaca: 9,
      marca: MarcaCarro.VOLKSWAGEN
    },
    {
    id: 9,
      imagem: 'https://s2.glbimg.com/AS0jGJNFUc6-IOq-CyRlAUEOcnk=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2022/K/C/vC6yQdTDAXA4Be2lhI4A/ccac3f88-57ca-4b75-9527-720fa7aa1df0-medium.png',
      modelo: 'VOLKSWAGEN AMAROK 2022',
      descricao: '2.0 HIGHLINE 4X4 CD 16V TURBO INTERCOOLER DIESEL 4P AUTOMÁTICO',
      preco: 348900,
      ano: '2021/2022',
      kmRodados: 0,
      localizacao: {
        sys: {
          country: 'Brasil'
        },
        name: 'São Bernardo do Campo, SP'
      },
      cor: 'Preto',
      finalPlaca: 9,
      marca: MarcaCarro.VOLKSWAGEN
    },
    {
      id: 10,
        imagem: 'https://img2.icarros.com/dbimg/imgnoticia/4/22349_1',
        modelo: 'VOLKSWAGEN AMAROK 2022',
        descricao: '2.0 HIGHLINE 4X4 CD 16V TURBO INTERCOOLER DIESEL 4P AUTOMÁTICO',
        preco: 348900,
        ano: '2021/2022',
        kmRodados: 0,
        localizacao: {
          sys: {
            country: 'Brasil'
          },
          name: 'São Bernardo do Campo, SP'
        },
        cor: 'Azul',
        finalPlaca: 9,
        marca: MarcaCarro.VOLKSWAGEN
      },
      {
        id: 11,
          imagem: 'https://carros2021.com.br/wp-content/uploads/2021/09/traseira-volkswagen-t-cross.jpg',
          modelo: 'VOLKSWAGEN NIVUS 2022',
          descricao: '2.0 HIGHLINE 4X4 CD 16V TURBO INTERCOOLER DIESEL 4P AUTOMÁTICO',
          preco: 148900,
          ano: '2021/2022',
          kmRodados: 0,
          localizacao: {
            sys: {
              country: 'Brasil'
            },
            name: 'Santos, SP'
          },
          cor: 'Orange',
          finalPlaca: 9,
          marca: MarcaCarro.VOLKSWAGEN
        },
        {
          id: 12,
            imagem: 'https://cdn.motor1.com/images/mgl/Ok3MB/s4/volkswagen-voyage-2022.jpg',
            modelo: 'VOLKSWAGEN VOYAGE 2021',
            descricao: '1.6 MSI TOTALFLEX 4P MANUAL',
            preco: 148900,
            ano: '2021/2022',
            kmRodados: 0,
            localizacao: {
              sys: {
                country: 'Brasil'
              },
              name: 'Santos, SP'
            },
            cor: 'Cinza',
            finalPlaca: 9,
            marca: MarcaCarro.VOLKSWAGEN
          },
          {
            id: 13,
              imagem: 'https://fotos.jornaldocarro.estadao.com.br/uploads/2018/10/30114616/41757831-1160x773.jpg',
              modelo: 'VOLKSWAGEN VOYAGE 2022',
              descricao: '1.6 MSI TOTALFLEX 4P MANUAL',
              preco: 89390,
              ano: '2022/2022',
              kmRodados: 0,
              localizacao: {
                sys: {
                  country: 'Brasil'
                },
                name: 'Contagem, MG'
              },
              cor: 'Vermelho',
              finalPlaca: 9,
              marca: MarcaCarro.VOLKSWAGEN
            },
            {
              id: 14,
                imagem: 'https://photo-b2b-autoaction.storage.googleapis.com/autoaction_prod/9f184e30-775d-7f98-96c0-ed951d2591ab-04jpg.jpg',
                modelo: 'Honda Civic 2021',
                descricao: '2.0 HIGHLINE 4X4 CD 16V TURBO INTERCOOLER DIESEL 4P AUTOMÁTICO',
                preco: 148900,
                ano: '2021/2022',
                kmRodados: 0,
                localizacao: {
                  sys: {
                    country: 'Brasil'
                  },
                  name: 'Santos, SP'
                },
                cor: 'Orange',
                finalPlaca: 9,
                marca: MarcaCarro.VOLKSWAGEN
              },
              {
                id: 15,
                  imagem: 'https://www.automaistv.com.br/wp-content/uploads/2019/11/honda_city_63.jpg',
                  modelo: 'HONDA CITY 2021',
                  descricao: '2.0 HIGHLINE 4X4 CD 16V TURBO INTERCOOLER DIESEL 4P AUTOMÁTICO',
                  preco: 148900,
                  ano: '2021/2022',
                  kmRodados: 0,
                  localizacao: {
                    sys: {
                      country: 'Brasil'
                    },
                    name: 'Santos, SP'
                  },
                  cor: 'Azul',
                  finalPlaca: 9,
                  marca: MarcaCarro.VOLKSWAGEN
                }
                
      
  ];

  pushCarros(carro: Carro) {
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
