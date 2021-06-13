import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContasModule } from './contas/contas.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ContasModule, ConfigModule.forRoot()],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
