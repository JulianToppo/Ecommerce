import { createContext } from "react";

const CartContext=createContext({
    cartItems:[],
    addCartItems:()=>{},
    show:true,
    toggleShow:()=>{}
})

export default CartContext;