import { useState } from "react";
import { Link } from "react-router-dom";


const SignUp = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState('')

    

    const handleSignUp = e =>{
        e.preventDefault()
        // console.log('clicked')

        


        if(password !== confirmPassword){
            setError('Confirmation password mismatch password')
            let mssg = document.getElementById('confirm')
            mssg.classList.toggle('hidden')

            setTimeout(()=>{
                setError('')
            },3500)
            return false
        } else if(password.length < 5){
            setError('Passord char must be more than 4 and must include number')
            document.getElementById('passVal').classList.toggle('hidden')
             setTimeout(()=>{
                setError('')
            },3500)
            return false
        } else{
            alert('Account created successful')
        }
        
        let users = JSON.parse(localStorage.getItem('customers')) || [];

        const user ={
            id: crypto.randomUUID(),
            name,
            email,
            password
        }

        users.push(user)
        

        localStorage.setItem('customers', JSON.stringify(users))

        setName('')
        setEmail('')
        setPassword('')
        setConfirmPassword('')
    }



    return ( 
        <>
        <div className="w-[90%] md:w-[35%] m-auto border border-gray-200 rounded-2xl mt-10 p-6 shadow-xl bg-white">

            <h1 className="font-black text-3xl pb-10 text-gray-700">Sign Up </h1>


            <form className="space-y-5" onSubmit={(e)=>{handleSignUp(e)}}>


                <div className="border border-gray-200">
                    <input 
                    type="text" 
                    value={name}
                    onChange={(e)=>{setName(e.target.value)}}
                    placeholder="Enter your name"
                    className="border-0 outline-0 w-[90%] p-2 text-sm"
                    required
                    />
                </div>

                 <div className="border border-gray-200">
                    <input 
                    type="email" 
                    value={email}
                    onChange={(e)=>{setEmail(e.target.value)}}
                    placeholder="Enter your email address"
                    className="border-0 outline-0 w-[90%] p-2 text-sm"
                    required
                    />
                </div>

                <div className="border border-gray-200">
                    <input 
                    type="password" 
                    value={password}
                    onChange={(e)=>{setPassword(e.target.value)}}
                    placeholder="Enter your password"
                    className="border-0 outline-0 w-[90%] p-2 text-sm"
                    required
                    />
                </div>

                  <div className="border border-gray-200">
                    <input 
                    type="password" 
                    value={confirmPassword}
                    onChange={(e)=>{setConfirmPassword(e.target.value)}}
                    placeholder="Confirm your password"
                    className="border-0 outline-0 w-[90%] p-2 text-sm"
                    required
                    />
                   
                </div> 
                <small className="italic text-red-500 hidden" id="confirm">{error}</small>
                <small className="italic text-red-500 hidden" id="passVal">{error}</small>
                

                <div className="flex justify-end text-[12px]">
                    <p>Back to <Link to='/' className="text-blue-600">Login</Link></p>
                </div>

                <div>
                     <input 
                    type="submit" 
                    value='Sign Up'
                    className="bg-amber-600 text-white w-full rounded-2xl text-sm font-semibold py-3"
                    />
                </div>
            </form>
            </div>
        </>
     );
}
 
export default SignUp;