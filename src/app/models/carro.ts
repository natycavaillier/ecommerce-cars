import { WeatherData } from "../shared/services/weather-api/weather-api.service";

export interface Carro {
    id: number;
    imagem: string;
    modelo: string;
    descricao: string;
    preco: number;
    ano: string;
    kmRodados: number;
    localizacao: WeatherData;
    cor: string;
    finalPlaca: number;
    marca: MarcaCarro;
}

export enum MarcaCarro {
    VOLKSWAGEN = 'Volkswagen',
    HONDA = 'Honda',
    FIAT = 'Fiat',
    TOYOTA = 'Toyota',
    HYUNDAI = 'Hyundai',
    MITSUBISHI = 'Mitsubishi',
    FORD = 'Ford',
    CHEVROLET = 'Chevrolet',
    RENAULT = 'Renault'
}