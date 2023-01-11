import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import InstituteService from '../service/InstituteService';


function ViewList() {
    const [univercity, setUnivercity] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        getAllInstitutes();

    }, [])

    const getAllInstitutes = () => {
        InstituteService.getAllInstitutes().then((res) => {
            setUnivercity(res.data);
            console.log(res.data);
        })
    }
    const handleEditInstitute = (collegeCode) => {
        navigate(`/update/${collegeCode}`);
    };
    // const handleViewBus = (busId) => {
    //   navigate(`/viewBus/${busId}`);
    // };
    const handleDeleteInstitute = (collegeCode) => {
        InstituteService.deleteInstitute(collegeCode).then((res) => {
            getAllInstitutes();
        });
    }
    const handleViewInstitute = (collegeCode) => {
        navigate(`/view/${collegeCode}`)
    }
    return (
        <div className='container'>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">College Code</th>
                        <th scope="col">College Name</th>
                        <th scope="col">Department</th>
                        <th scope="col">Address</th>
                        <th colSpan={2}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {univercity.map((univercity) => {
                        return (
                            <tr key={univercity.collegeCode}>
                                <td>{univercity.collegeCode}</td>
                                <td>{univercity.collegeName}</td>
                                <td>{univercity.dept}</td>
                                <td>{univercity.address}</td>

                                <td>
                                    <button
                                        className="btn btn-info"
                                        onClick={() => handleEditInstitute(univercity.collegeCode)}
                                    >
                                        Edit
                                    </button>
                                </td>

                                <td>
                                    <button
                                        className="btn btn-primary"
                                        onClick={() => handleViewInstitute(univercity.collegeCode)}
                                    >
                                        View
                                    </button>
                                </td>

                                <td>
                                    <button
                                        className="btn btn-secondary"
                                        onClick={() => handleDeleteInstitute(univercity.collegeCode)}
                                    >
                                        Delete
                                    </button>
                                </td>

                            </tr>
                        );
                    })}
                </tbody>
            </table>

        </div>
    )
}

export default ViewList;
