import img from '/src/assets/food_welcomePage.png'
import logo from '/Logo.png'
import SignIn from "./SignIn";
import WelcomeMssg from "./WelcomeMss";


const SignUpPage = ({setLoggedN}) => {

    

    return ( 
        <>

           
                <div className='flex justify-between items-center'>
                    <img src={logo} alt="" className='p-5'/>

                    <button className='text-white bg-[#FC8019] px-5 py-1 mr-5 font-semibold rounded'>Login</button>
                </div>
           


           <div className="grid md:grid-cols-3 bg1">
                <WelcomeMssg />
                
<div>
    <SignIn setLogged={setLoggedN} />
     <div className='flex items-center pt-8 justify-center text-gray-500 text-[13px] gap-5'>
            <p> &copy;2026 FitMe All rights reserved </p>
            <p> Terms of Services </p>
            <p> Privacy Policy </p>
           </div>
</div>
                <div>
                    <img src={img} alt="" className='h-screen object-cover'/>
                </div>

          
           </div>

        </>
     );
}
 
export default SignUpPage;