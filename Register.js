import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Login from './Login';
function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const navigate=useNavigate('');

    let logout=(e)=>{
        e.preventDefault();
        if(password===confirmPassword || name !=null ||email!=null){
            navigate("/Login");//Signin
        }else{
            alert("Invalid user name/password");
        }
    }

    return (
        <div className='container'>
            <h1><span style={{ color: "blue" }}>REGISTER</span></h1>
            <div className='form'>

                <div className='mb-3'>
                    <label htmlFor="exampleInputUsername" className="form-label">User Name</label>
                    <input type="text" className="form-control" id="exampleInputName" onChange={(e) => setName(e.target.value)} />
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleInputUsername" className="form-label">Email Id</label>
                    <input type="text" className="form-control" id="exampleInputEmail" onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleInputUsername" className="form-label">Password</label>
                    <input type="text" className="form-control" id="exampleInputPassword" onChange={(e) => setPassword(e.target.value)} />
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleInputUsername" className="form-label">confirmPassword</label>
                    <input type="text" className="form-control" id="exampleInputConfirmPassword" onChange={(e) => setConfirmPassword(e.target.value)} />
                </div>

                <div className="form-check">
                    <label className="form-check-label">
                        <input type="checkbox" className="form-check-input" />
                        I hereby agree to the <a href="/"> Terms and Conditions. </a>
                    </label>
                </div>

                <button type='button' className='btn btn-primary' onClick={logout}>submit</button>
           {/* {name}{email}{password}{confirmPassword} */}
            </div>

        </div>
    )
}
export default Register
