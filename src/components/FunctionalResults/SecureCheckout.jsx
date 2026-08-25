import { FaLocationPin } from "react-icons/fa6";
import Cart from "./Cart";
import Button from "../Utilities/Button";
import { Link } from "react-router-dom";
import Address from "./AddressGuide";


const SecureCheckout = ({cartItems}) => {

    console.log(cartItems)


    return ( 

        <>
            <div className="px-5">
                
                    <h2 className="font-semibold md:px-20">Secure Checkout</h2>
                <hr />
                </div>

                <div className=" max-md:flex max-md:flex-col-reverse grid md:grid-cols-[2fr_1fr] gap-5 md:gap-36 px-5 lg:px-10 md:pt-5">

                    <Address />


                    <div>
                        <Cart cart={cartItems}/>
                        <Link>
                            <Button 
                            value='Proceed to payment'
                            path='/signUp'
                        />
                        </Link>
                    </div>
            
               
                
        </div>
        </>
     );
}
 
export default SecureCheckout;