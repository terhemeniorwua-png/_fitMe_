import { BiSolidCarBattery } from "react-icons/bi";
import { FaMapMarkerAlt } from "react-icons/fa";
import Subscription from "./Subscription";
import { useState } from "react";
import Schedule from "./Shchedule";


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
    let [cliked, setClicked] = useState('none')
    const [display, setDisplay] = useState(false)
    const [schDisplay, setSchDisplay] = useState(false)


    const handleDisplaySubscription = () =>{
        setDisplay(!display)
    }

     const handleSchDisplay = () =>{
        setSchDisplay(!schDisplay)
    }

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

                <button className={`flex items-center gap-2 text-sm border-2 border-dashed border-amber-600 rounded p-2 ${cliked === 'Sub' && 'locationBg'}`} onClick={(e)=>{
                    handleDisplaySubscription(e)
                    setClicked('Sub')
                    setSchDisplay(false)
                    }}> <BiSolidCarBattery /> subscription </button>

                <button className={`flex items-center gap-2 text-sm border-2 border-dashed border-amber-600 rounded p-2 ${cliked === 'SCh' && 'locationBg'}`} onClick={(e)=>{
                    // console.log('clicked')
                    setClicked('SCh')
                    setDisplay(false)
                    handleSchDisplay(e)

                }}> <BiSolidCarBattery /> Schedule order </button>

                <button className={`flex items-center gap-2 text-sm border-2 border-dashed border-amber-600 rounded p-2 ${cliked === 'Now' && 'locationBg'}`} onClick={(e)=>{
                    setClicked('Now')
                    handleDisplaySubscription(e)
                     setSchDisplay(false)
                }}> <BiSolidCarBattery /> Order now </button>
            </div>

                {
                    display && (
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
                    )}
                    {
                    schDisplay && (
                        <Schedule />
                    )
                }


                    </div>

                </div>
            </div>
        </>
     );
}
 
export default Address;

