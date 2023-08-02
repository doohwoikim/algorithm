import { apiClient } from './ApiClient'

export const retrieveAllMedicationsFormApi
    = () => apiClient.get(`/users/medications`)

export const deleteMedicationApi
    = (id) => apiClient.delete(`/users/medications/${id}`)

export const retrieveMedicationApi
    = (id) => apiClient.get(`/users/medications/${id}`)

export const updateMedicationApi
    = (id, medication) => apiClient.put(`/users/medications/${id}`, medication)

export const createMedicationApi
    = (medication) => apiClient.post(`/users/medications`, medication)
