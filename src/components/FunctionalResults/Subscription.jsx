

const Subscription = () => {
    return ( 
        <>
        
            <div className="text-[12px] font-semibold">

                <div>
                    <h5 className=" pb-10">Type of subscription?</h5>

                   <ul className="grid grid-cols-3 gap-10 text-center font-semibold">
                    <li className="border-b pb-2">Monthly</li>
                    <li className="border-b pb-2">Weekly</li>
                    <li className="border-b pb-2">Custom</li>
                   </ul>

                    <h5 className=" pb-10">What time you want us to deliver?</h5>
                </div>



                <div>
                    <h5 className=" pb-10">What's the plan?</h5>

                    <div className="flex items-center justify-between">
                        <div className="border rounded-lg">
                            1-Days/weeks
                        </div>

                        <div className="border rounded-lg">
                            5-Days/weeks
                        </div>
                    </div>

                    <h5 className="pb-10">What's the plan?</h5>

                    <textarea name="" placeholder="Type your note here" id=""></textarea>                  
                </div>
            </div>





        </>
     );
}
 
export default Subscription;