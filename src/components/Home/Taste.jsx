import { BiStar } from "react-icons/bi";
import { FaPeopleGroup } from "react-icons/fa6";
import group from '/Group.png'

const OnYourMind = ({product}) => {
    // console.log(product)
    return ( 
        <>
          <div className="md:px-20">
              <h4 className="font-bold pb-5">What's on your mind</h4>

            <div className="flex items-center md:gap-10 justify-between">
                {
                    product && product.recipes.slice(5, 11).map(pdt =>(
                        <div className="space-y-5 text-center" key={pdt.id}>
                            <img src={pdt.image} alt="product" className="rounded-full"/>
                            <p>{pdt.name}</p>
                        </div>
                    ))
                }
            </div>
          </div>


           <div className="md:px-20 my-20">
             <h4 className="font-bold pb-5">Personalized Recommendation</h4>

            <div className="grid md:grid-cols-4 md:gap-10">
                {
                                    product && product.recipes.slice(12, 16).map(pdt =>(
                                        <div key={pdt.id} className="bg-gray-100 px-5 py-2">
                                            <div>
                                                <img src={pdt.image} alt="" className="w-full rounded-xl"/>
                                            </div>
                                            <div>
                                                <h1 className="pt-5">{pdt.name}</h1>
                                                <div className="flex justify-between">
                                                    <small className="pt-5">{pdt.cuisine}</small>
                                                    <small className="pt-5 flex items-center gap-1"><BiStar className={pdt.rating >= 4.8? 'text-green-500' : 'text-amber-500'}/> {pdt.rating}</small>
                                                </div>
                                                <div className="flex justify-between">
                                                    <small className="pt-5 flex gap-1 items-center"><img src={group} alt="icon" className="w-3"/> {pdt.cookTimeMinutes} mins</small>
                                                    <small className="pt-5 flex items-center gap-1"><FaPeopleGroup className='text-amber-500'/> {pdt.caloriesPerServing} for two</small>
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
 
export default OnYourMind;