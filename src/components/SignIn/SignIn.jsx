
import SignInForm from "./Form";
import Socials from "./Medial";



const SignIn = ({setLogged}) => {



    return ( 
        <>
        <div className="w-[90%] md:w-[85%] m-auto border border-gray-200 rounded-2xl mt-0 p-6 space-y-5 shadow-xl bg-white">
              
               <div>
                 <h1 className="font-black text-2xl">Welcome Back!</h1>
                <p className="text-sm">Sign in to continue to your account</    p>
               </div>

              <div>
                <SignInForm setLoggedIn={setLogged}/>
              </div>

              <div>
                <Socials />
              </div>

        </div>
        
        </>
     );
}
 
export default SignIn;