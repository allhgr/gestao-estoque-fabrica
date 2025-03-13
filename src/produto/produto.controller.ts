import { Controller, Get } from '@nestjs/common';
import { ProdutoService } from './produto.service';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Produto } from 'src/produto.interface';

@ApiTags('Produto')
@Controller('produto')
export class ProdutoController {
    constructor(private readonly userService: ProdutoService) { }

    @Get()
    @ApiOperation({ summary: 'Listar todos os Produtos' })
    @ApiResponse({ status: 200, description: 'Lista de Produtos' })
    findAll(): Produto[] {
        return this.userService.findAll();
    }
}