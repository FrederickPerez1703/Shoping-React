import { createContext  , useState} from "react";

export const CartContext = createContext();

export function CartProvider ({ children }) {
    
    const [cart,setCart] = useState([])

    const addToCart = (product) => {

        const index = cart.findIndex(item => item.id === product.id)
        if(index >= 0){
            const newCart = structuredClone(cart)
            newCart[index].quantity += 1
            return setCart(newCart)
       }

       setCart(prevState => ([...prevState,
         {...product, quantity: 1 ,
             
        }]))
    }

    const removeOneToCart = (product) => {
        const index = cart.findIndex(item => item.id === product.id)

        if(cart[index].quantity > 0){
            const newCart = structuredClone(cart)
            newCart[index].quantity -= 1
            return setCart(newCart)
        }else if(cart[index].quantity === 0){
           return removeFromCart(product)
        }
    }

    const removeFromCart = (product) => {
        setCart(prevState => prevState.filter(item => item.id !== product.id))
    }

    return (
        <CartContext.Provider value={{
            cart,
            addToCart,
            removeFromCart,
            removeOneToCart
        }}>
           {children} 
        </CartContext.Provider>
    )
}