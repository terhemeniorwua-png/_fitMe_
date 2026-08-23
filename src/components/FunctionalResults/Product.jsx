import list from '/list.png'
import { FaStar } from "react-icons/fa6";


const Product = ({img, name, rating, cuisine, caloriesPerServing, cookTimeMinutes, reviewCount}) => {
    return ( 
        <>
            <div className="grid lg:grid-cols-3 lg:gap-20 px-10 lg:px-44 items-center justify-center bg-black text-white py-10">
                 <div>
                    <img src={img} alt={name} className="w-full"/>
                </div>
                 

                    <div className="max-md:py-5 space-y-10 md:space-y-5">
                        <h1 className="font-semibold text-2xl">{name}</h1>
                        <p>{cuisine}</p>




                    <div className="flex justify-center items-center gap-2">
                            <div className="border-l border-gray-300 h-10"></div>

                            <div className="flex flex-col text-[10px]">
                                <p className="flex items-center">
                                    <FaStar className="text-green-600"/>
                                    <span className="text-gray-300 font-medium">{rating} </span>
                                </p>
                                <p className="text-gray-300 font-medium">{caloriesPerServing}+ rating</p>
                            </div>

                            <div className="border-r border-gray-300 h-10"></div>
                   

                           
                            <div className="text-[10px]">
                                <p className="text-gray-300 font-medium">{cookTimeMinutes} mins</p>
                                <p className="text-gray-300 font-medium">Delivery Time</p>
                            </div>




                            <div className="flex justify-center items-center gap-2">
                                <div className="border-l border-gray-300 h-10"></div>
                                <div className="flex flex-col text-[10px]">
                                    <p className="flex items-center">
                                        <span className="text-gray-300 font-medium">${reviewCount} </span>
                                    </p>
                                    <p className="text-gray-300 font-medium">Cost for two</p>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="border border-dashed border-amber-600 p-5 rounded-2xl space-y-5">
                        <h2 className="text-amber-600">Offers</h2>
                        <p className='text-[10px] flex items-center'>
                            <img src={list} alt="icon" />
                            <span>50% off up to ₹100 | Use code TRYNEW</span>
                        </p>
                         <p className='text-[10px] flex items-center'>
                            <img src={list} alt="icon" />
                            <span>20% off | Use code PARTY</span>
                        </p>
                    </div>
            </div>
        </>
     );
}
 
export default Product;