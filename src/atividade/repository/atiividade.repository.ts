import { Injectable } from "@nestjs/common";
import { Atividade } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateAtividadeDto } from "../dto/create-atividade.dto";
import { UpdateAtividadeDto } from "../dto/update-atividade.dto";
@Injectable()
export class AtividadeRepository {
    constructor(private readonly prisma: PrismaService) { }
    async findAll(): Promise<Atividade[]> {
        return this.prisma.atividade.findMany();
    }
    async findOne(id: number): Promise<Atividade> {
        const atividade = await this.prisma.atividade.findUnique({ where: { id } });
        if (!atividade) {
            throw new Error(`Id ${id} não encontrado`);
        }
        return atividade;
    }
    async create(objectCreate: CreateAtividadeDto): Promise<Atividade> {
        return this.prisma.atividade.create({ data: objectCreate });
    }
    async update(id: number, data: UpdateAtividadeDto): Promise<Atividade> {
        return this.prisma.atividade.update({ where: { id }, data });
    }
    async delete(id: number): Promise<Atividade> {
        return this.prisma.atividade.delete({ where: { id } });
    }
}