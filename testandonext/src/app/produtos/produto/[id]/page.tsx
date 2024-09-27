"use client";
import { TipoProduto } from "@/types";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Produto({ params }: { params: { id: number } }) {
  const [produto, setProduto] = useState<TipoProduto>({
    id: 0,
    nome: "",
    preco: 0,
    marca: "",
    modelo: "",
    descricao: "",
    imagem: "",
  });

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
      <p>Preço: {produto?.preco}</p>
      <p>Marca: {produto?.marca}</p>
      <p>Modelo: {produto?.modelo}</p>
      <p>Descrição: {produto?.descricao}</p>
      <figure>
        <Image src={produto?.imagem} alt={produto?.nome} width={100} height={100}/>
      </figure>
    </div>
  );
}
