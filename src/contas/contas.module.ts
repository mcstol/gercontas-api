import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { bills } from 'src/models/contas.entity';
import { ContasController } from '../controllers/contas.controller';
import { ContasService } from '../services/contas.service';

@Module({
  imports: [TypeOrmModule.forFeature([bills])],
  controllers: [ContasController],
  providers: [ContasService],
})
export class ContasModule {}
