import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import InstituteService from '../service/InstituteService';

// const Create = () => {
    function Create(){
    const [collegeCode, setCollegeCode] = useState();
    const [collegeName, setCollegeName] = useState();
    const [dept, setDept] = useState();
    const [address, setAddress] = useState();
    // const navigate = useNavigate();

    const institute = {
        college_code: collegeCode,
        collegeName: collegeName,
        dept: dept,
        address: address
    }

    const createInstitute = () => {
        InstituteService.createInstitute(institute).then((res) => {
            console.log(res.data);
            alert("hike"+res.data);
        });
    }

    return (
        <div className='container'>
            <form>
                <div className='mb-3'>
                    <label htmlFor='code1' className='form-label'>College Code</label>
                    <input type="number" className='form-control' id="collegeCode" value={collegeCode} onChange={(e) =>  setCollegeCode(e.target.value)} />
                </div>

                <div className='mb-3'>
                    <label htmlFor='name1' className='form-label'>College Name</label>
                    <input type="text" className='form-control' id='name' value={collegeName} onChange={(e) =>  setCollegeName(e.target.value)} />
                </div>

                <div className='mb-3'>
                    <label htmlFor='dept1' className='form-label'>Department</label>
                    <input type="text" className='form-control' id='dept' value={dept} onChange={(e) =>  setDept(e.target.value)} />
                </div>

                <div className='mb-3'>
                    <label htmlFor='add' className='form-label'>Address</label>
                    <input type="text" className='form-control' id='address' value={address} onChange={(e) =>  setAddress(e.target.value)} />
                </div>

                <button className='btn btn-primary' onClick={createInstitute}>Create</button>

            </form>
        </div>
    )
}

export default Create
