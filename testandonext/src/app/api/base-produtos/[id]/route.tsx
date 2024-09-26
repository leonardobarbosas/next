import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import { TipoProduto } from '@/types';

export async function GET(
  request: Request,
  { params }: { params: { id: number } }
) {
  const file = await fs.readFile(
    process.cwd() + "/src/data/base.json",
    "utf-8"
  );

  const dados:TipoProduto[] = JSON.parse(file);

  const produto = dados.find((p) => p.id == params.id);

  return NextResponse.json(produto);
}
