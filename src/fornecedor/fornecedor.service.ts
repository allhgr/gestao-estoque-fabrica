import { PrismaClient } from "@prisma/client";
export class FornecedorService {
  private prisma: PrismaClient;
  constructor() {
    this.prisma = new PrismaClient();
  }
  async findAll() {
    return this.prisma.fornecedor.findMany();
  }
  async findOne(id: number) {
    return this.prisma.fornecedor.findUnique({
      where: { id },
    });
  }
  async create(data: any) {
    return this.prisma.fornecedor.create({
      data,
    });
  }
  async update(id: number, data: any) {
    return this.prisma.fornecedor.update({
      where: { id },
      data,
    });
  }
  async remove(id: number) {
    return this.prisma.fornecedor.delete({
      where: { id },
    });
  }
}