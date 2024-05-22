import React from 'react';
import { Icon } from '@iconify/react/dist/iconify.js';
import googleIcon from '@iconify/icons-logos/google-icon'
const Login = () => {
  console.log("Login component rendered");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Login form submitted!");
  }

  return (
    <div className='flex w-full h-screen'>
      <div className='w-full flex items-center justify-center lg:w-1/2'>
        <form className='bg-white rounded-3xl border-2 px-10 py-10 border-gray-100' onSubmit={handleSubmit}>
          <div>
            <label className='text-lg font-medium' htmlFor="email">Email</label>
            <input
              className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
              placeholder='Enter Your Email'
              id="email"
              type="email"
              required
            />
          </div>
          <div>
            <label className='text-lg font-medium' htmlFor="password">Password</label>
            <input
              className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
              placeholder='Enter Your Password'
              id="password"
              type='password'
              required
            />
          </div>
          <div className='mt-4'>
            <div className='flex items-center'>
              <input type='checkbox' id='remember' />
              <label className='ml-2 font-medium text-base' htmlFor='remember'>
                Remember for 30 days
              </label>
            </div>
           <div className='mt-8 flex flex-col gap-y-4'>
              <button className='py-3 rounded-xl bg-violet-500 text-white text-lg font-bold'>
                Sign in
              </button>
              <button className='flex items-center justify-center py-3'>
                <Icon icon={googleIcon} style={{ fontSize: '15px', color: 'red', marginRight: '8px' }} />
                Sign in with Google
              </button>
           </div>
           <div className='mt-8 flex justify-center items-center'>
              <p className='font-medium text-base'>Dont't have an account?</p>
              <button className='text-violet-500 text text-base font-medium ml-2'>Sign up</button>
            </div>
          </div>
        </form>
        </div>
        <div className='hidden relative lg:flex h-full w-1/2 items-center justify-center bg-gray-200'>
          <div className='w-60 h-60 bg-gradient-to-tr from-violet-500 to-pink-500 rounded-full animate-bounce'></div>
          <div className='w-full h-1/2 absolute bottom-0 bg-white/10 backdrop-blur-lg'></div>
        </div>
    </div>
  );
};

export default Login;
