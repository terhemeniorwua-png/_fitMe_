
const WelcomeMssg = () => {

    return ( 
        <>
            <div className="pt-10 space-y-10 h-96 rounded-4xl pl-5 max-md:text-center">
               <div className="space-y-5">
                 <h1 className="font-medium text-5xl ">
                    <span className="block">Good Food,</span> 
                    <span className="text-amber-600 ">Good</span> Mood</h1>


                    <p className="text-[15px] text-gray-600 w-[80%]">Discover delicious, healthy meals from top restaurants near you.</p>
                </div>


                <ul className="space-y-6">
                    <li>
                        <h6 className="font-bold">Fresh Ingredients</h6>
                        <small>100% Organic & Healthy</small>
                    </li>

                    <li>
                        <h6 className="font-bold">Fast Delivery</h6>
                        <small>At Your Doorstep</small>
                    </li>
                </ul>

            </div>
        </>
     );
}
 
export default WelcomeMssg;