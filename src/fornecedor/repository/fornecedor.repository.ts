import { Injectable } from "@nestjs/common";
import { Fornecedor } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateFornecedorDto } from "../dto/create-fornecedor.dto";
import { UpdateFornecedorDto } from "../dto/update-fornecedor.dto";
@Injectable()
export class FornecedorRepository {
    constructor(private readonly prisma: PrismaService) { }
    async findAll(): Promise<Fornecedor[]> {
        return this.prisma.fornecedor.findMany();
    }
    async findOne(id: number): Promise<Fornecedor> {
        const fornecedor = await this.prisma.fornecedor.findUnique({ where: { id } });
        if (!fornecedor) {
            throw new Error(`Id ${id} não encontrado`);
        }
        return fornecedor;
    }
    async create(objectCreate: CreateFornecedorDto): Promise<Fornecedor> {
        return this.prisma.fornecedor.create({ data: objectCreate });
    }
    async update(id: number, data: UpdateFornecedorDto): Promise<Fornecedor> {
        return this.prisma.fornecedor.update({ where: { id }, data });
    }
    async delete(id: number): Promise<Fornecedor> {
        return this.prisma.fornecedor.delete({ where: { id } });
    }
}