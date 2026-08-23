import { BiCart, BiHeart, BiStar, BiUser } from "react-icons/bi";
import { FaHeart } from "react-icons/fa6";
import Cart from "./Cart";
import Product from "./Product";

const ProductDetails = ({product, cart, setCart}) => {

    // console.log(product)
   
    const handleCartDisplay = (e) =>{
        document.getElementById('cart').classList.toggle('hidden')
    }


    return ( 
        <>
            <div className="flex justify-end gap-5 items-center text-3xl pr-10">
                    <div className="relative">
                        <BiCart onClick={(e)=>{handleCartDisplay(e)}}/>
                        <p className="bg-amber-600 absolute text-white text-[10px] rounded-full p-1">0</p>
                    </div>
                    <BiUser />
            </div>
           
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
           
           <div className="grid grid-cols-[1fr_3fr_2fr] px-20 gap-8 py-5">
                <div className="flex flex-col text-right pr-5">
                    <h3 className="text-amber-600">Recommended</h3>
                    <ul className="space-y-3">
                        <li>{product.ingredients[0]}</li>
                        <li>{product.ingredients[1]}</li>
                        <li>{product.ingredients[2]}</li>
                        <li>{product.ingredients[3]}</li>
                        <li>{product.ingredients[4]}</li>
                    </ul>
                </div>

                <div className="flex gap-5 items-center">
                   <div>
                     <h2 className="font-black">{product.mealType[0]} for 2- veg(Save upto Rs.45) <span className="block">${product.userId}</span></h2>

                    <p className="text-gray-400">{product.mealType[0]}: One meal to rule them all! Grab this mega saver combo with your choice of 2 veg wraps, Aloo Paratha (2 pcs), chole and Curd lunchbox and 2 choco lava cakes. This is just bliss on a plate!</p>

                   </div>
                    <div className="overflow-hidden w-full">
                        <img src={product.image} alt="image" className="h-36 img-hovered"/>
                    </div>
                </div>

                <Cart funcDisplayCart={handleCartDisplay} cart={cart}/>
           </div>
        </>
     );
}
 
export default ProductDetails;