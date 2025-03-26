import { PrismaClient } from "@prisma/client";
export class AtividadeService {
    private prisma: PrismaClient;
    constructor() {
        this.prisma = new PrismaClient();
    }
    async findAll() {
        return this.prisma.atividade.findMany();
    }
    async findOne(id: number) {
        return this.prisma.atividade.findUnique({
            where: { id },
        });
    }
    async create(data: any) {
        return this.prisma.atividade.create({
            data,
        });
    }
    async update(id: number, data: any) {
        return this.prisma.atividade.update({
            where: { id },
            data,
        });
    }
    async remove(id: number) {
        return this.prisma.atividade.delete({
            where: { id },
        });
    }
}