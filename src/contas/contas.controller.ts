import { Controller, Get } from '@nestjs/common';

@Controller('contas')
export class ContasController {
  primeira = () => {
    return 'Primeira rota';
  };

  @Get()
  getprimeira(): string {
    return this.primeira();
  }
}
