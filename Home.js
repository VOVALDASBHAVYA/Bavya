import React from 'react'
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate('');
  let logout = (e) => {
    e.preventDefault();
    if (true) {
      navigate("/Register");//Signin
    }
  }
  return (
    <div>

      <button type='button' className='btn btn-primary' onClick={logout}><h1>Home</h1></button><span><strong>click me</strong></span>
    </div>
  )
}

export default Home