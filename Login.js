import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
function Login() {
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const navigate=useNavigate('');
    let login=(e)=>{
        e.preventDefault();
        if(password!==email){
            navigate("/viewAll");//Dashboard
        }else{
            alert("Invalid user name or password");
            
        }
    }
    return (
        <div className='container'>
            <h1>Login Page</h1>
            <form>
                <div className='mb-3'>
                    <label htmlFor="exampleInputUsername" className="form-label">User Id/Mail Id</label>
                    <input type="text" className="form-control" id="exampleInputUsername" onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword" onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button type='submit' className='btn btn-primary' onClick={login}>submit</button>
            </form>
        </div>
    )
}

export default Login
