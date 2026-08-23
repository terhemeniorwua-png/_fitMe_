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
           
           <div className="grid  gap-5">

            {console.log(product)}
               
                 <Product 
                img={product.image}
                name={product.name}
                rating={product.rating}
                reviewCount= {product.reviewCount}
                cuisine={product.cuisine}
                caloriesPerServing={product.caloriesPerServing}
                />
                

                <div className="pt-6">
                    <button className="font-black bg-amber-600 py-3 px-5 w-[70%] rounded-3xl text-white" onClick={()=>{
                        // console.log(product)
                        setCart([product])
                    }}>Add to Cart</button>
                </div>
           </div>
           
           
           <Cart funcDisplayCart={handleCartDisplay} cart={cart}/>
        </>
     );
}
 
export default ProductDetails;