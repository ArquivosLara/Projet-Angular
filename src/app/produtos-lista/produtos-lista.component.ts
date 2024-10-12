import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../produto.service';
import { Produto } from '../models/produtos.models';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-produtos-lista',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './produtos-lista.component.html',
  styleUrl: './produtos-lista.component.css'
})
export class ProdutosListaComponent implements OnInit {
  produtos: Produto[] = [];

  constructor(private ProdutoService: ProdutoService) {}

  ngOnInit(): void {
    this.produtos = this.ProdutoService.getProduto();
  }

  deletarProduto(id: number): void {
    this.ProdutoService.deleteProduto(id);
    this.produtos = this.ProdutoService.getProduto();
  }
}
