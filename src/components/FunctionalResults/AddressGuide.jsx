import { BiSolidCarBattery } from "react-icons/bi";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaLocationPin, FaLocationPinLock, FaMapLocation } from "react-icons/fa6";
import Subscription from "./Subscription";


const Address = () => {
    return ( 
        <>
        <div className="w-full">

        <h2 className="flex items-center font-semibold gap-2"><FaMapMarkerAlt className='text-3xl my-5 text-[#FC8019]'/> Delivery address</h2>

               <div className="grid justify-center gap-5">

                <div className="grid grid-cols-2 gap-10 justify-start" onClick={(e)=>{
                    let clicked = e.target
                    clicked.classList.toggle('locationBg')
                }}>

                    <div className="px-5 py-5 rounded-2xl text-sm border border-dashed border-amber-600">
                        <FaMapMarkerAlt className='text-3xl my-2'/>
                       Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto numquam id error consequatur qui dolores, omnis eos eveniet et veritatis fuga officia alias placeat illum, dicta voluptates suscipit maiores quis!

                        </div>
                        <div className="px-5 py-5 border border-dashed border-amber-600 rounded-2xl text-sm">
                        <FaMapMarkerAlt className='text-3xl my-2 '/>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto numquam id error consequatur qui dolores, omnis eos eveniet et veritatis fuga officia alias placeat illum, dicta voluptates suscipit maiores quis!
                    </div>
                </div>
          
          <div>
            <h2 className="flex items-center font-semibold gap-2"><FaMapMarkerAlt className='text-3xl my-5 text-[#FC8019]'/>Type of Order</h2>

            <div className="flex items-center gap-5 mb-10">
                <button className="flex items-center gap-2 text-[12px] border border-dashed border-amber-600 rounded px-2 py-1"> <BiSolidCarBattery /> subscription </button>

                <button className="flex items-center gap-2 text-[12px] border border-dashed border-amber-600 rounded px-2 py-1"> <BiSolidCarBattery /> Schedule order </button>

                <button className="flex items-center gap-2 text-[12px] border border-dashed border-amber-600 rounded px-2 py-1"> <BiSolidCarBattery /> Order now </button>
            </div>

                <Subscription />


          </div>

                </div>
            </div>
        </>
     );
}
 
export default Address;

