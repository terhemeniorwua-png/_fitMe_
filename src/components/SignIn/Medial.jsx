import { BiLogoGoogle } from "react-icons/bi";
import { FaApple } from "react-icons/fa6";


const Socials = () => {
    return ( 
        <>
            <div className="">

                <div className="text-2xl grid grid-cols-2 font-semibold gap-5">
                    <div className="border flex justify-center items-center px-5 rounded-xl border-gray-300">
                        <BiLogoGoogle className="text-red-400"/>
                        <p className="text-[12px]">Google</p>
                    </div>
                    <div className="border flex justify-center items-center px-5 py-2 rounded-xl border-gray-300">
                        <FaApple />
                        <p className="text-[12px]">Apple</p>
                    </div>

                </div>

                <p className="text-[10px] text-center pt-5">Dont have an account? <a href="#" className="text-red-500">Sing Up</a> </p>

            </div>
        </>
     );
}
 
export default Socials;