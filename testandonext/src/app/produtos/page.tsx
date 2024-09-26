import Link from "next/link";

export default function Produtos() {
  const produtos = [
    {
      id: 1,
      nome: "Smartphone",
      preco: 999,
      marca: "Samsung",
      modelo: "Galaxy S21",
      descricao: "Celular top de linha",
      imagem: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      nome: "Notebook",
      preco: 2999,
      marca: "Dell",
      modelo: "Inspiron 15",
      descricao: "Notebook para trabalho",
      imagem: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      nome: "Tablet",
      preco: 799,
      marca: "Apple",
      modelo: "iPad",
      descricao: "Tablet para estudos",
      imagem: "https://via.placeholder.com/150",
    },
  ];

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
