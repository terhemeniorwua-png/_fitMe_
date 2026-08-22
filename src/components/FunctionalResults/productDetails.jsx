import { BiCart, BiStar, BiUser } from "react-icons/bi";
import { FaHeart } from "react-icons/fa6";

const ProductDetails = ({product}) => {

    // console.log(product)



    return ( 
        <>
            <div className="flex justify-end gap-5 items-center text-3xl pr-10">
                    <BiCart />
                    <BiUser />
            </div>
           <div className="grid grid-cols-2 gap-5">
                <div>
                    <img src={product.image} alt={product.name} />
                </div>
                <div>
                    <h1 className="font-black text-2xl">{product.name}</h1>
                    <div>
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
                                <small><FaHeart /> Add to Favorite</small>

                            </p>
                        </div>
                    </div>

                    <div className="flex  gap-10">
                        <details name="detail" className=" w-[40%] p-5 rounded-2xl">
                        <summary className="flex font-semibold text-lg p-1 bg-gray-200">Ingrediants</summary>
                        <p className="p-5">{product.ingredients.map(ingredient =>(
                            // console.log(ingredient)
                            <small className="bg-gray-200 text-sm">{ingredient}</small>
                        ))}</p>
                    </details>


                    <details name="detail" className=" w-[40%] p-5 rounded-2xl">
                         <summary className="flex font-semibold text-lg p-1 bg-gray-200">Preparation method</summary>
                           <p className="p-5">{product.instructions.map(instruction =>(
                            // console.log(ingredient)
                            <small className="bg-gray-200 text-sm">{instruction}</small>
                        ))}</p>
                    </details>
                    </div>
                </div>
           </div>
        </>
     );
}
 
export default ProductDetails;