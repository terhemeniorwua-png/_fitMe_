import { BiLogoFacebookCircle, BiLogoGoogle } from "react-icons/bi";
import { FaApple } from "react-icons/fa6";
import { Link } from "react-router-dom";


const Socials = () => {
    return ( 
        <>
            <div>

                <div className="text-2xl space-y-5 font-semibold gap-5">
                    <div className="border py-2 flex gap-2 justify-center items-center px-5 hover:cursor-pointer rounded-xl border-gray-300">
                       <BiLogoGoogle className="text-red-400"/>
                        <p className="text-[12px]">Continue with Google</p>
                        
                    </div>
                    <div className="border flex gap-2 justify-center items-center px-5 hover:cursor-pointer py-2 rounded-xl border-gray-300">
                       <FaApple />
                        <p className="text-[12px]">Continue with Apple</p>
                       
                    </div>

                     <div className="border flex gap-2 justify-center items-center px-5 hover:cursor-pointer py-2 rounded-xl border-gray-300">
                      <BiLogoFacebookCircle />
                        <p className="text-[12px]">Continue with Facebook</p>
                       
                    </div>

                </div>

                <p className="text-[10px] text-center pt-5">Dont have an account? <Link to='/signUp'className="text-red-500">Sign Up</Link> </p>

            </div>
        </>
     );
}
 
export default Socials;