import React,{useState} from 'react'
import Header from './Header'
const Login = () => {
  const [sign ,setsign] =useState(true)

  function onclickhandler(){
      setsign(!sign);
  }

  
  return (
    <div>
      <Header/>

      <div className='absolute'>
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/258d0f77-2241-4282-b613-8354a7675d1a/web/IN-en-20250721-TRIFECTA-perspective_cadc8408-df6e-4313-a05d-daa9dcac139f_large.jpg" alt="Home img"/>

        
      </div>
      <form className='  absolute p-12 w-3/12 h-125  my-36 left-0 right-0 mx-auto text-white bg-black opacity-80'>
          <h1 className='font-bold text-3xl mb-4'>{sign ? "Sign In" : "Sign Up"} </h1>
          {sign?" ":<input type='text' placeholder='Enter Name' className='p-4 my-4 w-full bg-gray-700'></input>}
          <input type='text' placeholder='Email Address' className='p-4 my-4 w-full bg-gray-700'></input>
          <input type='password' placeholder='Password' className='p-4 my-4 w-full bg-gray-700'></input>
          <button className='rounded-lg bg-red-700 p-4 w-full my-6'>{sign?"Sign In":"Sign Up"}</button>
          <p onClick={onclickhandler}>{sign ? "New to Netflix? Sign Up Now":"Already registered? Sign In Now"}</p>
        </form>
      
    </div>
  )
}

export default Login