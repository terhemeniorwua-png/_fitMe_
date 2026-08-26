import { BiStar } from "react-icons/bi";
import { FaPeopleGroup, FaStar } from "react-icons/fa6";
import group from '/Group.png'

const Food = ({id, img, cuisine, name, rating, cookTimeMinutes, caloriesPerServing, func}) => {

    return ( 
        <>
        
            <div  className="bg-gray-100 px-5 py-2 img-hovered" onClick={()=>{func(id)}}>
                            <div>
                                <img src={img} alt="" className="w-full rounded-xl"/>
                            </div>
                            <div>
                                <h1 className="pt-5">{name}</h1>
                                <div className="flex justify-between">
                                    <small className="pt-5">{cuisine}</small>
                                    <small className="pt-5 flex items-center gap-1 text-[5px]"><FaStar className={rating >= 4.8? 'text-green-500' : 'text-amber-500'}/> {rating}</small>
                                </div>
                                <div className="flex justify-between">
                                    <small className="pt-5 flex gap-1 items-center"><img src={group} alt="icon" className="w-3"/> {cookTimeMinutes} mins</small>
                                    <small className="pt-5 flex items-center gap-1 text-[5px]"><FaPeopleGroup className='text-amber-500'/> {caloriesPerServing} for two</small>
                                </div>
                            </div>
            </div>
        
        </>
     );
}
 
export default Food;