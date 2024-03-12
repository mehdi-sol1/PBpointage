import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MdAccountCircle } from 'react-icons/md';
import userData from '../data/users.json'; 
import BackGround from '../assets/bglogin.png';

const Login = () => {
  const navigate = useNavigate(); 
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    const user = userData.users.find((user) => user.username === username && user.password === password);

    if (user) {
      // Successful login now
      console.log('Login successful');
      // Redirect to the Drag component
      navigate(`/drag/${username}`);
    } else {
      // failed login
      setError('Invalid username or password');
    }
  };
  return (
    <div 
        className='flex flex-col bg-white w-screen h-screen items-center justify-center '
        style={{
          backgroundImage: `url(${BackGround})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}>
      <h2 className='font-bold  text-5xl my-8 text-blue-500'>Login</h2>
      <div className='flex flex-col md:w-[40%] md:h-[60%] w-[75%] h-[65%] 
      bg-slate-50 text-black items-center justify-center rounded-3xl border border-black bg-opacity-10 backdrop-blur-sm'>
        <div>
          <MdAccountCircle size={100} className='mt-4 bg-gradient-to-r from-indigo-600 to-blue-500 text-gray-100 rounded-full p-1'/>
        </div>
        <div>
          <label className='font-semibold text-xl mx-2'>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className='border border-gray-400 rounded-3xl mx-5 md:mt-10 mt-4 font-bold px-3 h-8'
          />
        </div>
        <div>
          <label className='font-semibold text-xl mx-2'>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='border border-gray-400 rounded-3xl mx-5 md:mt-10 mt-4 font-bold px-3 h-8'
          />
        </div>
        <div>
          <button
            onClick={handleLogin}
            className='text-white rounded-3xl mt-8 border px-8 py-2 font-bold bg-gradient-to-r from-indigo-600 to-blue-500'
          >
            Sign-In
          </button>
        </div>
        {error && <div className="text-red-500">{error}</div>}
      </div>
    </div>
  );
};

export default Login;
