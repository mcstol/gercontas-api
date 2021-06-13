import { Injectable } from '@nestjs/common';

@Injectable()
export class ContasService {
  //##################################################
  //teste de retornos

  listaAllContas = () => {
    return `{
      'energia':'CPFL',
      'Moradia':'Condominio',
      'Internet':'Claro'
  }`;
  };
  criaConta = (data) => {
    console.log(data);
  };

  //###################################################
  async listContas(): Promise<string> {
    return this.listaAllContas();
  }

  async createConta(data): Promise<any> {
    return this.criaConta(data);
  }
}
