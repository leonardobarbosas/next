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
      <p>ID: {produto?.id}</p>
      <p>Nome: {produto?.nome}</p>
    </div>
  );
}
