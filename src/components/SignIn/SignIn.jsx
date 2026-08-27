
import SignInForm from "./Form";
import Socials from "./Medial";



const SignIn = ({setLogged, setDisplayLogin}) => {



    return ( 
        <>
        <div className="w-[90%] md:w-[35%]  border border-gray-200 rounded-2xl mt-0 p-6 space-y-5 shadow-xl bg-white absolute top-20 md:top-12 left-5 md:left-[30%]">
              
               <div>
                <div className="flex justify-between items-center">
                 <h1 className="font-black text-2xl">Welcome Back!</h1>

                  <p className="bg-red-800 rounded-full font-black text-white text-right p-0.5 px-2" onClick={()=>{
                    setDisplayLogin(false)
                  }}>X</p>

                </div>

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