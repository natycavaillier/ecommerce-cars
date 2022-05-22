export interface Carro {
    id: number;
    imagem: string;
    modelo: string;
    descricao: string;
    preco: number;
    ano: string;
    kmRodados: number;
    localizacao: string;
    cor: string;
    finalPlaca: number;
    marca: MarcaCarro;
}

export enum MarcaCarro {
    VOLKSWAGEN = 'volkswagen',
    HONDA = 'honda',
    FIAT = 'fiat',
    TOYOTA = 'toyota',
    HYUNDAI = 'hyundai',
    MITSUBISHI = 'mitsubishi',
    FORD = 'ford',
    CHEVROLET = 'chevrolet',
    RENAULT = 'renault'
}