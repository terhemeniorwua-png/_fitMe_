
import Food from "./Food";

const OnYourMind = ({product, handleDetails}) => {
    // console.log(product)
    return ( 
        <>
          <div className="md:px-20">
              <h4 className="max-md:text-center font-bold pb-5">What's on your mind</h4>

            <div className="max-md:grid max-md:grid-cols-3 gap-5 md:flex items-center md:gap-10 justify-between">
                {
                    product && product.recipes.slice(5, 11).map(pdt =>(
                        <div className="space-y-5 text-center" key={pdt.id} onClick={()=>{handleDetails(pdt.id)}}>
                            <img src={pdt.image} alt="product" className="rounded-full img-hovered"/>
                            <p>{pdt.name}</p>
                        </div>
                    ))
                }
            </div>
          </div>


           <div className="md:px-20 my-20">
             <h4 className="font-bold pb-5 max-md:text-center ">Personalized Recommendation</h4>

            <div className="grid grid-cols-2 gap-5 md:grid-cols-4 md:gap-10 md:mb-10">
                {
                    product && product.recipes.slice(12, 16).map(pdt =>(
                                        
                            <Food 
                            key={pdt.id}
                            id={pdt.id}
                            name={pdt.name}
                            img={pdt.image}
                            rating={pdt.rating}
                            cuisine={pdt.cuisine}
                            cookTimeMinutes={pdt.cookTimeMinutes}
                            caloriesPerServing={pdt.caloriesPerServing}
                            func={()=>{handleDetails(pdt.id)}}
                        />
                    ))
                }
            </div>
           </div>
        </>
     );
}
 
export default OnYourMind;