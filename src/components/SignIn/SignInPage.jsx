import img from '/src/assets/food_welcomePage.png'
import logo from '/Logo.png'
import SignIn from "./SignIn";
import WelcomeMssg from "./WelcomeMss";


const SignUpPage = ({setLoggedN}) => {

    return ( 
        <>

           
                <img src={logo} alt="" />
           


           <div className="grid grid-cols-3 bg1">
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