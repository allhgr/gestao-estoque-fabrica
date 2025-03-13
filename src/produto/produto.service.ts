import { Injectable } from '@nestjs/common';
import { Produto } from './produto.interface';

@Injectable()
export class ProdutoService {
    private produtos: Produto[] = [
        { id: 1, descricao: "Refrigerante Coca-Cola 2 Litros", valor: 12, embalagem: true, },
        { id: 2, descricao: "Bolacha Trakinas", valor: 5, embalagem: true },
    ];

    findAll(): Produto[] {
        return this.produtos;
    }
}