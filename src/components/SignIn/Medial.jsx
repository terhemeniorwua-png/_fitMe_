import { BiLogoGoogle } from "react-icons/bi";
import { FaApple } from "react-icons/fa6";
import { Link } from "react-router-dom";


const Socials = () => {
    return ( 
        <>
            <div>

                <div className="text-2xl grid grid-cols-2 font-semibold gap-5">
                    <div className="border flex justify-center items-center px-5 hover:cursor-pointer rounded-xl border-gray-300">
                       <a href='#'> <BiLogoGoogle className="text-red-400"/>
                        <p className="text-[12px]">Google</p>
                        </a>
                    </div>
                    <div className="border flex justify-center items-center px-5 hover:cursor-pointer py-2 rounded-xl border-gray-300">
                       <a href='#'> <FaApple />
                        <p className="text-[12px]">Apple</p>
                        </a>
                    </div>

                </div>

                <p className="text-[10px] text-center pt-5">Dont have an account? <Link to='/signUp'className="text-red-500">Sign Up</Link> </p>

            </div>
        </>
     );
}
 
export default Socials;