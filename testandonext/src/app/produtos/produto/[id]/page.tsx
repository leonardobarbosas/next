"use client";
import { TipoProduto } from "@/types";
import { useEffect, useState } from "react";

export default function Produto({ params }: { params: { id: number } }) {
  const [produto, setProduto] = useState<TipoProduto>();

  useEffect(() => {
    const chamadaDaApi = async () => {
      const response = await fetch(
        `http://localhost:3000/api/base-produtos/${params.id}`
      );
      const dados = await response.json();
      setProduto(dados);
    };

    chamadaDaApi();
  }, []);

  return (
    <div>
      <h1>Produto</h1>
      {produto && (
        <div>
          <h2>{produto.nome}</h2>
          <p>Preço: {produto.preco}</p>
          <p>Marca: {produto.marca}</p>
          <p>Modelo: {produto.modelo}</p>
          <p>Descrição: {produto.descricao}</p>
          <img src={produto.imagem} alt={produto.nome} height="100" width="100" />
        </div>
      )}
    </div>
  );
}
