import Food from "../Home/Food"


const Cart = ({funcDisplayCart, cart}) => {


    return ( 
        <>
            <div id="cart" className="hidden absolute bg-white w-full top-10">
                {
                    // console.log(cart)
                    cart?.map(item=>(
                      <div className="w-[50%] m-auto h-12">
                         <Food 
                       key={item.id}
                       img={item.image}
                       name={item.name}
                       cuisine={item.cuisine}
                       rating={item.rating}
                       cookTimeMinutes={item.cookTimeMinutes}
                       caloriesPerServing={item.caloriesPerServing}
                       
                       />
                      </div>
                    ))
                }
            </div>
        </>
     );
}
 
export default Cart;