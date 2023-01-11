import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import InstituteService from '../service/InstituteService';

// const View = () => {

export default function View() {
    const [collegeCode, setCollegeCode] = useState();
    const [collegeName, setCollegeName] = useState();
    const [dept, setDept] = useState();
    const [address, setAddress] = useState();

    const params = useParams();

    const settingData = async () => {
        await InstituteService.getById(params.collegeCode).then((res) => {
            setCollegeCode(res.data.collegeCode);
            setCollegeName(res.data.collegeName);
            setDept(res.data.dept);
            setAddress(res.data.address);
        })
    }

    useEffect(() => {
        settingData()
    }, []);

    return (
        <div>
            <pre>
                College Code:{collegeCode}<br />
                Collage Name:{collegeName}<br />
                Department:{dept}<br />
                Address:{address}
            </pre>
        </div>
    )
}

    // export default View


