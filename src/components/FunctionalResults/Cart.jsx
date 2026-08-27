import { useState } from "react";
import Button from "../Utilities/Button";


const Cart = ({funcDisplayCart, cart, setCart}) => {

    // console.log(cart)



  const decreaseQuantity = (id) => {
  setCart(prevCart =>
    prevCart.map(item =>
      item.id === id
        ? { ...item, quantity: Math.max(0, item.quantity - 1) }
        : item
    )
  );
};


const increaseQuantity = (id) => {
  setCart(prevCart =>
    prevCart.map(item =>
      item.id === id
        ? { ...item, quantity: Math.max(0, item.quantity + 1 )}
        : item
    )
  );
};


     const numberOfItems = cart.reduce(
    (total, item) => total + Number(item.quantity),
    0
  );
    

    return ( 
        <>
            <div  className="w-full m-auto md:w-full px-2 md:px-5  max-md:py-10 rounded-lg">
                <div className="flex items-center justify-between">
                    <h2 className="font-semibold">Cart</h2>
                        <p>{numberOfItems} items</p>
                        
                </div>
                {
                    
                    cart?.map(item=>(
                      <div className=" flex items-center justify-between m-auto pt-10" key={item.id}>
                        <div>
                           <div className="flex justify-between items-center">
                             <p>from <span className="text-amber-500">{item.mealType[0]}</span></p>
                             <p className="text-[12px]">{item.quantity}</p>
                           </div>
                            <p>{item.name}</p>

                           <div className="flex justify-between">
                             <small className="font-semibold text-gray-500">${item.reviewCount * item.quantity}</small>
                             <button className="text-[10px] p-1 bg-red-300 rounded-2xl" onClick={(e)=>{
                                // console.log('clicke')
                              let items = cart.filter(items=> items.id != item.id)
                              setCart(items)
                             }}>Remove</button>
                             
                           </div>
                        </div>
                        <div className="flex items-center gap-1">
                            <p className="cursor-default" onClick={()=>{decreaseQuantity(item.id)
                            }}>-</p> | <p className="cursor-default"  onClick={()=>{increaseQuantity(item.id)}}
                            >+</p>
                        </div>
                      </div>
                    ))
                }

                
            </div>
        </>
     );
}
 
export default Cart;