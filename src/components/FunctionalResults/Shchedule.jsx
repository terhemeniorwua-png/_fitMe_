import { useState } from "react";


const Schedule = () => {

    const [time, setTime] = useState('00:00')
    return ( 
    <>
        <div className="md:flex max-md:w-[40%] max-md:space-y-10    items-center gap-10">
            <div className="border-b pb-2">
                <h5>Date of delivery</h5>
                <input type="date" className="outline-0 mt-5"/>
            </div>

            <div className="border-b pb-2">
                <h5>Time of delivery</h5>
                <div className="flex gap-2 items-center mt-5">
                        
                    <input 
                        type="time" 
                        value={time}
                        onChange={(e)=>{setTime(e.target.value)}}
                        className="cursor-pointer outline-0 rounded p-1 "
                        />
                    <p className="text-[#FC8019]">24hr</p>
                </div>
            </div>
        </div>
    </> );
}
 
export default Schedule;