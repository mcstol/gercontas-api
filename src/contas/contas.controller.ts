import { Body, Controller, Get, Post } from '@nestjs/common';
import { ContasService } from './contas.service';
@Controller('contas')
export class ContasController {
  constructor(private contasService: ContasService) {}

  @Get()
  async getListAllContas(): Promise<string> {
    return this.contasService.listContas();
  }
  @Post()
  async createConta(@Body() data: JSON) {
    return this.contasService.createConta(data);
  }
}
