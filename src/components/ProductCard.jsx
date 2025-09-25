export default function ProductCard ({ productData }) {
  return (
    <div className="">
      <h3>{productData.categoria}</h3>
      <span>{productData.nome}</span>
      <p>{productData.descricao}</p>
      {
        productData.vegano ? <span>Produto Vegano</span> :
        <span>Produto Não Vegano</span> 
      }
    </div>
  )
}
