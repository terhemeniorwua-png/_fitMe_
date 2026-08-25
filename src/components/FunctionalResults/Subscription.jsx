import { useState } from "react";
import { BiSolidCarBattery } from "react-icons/bi";


const Subscription = () => {

    let [active, setActive] = useState('none')
    let [time, setTime] = useState('')
    let [date, setDate] = useState('')

    return ( 
        <>
        
            <div className="text-[12px] font-semibold md:flex justify-between">

                <div>
                    <h5 className=" pb-10">Type of subscription?</h5>

                   <ul className="grid grid-cols-3 gap-10 text-center font-semibold">
                            <li className={`border-b cursor-pointer pb-2 ${active === 'Monthly' && ('text-[#FC8019]')}`} onClick={(e)=>{
                                setActive('Monthly')
                   }}>Monthly</li>
                            <li className={`border-b cursor-pointer pb-2 ${active === 'Weekly' && ('text-[#FC8019]')}`} onClick={(e)=>{
                                setActive('Weekly')
                   }}>Weekly</li>
                            <li className={`border-b cursor-pointer pb-2 ${active === 'Custom' && ('text-[#FC8019]')}`} onClick={(e)=>{
                                setActive('Custom')
                   }}>Custom</li>
                   </ul>

                    <h5 className=" pb-2 pt-10">What time you want us to deliver?</h5>
                    <div className="border-b w-[50%] rounded p-1 flex gap-2 items-center">
                        <BiSolidCarBattery />
                        <input 
                        type="time" 
                        value={time}
                        onChange={(e)=>{setTime(e.target.value)}}
                        className="cursor-pointer outline-0"
                        />
                    </div>
                </div>



                <div>
                    <h5 className=" pb-10">What's the plan?</h5>

                    <div className="flex items-center justify-between">
                        <div className="border border-dashed rounded-lg p-2">
                            1-Days/weeks
                        </div>

                        <div className="border border-dashed rounded-lg p-2">
                            5-Days/weeks
                        </div>
                    </div>

                    <label htmlFor="plan" className="py-5 block">Any Note for us?</label> 
                    <textarea placeholder="Type your note here..." id="plan" className="border p-1 pb-5  rounded-lg"></textarea>                  
                </div>
            </div>





        </>
     );
}
 
export default Subscription;