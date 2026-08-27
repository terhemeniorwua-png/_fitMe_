
import Food from "./Food";


const NearByRestaurants = ({error, products, func}) => {

    
    return ( 
        <>
            <p className="text-center text-red-500 text-2xl font-semibold">{error}</p>

            <div className=" md:flex items-start justify-between md:gap-10 md:px-10">

                    <div className="border-r border-gray-200">
                        <h1 className="text-center text-2xl font-black pb-5">Nearby restaurants</h1>
                        <div className="grid grid-cols-2 space-y-10 gap-2 md:gap-10">
                            {/* {console.log(products)} */}
                {
                     products?.recipes?.slice(0, 12).map(product =>(
                        <Food 
                            key={product.id}
                            id={product.id}
                            name={product.name}
                            img={product.image}
                            rating={product.rating}
                            cuisine={product.cuisine}
                            cookTimeMinutes={product.cookTimeMinutes}
                            caloriesPerServing={product.caloriesPerServing}
                            func={()=>{func(product.id)}}
                        />
                    ))
                }
            </div>
             </div>

            <div>
                <h1 className="text-center text-2xl font-black pb-5">Recommended Foods</h1>

                <div className="grid grid-cols-2 md:grid-cols-3 space-y-10 gap-2 md:gap-10">
                     
                {
                   
                     products?.recipes?.slice(12, 30).map(product =>(
                        // console.log(product)
                           <Food 
                            key={product.id}
                            id={product.id}
                            name={product.name}
                            img={product.image}
                            rating={product.rating}
                            cuisine={product.cuisine}
                            cookTimeMinutes={product.cookTimeMinutes}
                            caloriesPerServing={product.caloriesPerServing}
                             func={()=>{func(product.id)}}
                        />
                    ))
                }
            </div>
           
            </div>

            </div>
        </>
     );
}
 
export default NearByRestaurants;