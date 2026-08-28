import img from '/src/assets/food_welcomePage.png'
import logo from '/Logo.png'
import SignIn from "./SignIn";
import WelcomeMssg from "./WelcomeMss";
import { useState } from 'react';


const SignUpPage = ({setLoggedN}) => {

    const [displayLogin, setDisplayLogin] = useState(false)



    return ( 
        <>

           <div className='max-md:h-screen overflow-hidden'>

                <div className='flex justify-between items-center'>
                    <img src={logo} alt="" className='p-5'/>

                    <button className='text-white bg-[#FC8019] px-5 py-1 mr-5 font-semibold rounded' onClick={()=>{
                        // console.log('clicked')
                        setDisplayLogin(true)
                    }}>Login</button>
                </div>
           


           <div className="grid md:grid-cols-3 bg1">
                <WelcomeMssg />
                
{
    displayLogin && 
        (<div className="absolute inset-0 z-50">
        <SignIn 
        setLogged={setLoggedN} 
        setDisplayLogin={setDisplayLogin}
        />
       
        </div>)
}
                <div className='w-full md:col-span-2'>
                    <img src={img} alt="" className='h-screen object-cover md:w-full rounded-2xl'/>
                </div>

          
           </div>

           </div>
        </>
     );
}
 
export default SignUpPage;