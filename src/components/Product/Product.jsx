import { AiOutlineShoppingCart , AiOutlineClear } from "react-icons/ai";
import './Product.css'
import useCart from "../../Hooks/useCart.js";

const Product = ({data}) => {

  const { addToCart ,cart ,removeFromCart} = useCart()

  const checkProductInCart = (id) => {
    return cart.some(item => item.id === id)
  }

  if (data) {
  
    return (
      <main className="card">
        <ul>
        {data.map((item, index) => {
          const isProductInCart = checkProductInCart(item.id)
           
          return (
            <li  key={index} >
                <img src={item.thumbnail} alt={item.title} />
                <div className="title"><strong>{item.title}</strong> - ${item.price}</div>
                <div>
                  <button className="btn" style={{ backgroundColor: isProductInCart ? '#f44336' : '#0db336'}} onClick={() => {isProductInCart ? removeFromCart(item) : addToCart(item)}}>
                   {
                    isProductInCart ? <AiOutlineClear /> :
                    < AiOutlineShoppingCart />
                    }
                  </button>
                </div>
            </li>
          )})}
        </ul>

      </main>
    );
  }

  return null;
}

export default Product;
