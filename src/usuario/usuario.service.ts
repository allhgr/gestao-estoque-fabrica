import { Injectable } from '@nestjs/common';
import { Usuario } from '../usuario.interface';

@Injectable()
export class UsuarioService {
  private usuarios: Usuario[] = [
    { id: 1, nome: 'João Silva', email: 'joao@email.com', idade: 30 },
  ];

  findAll(): Usuario[] {
    return this.usuarios;
  }
}