import React, { useEffect, useState } from 'react'
import Dashboard from './Dashboard'
import { retrieveAllMedicationsFormApi } from './api/MedicationApiService'

function Index() {
    const [medications, setMedications] = useState([]);
    const [refresh, setRefresh] = useState(true);

    const updateList = () => {
        setRefresh(!refresh);
    }

    useEffect(() => {
        retrieveAllMedicationsFormApi()
            .then(response => {
                setMedications(response.data)
                updateList()
            })
            .catch(error => console.log(error))
    }, [refresh])


    return (
        <div>
            <Dashboard medications={medications} updateList={updateList} />
        </div>
    )
}

export default Index