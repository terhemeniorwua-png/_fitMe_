import { FaLocationPin } from "react-icons/fa6";
import Cart from "./Cart";


const SecureCheckout = () => {
    return ( 

        <>
            <div>
                <h2 className="font-semibold">Secure Checkout</h2>
                <hr />

                <div className="flex gap-10 justify-startclassName='text-3xl">

                    <div className="bg-amber-600 px-5 py-5 text-white border-0 rounded-2xl">
                        <FaLocationPin className='text-3xl my-5'/>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto numquam id error consequatur qui dolores, omnis eos eveniet et veritatis fuga officia alias placeat illum, dicta voluptates suscipit maiores quis!</p>

                        </div>
                        <div className="px-5 py-5 border border-dashed rounded-2xl">
                        <FaLocationPin className='text-3xl my-5'/>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto numquam id error consequatur qui dolores, omnis eos eveniet et veritatis fuga officia alias placeat illum, dicta voluptates suscipit maiores quis!</p>
                    </div>







                    <div>
                        {/* <Cart /> */}
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default SecureCheckout;