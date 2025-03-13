import { Module } from '@nestjs/common';
import { AtividadeController } from './atividade/atividade.controller';
import { UsuarioService } from './usuario/usuario.service';
import { UsuarioController } from './usuario/usuario.controller';
import { ProdutoService } from './produto/produto.service';
import { ProdutoController } from './produto/produto.controller';

@Module({
  imports: [],
  controllers: [AtividadeController, UsuarioController, ProdutoController],
  providers: [UsuarioService, ProdutoService],
})
export class AppModule {}
