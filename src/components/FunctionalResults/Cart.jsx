

const Cart = ({funcDisplayCart, cart}) => {


    return ( 
        <>
            <div id="cart" className="bg-white w-full px-5">
                <div className="flex items-center justify-between">
                    <h2>Cart</h2>
                    <p>2 items</p>
                </div>
                {
                    
                    cart?.map(item=>(
                      <div className="w-[50%] m-auto h-12">
                        <p>from <span>{item.mealType[0]}</span></p>
                        <p>{item.name}</p>
                        <small>${item.reviewCount}</small>
                      </div>
                    ))
                }
            </div>
        </>
     );
}
 
export default Cart;