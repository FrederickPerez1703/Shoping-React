import {useId} from 'react'
import { AiOutlineShoppingCart ,AiOutlineClear } from "react-icons/ai";
import useCart from "../../Hooks/useCart.js";
import './Cart.css'

const CartItem = ({thumbnail ,price , title ,quantity, addToCart, removeOneToCart}) => {
    return (
        <ul>
            <li>
                <img src={thumbnail} alt='Iphone' />
            </li>
            <div className='title'>
                <strong>{title}</strong> - ${price}
            </div>

            <footer>
                <small>
                    Qty: {quantity}
                </small>
                <button className="agregar" onClick={addToCart} >+</button>
            </footer>
            
            <button className='eliminar' onClick={removeOneToCart}>
            <AiOutlineClear/>
            </button>

        </ul>
    )
}

export default function Cart() {
  const cartId = useId();
  const { addToCart,cart,removeOneToCart} = useCart()

  return (
    <>  
        <label className='cart-button' for={cartId}>
            <AiOutlineShoppingCart />
        </label>
   
        <input type="checkbox" id={cartId}  hidden/>

        <div className='total'>
            <label  htmlFor={cartId}>
                Total: 
            </label>
            <span className='linea'>${cart.reduce((acc, item) => acc + item.price * item.quantity, 0)}</span>
            
        </div>

        <aside className='cart' >            
                {cart.map((item, index) => (
                <CartItem key={index} {...item} removeOneToCart={ ()=> {removeOneToCart(item)}} addToCart={() => addToCart(item)} />
                ))}

        </aside>
        
    </>
  )
}
