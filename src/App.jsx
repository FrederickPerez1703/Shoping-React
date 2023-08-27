import Product from "./components/Product/Product.jsx";
import Cart from "./components/Cart/Cart.jsx";
import Header from "./components/Header/Header.jsx";
import useProductApi from "./Hooks/useProduct.js"
import useFilter from './Hooks/useFilter.js'
import { CartProvider}  from "./context/Cart.jsx";
import './App.css';


function App () {
  const {data} = useProductApi();
  const { filterProducts,setFilter } = useFilter();
  
  return(
  <CartProvider>
    <Header />
    <Cart/>
    <Product data={filterProducts(data)}/>
  </CartProvider>
 
 )
}

export default App;