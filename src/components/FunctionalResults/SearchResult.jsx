import { BiStar } from "react-icons/bi";
import { FaPeopleGroup } from "react-icons/fa6";
import group from '/Group.png'

const SearchResults = ({products, func}) => {

    // console.log(products)
    
    return ( 
        <>
            <div>
                <h1 className="md:pl-20 md:my-10 pl-5 py-5">Search results for</h1>

                <div className="flex items-center gap-10 text-sm pl-5 pb-10 md:pl-20">
                    <button className="bg-[#FC8019] rounded-3xl text-white  px-8 py-2">Dishes</button>
                    <button className="border border-[#FC8019] rounded-3xl px-5 py-2">Restaurant</button>
                </div>

                <div className="grid md:grid-cols-3 gap-10 md:my-10">
                    {
                    products.recipes.map(product=>(
                        <div key={product.id} className="bg-gray-100 px-5 py-2 flex items-center gap-10 img-hovered" onClick={()=>{func(product.id)}}>
                            <div className="w-[30%]">
                                <img src={product.image} alt="" className="w-full rounded-xl"/>
                                </div>
                            <div>
                                <h1 className="pt-5">{product.name}</h1>
                                <div>
                                    <small className="pt-5">{product.cuisine}</small>
                                    <small className="pt-5 flex items-center gap-1">
                                        <BiStar className={product.rating >= 4.8? 'text-green-500' : 'text-amber-500'}/> {product.rating}</small>
                                        </div>
                                <div>
                                    <small className="pt-5 flex gap-1 items-center"><img src={group} alt="icon" className="w-3"/> {product.cookTimeMinutes} mins</small>
                                    <small className="pt-5 flex items-center gap-1">
                                        <FaPeopleGroup className='text-amber-500'/> {product.caloriesPerServing} for two</small>
                                </div>
                            </div>
                        </div>
                    ))
                    }
                </div>

            </div>
        </>
     );
}
 
export default SearchResults;