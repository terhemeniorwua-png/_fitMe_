import Button from "../Utilities/Button";


const Cart = ({funcDisplayCart, cart}) => {

    

    return ( 
        <>
            <div  className="w-[80%] m-auto md:w-full px-5  max-md:py-10 rounded-lg">
                <div className="flex items-center justify-between">
                    <h2 className="font-semibold">Cart</h2>
                        <p>{cart?.length} items</p>
                        
                </div>
                {
                    
                    cart?.map(item=>(
                      <div className=" flex items-center justify-between m-auto pt-10" key={item.id}>
                        <div>
                            <p>from <span className="text-amber-500">{item.mealType[0]}</span></p>
                            <p>{item.name}</p>
                            <small className="font-black">${item.reviewCount}</small>
                        </div>
                        <div>
                            <span onClick={(e)=>{
                                console.log('cliked')
                            }}>-</span> | <span  onClick={(e)=>{
                                console.log('cliked')
                            }}
                            >+</span>
                        </div>
                      </div>
                    ))
                }

                
            </div>
        </>
     );
}
 
export default Cart;