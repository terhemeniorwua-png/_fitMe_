import { BiSolidCarBattery } from "react-icons/bi";
import { FaMapMarkerAlt } from "react-icons/fa";
import Subscription from "./Subscription";
import { useState } from "react";


const Address = ( {  time,
                setTime,
                days,
                setDays,
                date,
                setDate,
                active,
                setActive
                }) => {

    let [location, setLocation] = useState('none')

    return ( 
        <>
        <div className="w-full">

        <h2 className="flex items-center font-semibold gap-2 text-xl"><FaMapMarkerAlt className='text-xl my-5 text-[#FC8019]'/> Delivery address</h2>

            <div className="grid justify-center gap-5">

                <div className="grid md:grid-cols-2 gap-10 justify-start">

                    <div className={`px-5 py-5 rounded-2xl text-sm border-2 border-dashed border-amber-600 ${location === 'first' && 'locationBg'}`}  onClick={()=>{
                    setLocation('first')
                }}>
                        <FaMapMarkerAlt className='text-3xl my-2'/>
                       Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto numquam id error consequatur qui dolores, omnis eos eveniet et veritatis fuga officia alias placeat illum, dicta voluptates suscipit maiores quis!

                        </div>
                        <div className={`px-5 py-5 rounded-2xl text-sm border-2 border-dashed border-amber-600 ${location === 'second' && 'locationBg'}`}  onClick={()=>{
                    setLocation('second')
                }}>
                        <FaMapMarkerAlt className='text-3xl my-2 '/>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto numquam id error consequatur qui dolores, omnis eos eveniet et veritatis fuga officia alias placeat illum, dicta voluptates suscipit maiores quis!
                    </div>
                </div>
          
          <div>
            <h2 className="flex items-center font-semibold gap-2 text-xl"><FaMapMarkerAlt className='text-3xl my-5 text-[#FC8019]'/>Type of Order</h2>

            <div className="md:flex max-md:space-y-5 items-center gap-5 mb-10">

                <button className="flex items-center gap-2 text-sm border-2 border-dashed border-amber-600 rounded p-2"> <BiSolidCarBattery /> subscription </button>

                <button className="flex items-center gap-2 text-sm border-2 border-dashed border-amber-600 rounded p-2"> <BiSolidCarBattery /> Schedule order </button>

                <button className="flex items-center gap-2 text-sm border-2 border-dashed border-amber-600 rounded p-2"> <BiSolidCarBattery /> Order now </button>
            </div>

                <Subscription 
                        time = {time }
                        setTime = {setTime}
                        days = {days}
                        setDays = {setDays}
                        date = {date}
                        setDate = {setDate}
                        active={active}
                        setActive={setActive}
                        />


          </div>

                </div>
            </div>
        </>
     );
}
 
export default Address;

