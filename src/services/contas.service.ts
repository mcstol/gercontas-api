import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { bills } from 'src/models/contas.entity';
import { ContaDTO } from '../views/conta.interface';

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

  async updateConta(id: string, data: ContaDTO): Promise<bills> {
    await this.contasRepository.findOneOrFail(id);
    await this.contasRepository.update(id, data);
    return this.contasRepository.findOne(id);
  }

  async updateDataConta(id: string, data: ContaDTO): Promise<bills> {
    await this.contasRepository.findOneOrFail(id);
    await this.contasRepository.update(id, data);
    return this.contasRepository.findOne(id);
  }

  async deleteConta(id: string): Promise<bills> {
    const clienteDestoyer = this.contasRepository.findOne(id);
    await this.contasRepository.delete(id);
    return clienteDestoyer;
  }
}
