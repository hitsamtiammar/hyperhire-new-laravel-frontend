import { DeleteRequest, InsertRequest, UpdateRequest } from "./actions.interface"
import instance from "./axios"

export const getRootData = async () => {
    return (await instance.get('/v1/view-root')).data
}

export const getAllDataFromRootId = async(id: string) => {
    const result = await instance.get(`/v1/view-data/${id}`)
    return result.data.data;
}

export const updateData = async({ id, name } : UpdateRequest) => {
    const result = await instance.put(`/v1/update/${id}`, {
        name
    })
    return result
}

export const deleteData = async({ id } : DeleteRequest) => {
    const result = await instance.delete(`/v1/delete/${id}`)
    return result
}

export const insertData = async({ name, parent } : InsertRequest) => {
    const result = await instance.post('/v1/add', {
        name, 
        parent
    })
    return result
}