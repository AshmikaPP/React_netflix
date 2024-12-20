import React, { useState } from 'react'
import {Link, useNavigate} from "react-router-dom"
import { UserAuth } from '../context/AuthContext'

const Signup=()=>{
  const [rememberLogin, setRememberLogin] = useState(true)
  const [email,setEmail]=useState('')
  const [password, setPassword]=useState('')
  const [error,setError] = useState('')

  const {user,signUp} = UserAuth()
  const navigate = useNavigate();

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    
    // Clear previous error
    setError('');

    // Basic form validation
    if (!email) {
      setError("Email is required.");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email.");
      return;
    }
    if (!password) {
      setError("Password is required.");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }
    
    try {
      await signUp(email,password);
      navigate("/")
    } catch (err) {
      console.log(err);
      
    }
    
  }

  return(
   <>
   <div className='w-full h-screen'>
    <img 
    className='hidden sm:block absolute w-full h-full object-cover'
    src="https://assets.nflxext.com/ffe/siteui/vlv3/41c789f0-7df5-4219-94c6-c66fe500590a/3149e5eb-4660-4e3d-9e65-b1e615229c64/IN-en-20240513-popsignuptwoweeks-perspective_alpha_website_large.jpg" 
    alt="///" 
    />
    <div className='bg-black/70 fixed top-0 left-0 w-full h-screen'/>
    <div className='fixed w-full px-4 py-24 z-20'>
       <div className='max-w-[450px] h-[600px] mx-auto bg-black/80 rounded-lg'>
        <div className='max-w-[320px] max-auto py-16'>
          <h1 className='text-3xl font-nsans-bold'>Sign Up</h1>

          <form onSubmit={handleFormSubmit} className="w-full flex flex-col py-4">
            <input 
             className='p-3 my-2 bg-gray-700 rounded' 
             type="email" 
             placeholder='email' 
             autoComplete='email'
             value={email}
             onChange={(e)=> setEmail(e.target.value)}
           />
         <input 
             className='p-3 my-2 bg-gray-700 rounded' 
             type="password" 
             placeholder='password' 
             autoComplete='current-password'
             value={password}
             onChange={(e)=> setPassword(e.target.value)}
          />

         <button className='bg-red-600 py-3 my-6 rounded font-nsans-bold'>
          Sign Up
          </button>  

          <div className='flex justify-between items-center text-gray-600'>
            <p>
              <input type="checkbox"className='mr-2' 
              checked={rememberLogin}
              onChange={(e) => setRememberLogin(!rememberLogin)}/>
              Remember me
            </p>
            <p>Need Help?</p>
          </div> 
          <p className='my-4'>
            <span className='text-gray-600 mr-2'>Already subscribed to Netflix?</span>
            <Link to="/login">Sign In</Link>

          </p>



          </form>
        </div>
       </div>
    </div>
</div>

   </>
  )
}

export default Signup