import React from 'react';
import { Icon } from '@iconify/react/dist/iconify.js';
import googleIcon from '@iconify/icons-logos/google-icon';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../store/reducers/auth';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ username, password })).then((action) => {
      if (action.error) {
        setError(action.payload || 'Login failed');
      } else {
        localStorage.setItem("token", action.payload.token);  // Ensure the key is 'token'
        navigate("/sidebar");
      }
    });
  };

  const handleSignupClick = () => {
    navigate('/register')
  }

  return (
    <div className='flex w-full h-screen'>
      <div className='w-full flex items-center justify-center lg:w-1/2'>
        <form 
          className='bg-white rounded-3xl border-2 px-10 py-10 border-gray-100' 
          onSubmit={onSubmit}>
          <div>
            <label className='text-lg font-medium' htmlFor="username">Email</label>
            <input
              className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
              placeholder='Enter Your Username'
              id="username"
              type="text"
              onChange={(e) => setUsername(e.target.value)}
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
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <div className="text-red-500 mt-2">{error}</div>}
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
              <p className='font-medium text-base'>Don't have an account?</p>
              <button className='text-violet-500 text-base font-medium ml-2'
              onClick={handleSignupClick}
              >Sign up</button>
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
