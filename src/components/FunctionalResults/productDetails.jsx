import { BiCart, BiHeart, BiStar, BiUser } from "react-icons/bi";
import { FaHeart } from "react-icons/fa6";
import Cart from "./Cart";

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
           <div className="grid md:grid-cols-2 gap-5">
                <div>
                    <img src={product.image} alt={product.name} />
                </div>
                <div className="pt-6">
                    <h1 className="font-black text-2xl">{product.name}</h1>
                    <div className="space-y-10">
                        <p className="flex items-center">
                            <BiStar />
                            <BiStar />
                            <BiStar />
                            <BiStar />
                            <span className="text-gray-300">{product.rating} ({product.reviewCount} reviews)</span>
                        </p>
                        <div>
                            <p className="flex justify-between items-center">
                                <small>Price: ${product.cookTimeMinutes}</small>
                                <small className="flex items-center gap-1 px-5 text-2xl"><BiHeart onClick={(e)=>{
                                    e.currentTarget.classList.add('text-red-500')
                                }}/> Add to Favorite</small>

                            </p>
                        </div>
                    </div>

                    <div className="flex gap-10 space-y-10">
                        <details name="detail" className=" w-[40%] rounded-2xl">
                        <summary className="flex font-semibold text-lg p-1 bg-gray-200">Ingrediants</summary>
                        <p className="p-5">{product.ingredients.map((ingredient,index) =>(
                            // console.log(ingredient)
                            <small className="bg-gray-200 text-sm" key={index}>{ingredient}</small>
                        ))}</p>
                        </details>


                        <details name="detail" className=" w-[40%] rounded-2xl">
                         <summary className="flex font-semibold text-lg p-1 bg-gray-200">Preparation method</summary>
                           <p className="p-5">{product.instructions.map((instruction, index) =>(
                            // console.log(ingredient)
                            <small className="bg-gray-200 text-sm" key={index}>{instruction}</small>
                        ))}</p>
                        </details>
                    </div>

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