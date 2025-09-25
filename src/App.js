import './App.css';
import ProductCard from './components/ProductCard';
import { dados } from './constants/data';

function App() {
  const { produtos } = dados;

  return (
    <div className="App">
      {
        produtos.map((produto) => {
          return ( <ProductCard productData={produto} key={produto.id}/> )
          }
        )
      }
    </div>
  );
}

export default App;