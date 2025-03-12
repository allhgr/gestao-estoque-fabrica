import { Module } from '@nestjs/common';
import { AtividadeController } from './atividade/atividade.controller';
import { UsuarioService } from './usuario/usuario.service';
import { UsuarioController } from './usuario/usuario.controller';

@Module({
  imports: [],
  controllers: [AtividadeController, UsuarioController],
  providers: [UsuarioService],
})
export class AppModule {}
