import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { bills } from 'src/models/contas.entity';
import { ContaDTO } from '../models/conta.interface';

@Injectable()
export class ContasService {
  constructor(
    @InjectRepository(bills) private contasRepository: Repository<bills>,
  ) {}

  async listContas(): Promise<bills[]> {
    return this.contasRepository.find();
  }
  async getConta(id: string): Promise<bills> {
    return this.contasRepository.findOneOrFail(id);
  }
  async createConta(data: ContaDTO): Promise<bills> {
    return this.contasRepository.save(data);
  }

  // async updateCliente(id: string, data: ClienteDTO): Promise<Cliente> {
  //   await this.clientesRepository.findOneOrFail(id);
  //   await this.clientesRepository.update(id, data);
  //   return this.clientesRepository.findOne(id);
  // }

  // async updateDataCliente(id: string, data: ClienteDTO): Promise<Cliente> {
  //   await this.clientesRepository.findOneOrFail(id);
  //   await this.clientesRepository.update(id, data);
  //   return this.clientesRepository.findOne(id);
  // }

  // async deleteCliente(id: string): Promise<Cliente> {
  //   const clienteDestoyer = this.clientesRepository.findOne(id);
  //   await this.clientesRepository.delete(id);
  //   return clienteDestoyer;
  // }
}
