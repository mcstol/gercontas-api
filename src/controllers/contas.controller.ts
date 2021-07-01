import {
  Controller,
  Get,
  Param,
  Body,
  Post,
  Put,
  Patch,
  Delete,
} from '@nestjs/common';

import { ContasService } from '../services/contas.service';
import { bills } from '../models/contas.entity';
import { ContaDTO } from '../views/conta.interface';

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

  @Put(':id')
  async updateConta(
    @Param('id') id: string,
    @Body() data: ContaDTO,
  ): Promise<bills> {
    return this.contasService.updateConta(id, data);
  }

  @Patch(':id')
  async updateDataConta(
    @Param('id') id: string,
    @Body() data: ContaDTO,
  ): Promise<bills> {
    return this.contasService.updateDataConta(id, data);
  }

  @Delete(':id')
  async deleteConta(@Param('id') id: string): Promise<bills> {
    return this.contasService.deleteConta(id);
  }
}
