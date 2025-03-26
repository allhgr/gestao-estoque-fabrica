import { Module } from '@nestjs/common';
import { UsuarioService } from './usuario/usuario.service';
import { UsuarioController } from './usuario/usuario.controller';
import { ProdutoService } from './produto/produto.service';
import { ProdutoController } from './produto/produto.controller';
import { AlunosModule } from './alunos/alunos.module';
import { PrismaService } from './prisma/prisma.service';
import { PrismaModule } from './prisma/prisma.module';
import { AtividadeModule } from './atividade/atividade.module';
import { FornecedorModule } from './fornecedor/fornecedor.module';

@Module({
  imports: [AlunosModule, PrismaModule, AtividadeModule, FornecedorModule],
  controllers: [UsuarioController, ProdutoController],
  providers: [UsuarioService, ProdutoService, PrismaService],
})
export class AppModule { }
