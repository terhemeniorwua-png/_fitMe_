import { useState } from "react";
import Button from "../Utilities/Button";


const Cart = ({funcDisplayCart, cart, setCart}) => {

    // console.log(cart)

    let [quantity, setQuantity] = useState(1)
    let [numberOfItems, setNumberOfItems] = useState(cart?.length)
    let [focus, setFocus] = useState()

    

    return ( 
        <>
            <div  className="w-[80%] m-auto md:w-full px-5  max-md:py-10 rounded-lg">
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
                             <p className="text-[12px]">{quantity}</p>
                           </div>
                            <p>{item.name}</p>

                           <div className="flex justify-between">
                             <small className="font-semibold text-gray-500">${item.reviewCount * quantity}</small>
                             <button className="text-[10px] p-1 bg-red-300 rounded-2xl" onClick={(e)=>{
                                // console.log('clicke')
                              let items = cart.filter(items=> items.id != item.id)
                              setCart(items)
                             }}>Remove</button>
                             
                           </div>
                        </div>
                        <div className="flex items-center gap-1">
                            <p className="cursor-default" onClick={(e)=>{
                                setQuantity(prevQuantity => Math.max(0, prevQuantity -1))
                                setNumberOfItems(prevNumberOfItems => (
                                    prevNumberOfItems + 1
                                ))
                            }}>-</p> | <p className="cursor-default"  onClick={(e)=>{
                                 setQuantity(prevQuantity => Math.max(0, prevQuantity +1))
                                 setNumberOfItems(prevNumberOfItems => (
                                    prevNumberOfItems - 1
                                ))
                            }}
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