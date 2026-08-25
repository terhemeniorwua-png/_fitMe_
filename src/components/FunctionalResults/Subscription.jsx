import { useState } from "react";
import { BiSolidCarBattery } from "react-icons/bi";


const Subscription = () => {

    let [active, setActive] = useState('none')
    let [time, setTime] = useState('')
    let [date, setDate] = useState('')
    let [days, setDays] = useState('1')

    return ( 
        <>
        
            <div className="text-[14px] font-semibold md:flex justify-between">

                <div>
                    <h5 className=" pb-10">Type of subscription?</h5>

                   <ul className="grid grid-cols-3 gap-5 text-center">
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
                    <div className="flex gap-2 items-center">
                        {/* <BiSolidCarBattery /> */}
                        <input 
                        type="time" 
                        value={time}
                        onChange={(e)=>{setTime(e.target.value)}}
                        className="cursor-pointer outline-0 border-b w-[50%] rounded p-1 "
                        />
                        <p className="text-[#FC8019]">24hr</p>
                    </div>
                </div>



                <div>
                    <h5 className=" pb-10">What's the plan?</h5>

                    <div className="flex text-[12px] items-center justify-between">
                        <div className="flex items-center border rounded-lg p-3" onClick={(e)=>{
                            e.currentTarget.classList.add('text-[#FC8019]')
                        }}>
                            <input 
                            type="number" 
                            min='1'
                            max='5'
                            value={days}
                            onChange={(e)=>{setDays(e.target.value)}}
                            className="outline-0 w-[25px]"
                            />
                            <p>-Days/weeks</p>
                        </div>

                        <div className="border rounded-lg p-3">
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