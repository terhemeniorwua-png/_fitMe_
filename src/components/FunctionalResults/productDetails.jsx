import Cart from "./Cart";
import Product from "./Product";
import Button from "../Utilities/Button";
import { Link } from "react-router-dom";
import { FaMagnifyingGlass } from "react-icons/fa6";

const ProductDetails = ({product, cart, setCart, handleCartDisplay}) => {

    // console.log()
   
   


    return ( 
        <>
           
           <div className="grid gap-5">

            {/* {console.log(product)} */}
               
                 <Product 
                img={product.image}
                name={product.name}
                rating={product.rating}
                reviewCount= {product.reviewCount}
                cuisine={product.cuisine}
                caloriesPerServing={product.caloriesPerServing}
                cookTimeMinutes={product.cookTimeMinutes}
                />
            
            

           </div>
           <div>

            <div className="flex items-center justify-between bg-white rounded">
                <input 
                type="search" 
                placeholder="Search for dish"
                className="outline-0"
                />
                <FaMagnifyingGlass />
            </div>
           </div>
           
           <div className="max-md:space-y-10 grid md:grid-cols-[1fr_3fr_2fr] px-10 md:px-20 md:gap-8 py-5">
                <div className="flex flex-col md:text-right pr-5">
                    <h3 className="text-amber-600">Recommended</h3>
                    <ul className="space-y-3">
                        <li>{product.ingredients[0]}</li>
                        <li>{product.ingredients[1]}</li>
                        <li>{product.ingredients[2]}</li>
                        <li>{product.ingredients[3]}</li>
                        <li>{product.ingredients[4]}</li>
                    </ul>
                </div>

                <div className="md:flex gap-5">
                   <div>
                     <h2 className="font-black">{product.mealType[0]} for 2- veg(Save upto Rs.45) <span className="block">${product.userId}</span></h2>

                    <p className="text-gray-400">{product.mealType[0]}: One meal to rule them all! Grab this mega saver combo with your choice of 2 veg wraps, Aloo Paratha (2 pcs), chole and Curd lunchbox and 2 choco lava cakes. This is just bliss on a plate!</p>

                   </div>
                    <div className="overflow-hidden w-full relative">
                        <img src={product.image} alt="image" className="h-36 img-hovered max-md:m-auto  max-md:pt-10 max-md:w-full"/>

                        <button className="bg-white text-green-500 p-5 rounded-lg shadow-2xl absolute -bottom-5 left-5" onClick={()=>{
                            let itemMatched = cart.find(item =>item.id === product.id)

                              if(itemMatched){
                                    alert('Product already exist. Add the number in the cart instead!')
                                    return false
                                } else{
                                    setCart(prevCart =>[...prevCart,
                                {
                                    ...product,
                                    quantity:1
                                }
                            ]
                            )
                            }

                        }}>Add +</button>
                    </div>
                </div>
                

                <div id="cart" className="hidden max-md:absolute max-md:top-20 bg-white pb-2">
                <Cart 
                funcDisplayCart={handleCartDisplay} 
                cart={cart}
                setCart={setCart}
                />

                <div className="flex justify-between pb-5 pr-2 pt-5">
                    <div className="space-y-2">
                        < p className="font-bold text-xl px-5">Subtotal</p> 
                         <small className="px-5">Extral charges may apply</small>
                    </div>
                        <p className="font-bold text-xl">${cart.reduce((total, item)   =>total += (item.reviewCount * item.quantity), 0)}</p>
                </div>
                

              {cart?.length === 0? (
                <button className="py-3 w-full text-white rounded-lg font-bold bg-gray-300 hover:cursor-pointer">Checkout</button>
               ):(  
                <Link to='/checkout'>
                <Button 
                value="Checkout"
                />
                </Link>)
            }
            </div>
           </div>
        </>
     );
}
 
export default ProductDetails;