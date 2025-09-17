import './App.css'
//useffect
import { useState, useEffect } from 'react'
type ProdutoType = {
  _id: string,
  nome: string,
  preco: number,
  urlfoto: string,
  descricao: string
}
function App() {
  const [produtos, setProdutos] = useState<ProdutoType[]>([])

  useEffect(() => {
    fetch('/api/produtos')
      .then((response) => response.json())
      .then((data) => setProdutos(data))
      .catch((error) => console.error('Error fetching data:', error))
  }, [])
  return (
    <>
    <div>Cadastro de Produtos</div>
    <form onSubmit={handleform}>
        <input type="text" name="nome" placeholder="Nome do Produto" />
        <input type="number" name="preco" placeholder="Preço do Produto" />
        <input type="text" name="urlfoto" placeholder="URL da Foto" />
        <input type="text" name="descricao" placeholder="Descrição do Produto" />
        <button type="submit">Cadastrar Produto</button>
    </form>
      <div>Lista de Produtos</div>
      {
        produtos.map((produto) => (
          <div key={produto._id}>
            <h2>{produto.nome}</h2>
            <p>R$ {produto.preco}</p>
            <img src={produto.urlfoto} alt={produto.nome} width="200" />
            <p>{produto.descricao}</p>
          </div>
        ))
      }
    </>
  )
}

export default App