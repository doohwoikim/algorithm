import React, { useEffect, useState } from 'react'
import { retrieveMedicationApi, updateMedicationApi } from './api/MedicationApiService'

function EditForm(props) {
    const { id } = props
    const [name, setName] = useState("");
    const [errors, setErrors] = useState("");

    useEffect(() => {
        retrieveMedicationApi(id)
            .then(response => {
                setName(response.data.name)
            })
            .catch(error => console.log(error))
    }, [id])

    const handleSubmitService = (values) => {
        const medication = {
            id: id,
            name: values.name
        }
        values.preventDefault();
        updateMedicationApi(id, medication)
            .then(response => {
                props.updateList();
            })
            .catch(err => {
                console.log(err.response.data)
                const responseData = err.response.data;
                const errArr = [];
                for (const errObj of responseData) {
                    errArr.push(errObj.defaultMessage);
                }
                setErrors(errArr);
            })
    }

    return (
        <div>
            <form onSubmit={handleSubmitService}>
                <div className="row mb-3" >
                    <label className="col-sm-1 col-form-label">Name</label>
                    <div className="col-sm-4">
                        <input onChange={e => setName(e.target.value)} className="form-control" value={name} />
                    </div>
                    <div className="col-sm-2">
                        <button className='btn btn-warning'> Confirm</button>
                    </div>
                </div>
            </form>
            
        </div>
    )
}

export default EditForm