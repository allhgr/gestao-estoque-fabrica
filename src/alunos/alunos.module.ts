import { Module } from '@nestjs/common';
import { AlunosService } from './alunos.service';
import { AlunosController } from './alunos.controller';
import { AlunosRepository } from './repository/alunos.repository.service';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  controllers: [AlunosController],
  providers: [AlunosService, AlunosRepository, PrismaService],
})
export class AlunosModule {}