import { NextResponse } from "next/server";
import { promises as fs } from "fs";

export async function GET() {
  const file = await fs.readFile(process.cwd() + "/src/data/base.json", "utf-8");

  const dados = JSON.parse(file);

  return NextResponse.json(dados);
}

