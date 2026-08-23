import { BiStar } from "react-icons/bi";
import { FaStar } from "react-icons/fa6";


const Product = ({img, name, rating, cuisine, caloriesPerServing}) => {
    return ( 
        <>
            <div className="grid grid-cols-3 gap-20 px-44 items-center justify-center bg-black text-white py-10">
                 <div>
                    <img src={img} alt={name} className="w-full"/>
                </div>
                 
                    <div className="space-y-5">
                        <h1 className="font-semibold text-2xl">{name}</h1>
                        <p>{cuisine}</p>
                        <p className="flex items-center">
                            <FaStar className="text-green-600"/>
                            <span className="text-gray-300 font-semibold">{rating} </span>
                        </p>
                        <p className="text-gray-300 font-semibold">{caloriesPerServing}+ rating</p>

                    </div>
            </div>
        </>
     );
}
 
export default Product;