import React, { useState } from 'react'

const Login = ({handleLogin}) => {

    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');


    const submitHandler=(e)=>{
        e.preventDefault();
        handleLogin(email,password)
        setEmail("");
        setPassword("");
    }


  return (
    <div className='flex h-screen w-screen items-center justify-center'>
        <div className='border-2 border-emerald-600 p-20 rounded-xl'>
            <form onSubmit={(e)=>{
                submitHandler(e);
            }} className='flex flex-col items-center justify-center'>
                <input value={email} onChange={(e)=>{setEmail(e.target.value)}} required className='bg-transparent placeholder:text-grey-400 outline-none border-2 border-emerald-600 py-3 px-3 text-xl rounded-full ' type="email" placeholder='Enter your email'/>
                <input value={password} onChange={(e)=>{setPassword(e.target.value)}} required className='bg-transparent placeholder:text-grey-400 outline-none border-2 border-emerald-600 py-3 mt-3 px-3 text-xl rounded-full ' type="password" placeholder='Enter password'/>
                <button className='text-white  placeholder:text-white outline-none border-2 bg-emerald-600 py-3 mt-5 px-3 text-xl rounded-full '> Log In </button>
            </form>
        </div>
    </div>
  )
}

export default Login