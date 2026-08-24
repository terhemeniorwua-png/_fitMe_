import { FaLocationPin } from "react-icons/fa6";
import Cart from "./Cart";
import Button from "../Utilities/Button";
import { Link } from "react-router-dom";


const SecureCheckout = ({cartItems}) => {

    console.log(cartItems)


    return ( 

        <>
            <div>
                <h2 className="font-semibold">Secure Checkout</h2>
                <hr />


                    


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