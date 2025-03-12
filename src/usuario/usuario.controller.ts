import { Controller, Get } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Usuario } from '../usuario.interface';

@ApiTags('Usuarios')
@Controller('usuarios')
export class UsuarioController {
  constructor(private readonly userService: UsuarioService) {}

  @Get()
  @ApiOperation({ summary: 'Listar todos os usuários' })
  @ApiResponse({ status: 200, description: 'Lista de usuários mockados' })
  findAll(): Usuario[] {
    return this.userService.findAll();
  }
}