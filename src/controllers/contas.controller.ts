import { Controller, Get, Param, Body, Post } from '@nestjs/common';

import { ContasService } from '../services/contas.service';
import { bills } from '../models/contas.entity';
import { ContaDTO } from '../models/conta.interface';

@Controller('contas')
export class ContasController {
  constructor(private contasService: ContasService) {}

  @Get()
  async listContas(): Promise<bills[]> {
    return this.contasService.listContas();
  }

  @Get(':id')
  async getConta(@Param('id') id: string): Promise<bills> {
    return this.contasService.getConta(id);
  }

  @Post()
  async createConta(@Body() data: ContaDTO) {
    return this.contasService.createConta(data);
  }

  // @Put(':id')
  // async updateCliente(
  //   @Param('id') id: string,
  //   @Body() data: ClienteDTO,
  // ): Promise<Cliente> {
  //   return this.clientesService.updateCliente(id, data);
  // }

  // @Patch(':id')
  // async updateDataCliente(
  //   @Param('id') id: string,
  //   @Body() data: ClienteDTO,
  // ): Promise<Cliente> {
  //   return this.clientesService.updateDataCliente(id, data);
  // }

  // @Delete(':id')
  // async deleteCliente(@Param('id') id: string): Promise<Cliente> {
  //   return this.clientesService.deleteCliente(id);
  // }
}
