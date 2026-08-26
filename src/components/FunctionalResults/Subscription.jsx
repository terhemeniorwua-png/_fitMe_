import { useState } from "react";
import { BiSolidCarBattery } from "react-icons/bi";


const Subscription = ({time, setTime, date, setDate, days, setDays, active, setActive}) => {

    const [clicked, setClicked] = useState('none')
      

    return ( 
        <>
        
            <div className="text-[14px] font-semibold md:flex justify-between" id='sub'>

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
                        <div className={`border rounded-lg flex p-3 ${clicked === 'S' && 'text-[#FC8019]'}`} onClick={()=>{
                            setClicked('S')
                        }}>
                            <input 
                            type="number" 
                            min='1'
                            max='5'
                            value={days}
                            onChange={(e)=>{setDays(e.target.value)}}
                            className="outline-0 w-[25px]"
                            />
                            <p>-Days/week</p>
                        </div>

                        <div className={`border rounded-lg p-3 ${clicked === 'T' && 'text-[#FC8019]'}`}  onClick={()=>{
                            setDays('5')
                            setClicked('T')
                        }}>
                            5-Days/week
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