

const Cart = ({funcDisplayCart, cart}) => {


    return ( 
        <>
            <div id="cart" className="bg-white w-[80%] m-auto md:w-full px-5 max-md:absolute max-md:top-28 max-md:py-10 rounded-lg">
                <div className="flex items-center justify-between">
                    <h2>Cart</h2>
                    <p>{cart.length} items</p>
                </div>
                {
                    
                    cart?.map(item=>(
                      <div className="w-[50%] m-auto pt-10" key={item.id}>
                        <p>from <span className="text-amber-500">{item.mealType[0]}</span></p>
                        <p>{item.name}</p>
                        <small className="font-black">${item.reviewCount}</small>
                      </div>
                    ))
                }
            </div>
        </>
     );
}
 
export default Cart;