import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAlunoDto } from './dto/create-aluno.dto';
import { UpdateAlunoDto } from './dto/update-aluno.dto';
import { AlunosRepository } from './repository/alunos.repository.service';

@Injectable()
export class AlunosService {
  constructor(private readonly alunosRepository: AlunosRepository) {}

  async create(data: CreateAlunoDto) {
    return this.alunosRepository.create(data);
  }

  async findAll() {
    return this.alunosRepository.findAll();
  }

  async findOne(id: number) {
    const aluno = await this.alunosRepository.findById(id);
    if (!aluno) {
      throw new NotFoundException('Aluno não encontrado');
    }
    return aluno;
  }

  async update(id: number, data: UpdateAlunoDto) {
    await this.findOne(id);
    return this.alunosRepository.update(id, data);
  }

  async remove(id: number) {
    await this.findOne(id);
    return this.alunosRepository.delete(id);
  }
}