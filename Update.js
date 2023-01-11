import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import InstituteService from '../service/InstituteService';

const Update = () => {
    // const updateInstitute=()=>{
    const [collegeCode, setCollegeCode] = useState();
    const [collegeName, setCollegeName] = useState();
    const [dept, setDept] = useState();
    const [address, setAddress] = useState();

    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        settingData();
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        let Institute = { 
            collegeCode:collegeCode, 
            collegeName:collegeName, 
            dept: dept, 
            address: address 
        }

        InstituteService.updateInstitute(Institute).then((res) => {
            console.log(res.data);
            navigate("/viewAll")
        })
    }

    const settingData = async () => {
        await InstituteService.getById(params.collegeCode).then((res) => {
            setCollegeCode(res.data.collegeCode);
            setCollegeName(res.data.collegeName);
            setDept(res.data.dept);
            setAddress(res.data.address);
        })
    }
    return (
        <div className='container'>
            <form>
                <div className='mb-3'>
                    <label htmlFor='code1' className='form-label'>College Code</label>
                    <input type="number" className='form-control' id="collegeCode" value={collegeCode} onChange={(e) => { setCollegeCode(e.target.value); }} />
                </div>

                <div className='mb-3'>
                    <label htmlFor='name1' className='form-label'>College Name</label>
                    <input type="text" className='form-control' id='qty' value={collegeName} onChange={(e) => { setCollegeName(e.target.value); }} />
                </div>

                <div className='mb-3'>
                    <label htmlFor='dept1' className='form-label'>Department</label>
                    <input type="text" className='form-control' id='dept' value={dept} onChange={(e) => { setDept(e.target.value); }} />
                </div>

                <div className='mb-3'>
                    <label htmlFor='add' className='form-label'>Address</label>
                    <input type="text" className='form-control' id='address' value={address} onChange={(e) => { setAddress(e.target.value); }} />
                </div>

                <button  className='btn btn-primary' onClick={handleSubmit}>Update</button>

            </form>
        </div>
    )
}

export default Update
