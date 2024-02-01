import React, { useState } from "react";
import CartContext from "./CartContext";

const CartContextStore = (props) => {
 
  const [cartItems, setcartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [totalPrice,setTotal]= useState(0)
  const [totalPurchase,setTotalPurchase]=useState(0)

  const toggleDisplay = () => {
    setShowCart(!showCart);
  };

  const addItemsToCart=(newItem)=>{
    setTotalPurchase(totalPurchase+1)
    setTotal(totalPrice+parseInt(newItem.price))
    let flag=0;
    const newArray=cartItems.map((item)=>{
      if(item.title===newItem.title){
        flag=1;
        item.count+=1;
      }
      return item
    })

    if(flag===0){
      setcartItems([...cartItems,newItem])
    }
    else{
      setShowCart([...newArray])
    }


  }

  const Cartstore = {
    cartItems: cartItems,
    show: showCart,
    toggleShow: toggleDisplay,
    addCartItems:addItemsToCart,
    total:totalPrice,
    totalItems:totalPurchase
  };
  return (
    <CartContext.Provider value={Cartstore}>{props.children}</CartContext.Provider>
  );
};

export default CartContextStore;
