import { BiStar } from "react-icons/bi";
import { FaPeopleGroup } from "react-icons/fa6";
import group from '/Group.png'

const SearchResults = ({products}) => {
    // console.log(products)

    // let display = `"${products}"`
    // console.log(display)
    return ( 
        <>
            <div>
                <h1>Search results for {}</h1>

                <div className="flex items-center gap-10 text-sm md:pl-20">
                    <button className="bg-[#FC8019] rounded-3xl text-white  px-8 py-2">Dishes</button>
                    <button className="border border-[#FC8019] rounded-3xl px-5 py-2">Restaurant</button>
                </div>

                <div className="grid md:grid-cols-3 gap-10">
                    {
                    products.reipes.map(product=>(
                        <div key={product.id} className="bg-gray-100 px-5 py-2 flex items-center gap-10 img-hovered">
                                                    <div className="w-[30%]">
                                                        <img src={product.image} alt="" className="w-full rounded-xl"/>
                                                     </div>
                                                    <div>
                                                        <h1 className="pt-5">{product.name}</h1>
                                                        <div>
                                                            <small className="pt-5">{product.cuisine}</small>
                                                            <small className="pt-5 flex items-center gap-1"><BiStar className={product.rating >= 4.8? 'text-green-500' : 'text-amber-500'}/> {product.rating}</small>
                                                        </div>
                                                        <div>
                                                            <small className="pt-5 flex gap-1 items-center"><img src={group} alt="icon" className="w-3"/> {product.cookTimeMinutes} mins</small>
                                                            <small className="pt-5 flex items-center gap-1"><FaPeopleGroup className='text-amber-500'/> {product.caloriesPerServing} for two</small>
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