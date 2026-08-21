
import { useState } from "react";
import { BiLock, BiMailSend } from "react-icons/bi";
import { FaEye } from "react-icons/fa6";

const SignInForm = ({setLoggedIn}) => {


    const [inputedEmail, setInputedEmail] = useState('')
    const [inputedPassword, setInputedPassword] = useState('')

    return ( 
        <>
              <form onSubmit={(e)=>{
                e.preventDefault()
               
                let user ={
                    inputedEmail,
                    inputedPassword
                }
                console.log(user)

                setInputedEmail('')
                setInputedPassword('')
                setLoggedIn(true)
              }}>

                <div className="space-y-5">
                    


                      <div className="flex items-center border rounded-lg border-gray-200 py-1">
                        <div className="p-2">
                            <BiMailSend className="text-xl"/>
                        </div>
                        <input 
                         type="email" 
                        placeholder="Email or phone number"
                        value={inputedEmail}
                        onChange={(e)=>{setInputedEmail(e.target.value)}}
                        className="border-0 outline-0 text-sm pr-2 w-[80%] "
                        
                        />
                    </div>


                     <div className="flex items-center border rounded-lg border-gray-200 py-1">
                        <div className="p-2">
                            <BiLock className="text-xl"/>
                        </div>
                        <input 
                        type="password" 
                        placeholder="Password"
                        value={inputedPassword}
                        onChange={(e)=>{setInputedPassword(e.target.value)}}
                        className="border-0 outline-0 text-sm pr-2 w-[80%] "
                        
                        />
                        <div>
                            <FaEye className="text-xl mr-2"/>
                        </div>
                    </div>
                </div>

                    <div className="flex justify-between space-y-5  pt-5">

                    <div className="flex gap-1 text-[10px]">
                        <input 
                        type="checkbox" 
                        id="remember"
                        />
                        <label htmlFor="remember">Remember me</label>
                    </div>

                    <p>
                        <a href="#" className="text-blue-400 text-[10px]">forgotten Password?</a>
                        </p>
                    </div>

                   <div className="space-y-10 pt-2">

                         <input 
                            type="submit" 
                            className="bg-amber-600 text-white text-sm py-3 w-full rounded-xl"/>
                        <p className="text-gray-400 text-[12px] text-center">or cotinue with</p>
                   </div>

                    
                </form>
        </>
     );
}
 
export default SignInForm;