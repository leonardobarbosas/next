"use client";
import { TipoProduto } from "@/types";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Produtos() {
  const [produtos, setProdutos] = useState<TipoProduto[]>([]);

  useEffect(() => {
    const chamadaDaApi = async () => {
      const response = await fetch("http://localhost:3000/api/base-produtos");
      const dados = await response.json();
      setProdutos(dados);
    };

    chamadaDaApi();
  }, []);

  return (
    <div>
      <h1>Produtos</h1>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Preço</th>
            <th>Marca</th>
            <th>Modelo</th>
            <th>Descrição</th>
            <th>Imagem</th>
            <th>Editar</th>
          </tr>
        </thead>
        <tbody>
          {produtos.map((produto) => (
            <tr key={produto.id}>
              <td>{produto.nome}</td>
              <td>{produto.preco}</td>
              <td>{produto.marca}</td>
              <td>{produto.modelo}</td>
              <td>{produto.descricao}</td>
              <td>
                <img
                  src={produto.imagem}
                  alt={produto.nome}
                  height="100"
                  width="100"
                />
              </td>
              <td>
                <Link href={`/produtos/produto/${produto.id}`}>Editar</Link>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={8}>Total de produtos: {produtos.length}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
