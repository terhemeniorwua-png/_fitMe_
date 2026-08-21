import SignInForm from "./Form";
import Socials from "./Medial";


const SignIn = ({setLoggedIn}) => {



    return ( 
        <>
        <div className="w-[90%] md:w-[25%] m-auto border border-gray-200 rounded-2xl mt-10 p-6 space-y-5 shadow-xl">
               <div>
                 <h1 className="font-black text-2xl">Welcome Back!</h1>
                <p className="text-sm">Sign in to continue to your account</    p>
               </div>

              <div>
                <SignInForm setLoggedIn={setLoggedIn}/>
              </div>

              <div>
                <Socials />
              </div>

        </div>
        
        </>
     );
}
 
export default SignIn;