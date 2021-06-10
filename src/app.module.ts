import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContasController } from './contas/contas.controller';
import { ContasModule } from './contas/contas.module';

@Module({
  imports: [ContasModule],
  controllers: [AppController, ContasController],
  providers: [AppService],
})
export class AppModule {}
