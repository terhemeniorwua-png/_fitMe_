import { FaLocationPin } from "react-icons/fa6";
import Cart from "./Cart";
import Button from "../Utilities/Button";
import { Link } from "react-router-dom";
import Address from "./AddressGuide";


const SecureCheckout = ({cartItems}) => {

    console.log(cartItems)


    return ( 

        <>
            <div>
                <p className="px-20">
                    <h2 className="font-semibold">Secure Checkout</h2>
                <hr />
                </p>

                <div className="grid grid-cols-[2fr_1fr] gap-36 px-10 pt-20">

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
               
                
        </div>
        </>
     );
}
 
export default SecureCheckout;