import React, { useState } from 'react'
import { deleteMedicationApi } from './api/MedicationApiService'
import EditForm from './EditForm'

function Dashboard(props) {
    const { medications, updateList } = props
    const [updateId, setUpdateId] = useState()

    const handleDelete = (id) => {
        deleteMedicationApi(id)
            .then(response => {
                updateList()
            })
            .catch(error => console.log(error))
    }


    return (
        <div className='container'>
            <h1>This is your medication!</h1>
            <table className='table'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        medications.map((medication, i) => (
                            <tr key={i}>
                                <td>{medication.id}</td>
                                <td>{medication.name}</td>
                                <td>
                                    {
                                        updateId === medication.id ?
                                            <EditForm id={medication.id} updateList={updateList} /> :
                                            <div className='row'>
                                                <button className='btn btn-primary col-sm-3'>View</button>
                                                <button className='btn btn-warning col-sm-3' onClick={(e) => setUpdateId(medication.id)}>Edit</button>
                                                <button className='btn btn-danger col-sm-3' onClick={(e) => handleDelete(medication.id)}>Delete</button>
                                            </div>
                                    }
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Dashboard