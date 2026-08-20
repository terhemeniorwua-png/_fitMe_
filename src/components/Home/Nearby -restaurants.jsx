import { useEffect, useState } from "react";
import { BiStar } from "react-icons/bi";
import { FaPeopleGroup } from "react-icons/fa6";
import group from '/Group.png'


const NearByRestaurants = ({URL}) => {

    let [error, setError] = useState(null)
    let [products, setProducts] = useState('')


    const FetchApi = async ()=>{
        try{

            let response = await fetch(URL);
            // console.log(response)
            !response.ok && (new Error('Failed to fetch'))
            let data = await response.json()
            console.log(data)
            setProducts(data)

        } catch(err){
            setError(err.message)
        }
    }

    useEffect(()=>{
        FetchApi()
    }, [])

    return ( 
        <>
            <p className="text-center text-red-500 text-2xl font-semibold">{error}</p>

            <div className="md:flex items-start justify-between gap-10 md:px-10">

                    <div className="border-r border-gray-200">
                        <h1 className="text-center text-2xl font-black pb-5">Nearby restaurants</h1>
                        <div className="grid grid-cols-2 space-y-10 gap-10">
                {
                    products && products.recipes.slice(0, 12).map(product =>(
                        <div key={product.id} className="bg-gray-100 px-5 py-2">
                            <div>
                                <img src={product.image} alt="" className="w-full rounded-xl"/>
                            </div>
                            <div>
                                <h1 className="pt-5">{product.name}</h1>
                                <div className="flex justify-between">
                                    <small className="pt-5">{product.cuisine}</small>
                                    <small className="pt-5 flex items-center gap-1"><BiStar className={product.rating >= 4.8? 'text-green-500' : 'text-amber-500'}/> {product.rating}</small>
                                </div>
                                <div className="flex justify-between">
                                    <small className="pt-5 flex gap-1 items-center"><img src={group} alt="icon" className="w-3"/> {product.cookTimeMinutes} mins</small>
                                    <small className="pt-5 flex items-center gap-1"><FaPeopleGroup className='text-amber-500'/> {product.caloriesPerServing} for two</small>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
             </div>

            <div>
                <h1 className="text-center text-2xl font-black pb-5">Recommended Foods</h1>

                <div className="grid grid-cols-2 md:grid-cols-3 space-y-10 gap-10">
                {
                    products && products.recipes.slice(13, 30).map(product =>(
                        <div key={product.id} className="bg-gray-100 px-5 py-2">
                            <div>
                                <img src={product.image} alt="" className="w-full rounded-xl"/>
                            </div>
                            <div>
                                <h1 className="pt-5">{product.name}</h1>
                                <div className="flex justify-between">
                                    <small className="pt-5">{product.cuisine}</small>
                                    <small className="pt-5 flex items-center gap-1"><BiStar className={product.rating >= 4.8? 'text-green-500' : 'text-amber-500'}/> {product.rating}</small>
                                </div>
                                <div className="flex justify-between">
                                    <small className="pt-5 flex gap-1 items-center"><img src={group} alt="icon" className="w-3"/> {product.cookTimeMinutes} mins</small>
                                    <small className="pt-5 flex items-center gap-1"><FaPeopleGroup className='text-amber-500'/> {product.caloriesPerServing} for two</small>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
           
                    </div>

            </div>
        </>
     );
}
 
export default NearByRestaurants;