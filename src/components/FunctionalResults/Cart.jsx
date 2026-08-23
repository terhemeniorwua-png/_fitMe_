import Food from "../Home/Food"


const Cart = ({funcDisplayCart, cart}) => {


    return ( 
        <>
            <div id="cart" className="hidden absolute bg-white w-full top-10">
                {
                    
                    cart?.map(item=>(
                      <div className="w-[50%] m-auto h-12">
                        
                      </div>
                    ))
                }
            </div>
        </>
     );
}
 
export default Cart;