import instance from "./axios"

export const getRootData = async () => {
    return (await instance.get('/v1/view-root')).data
}

export const getAllDataFromRootId = async(id: string) => {
    const result = await instance.get(`/v1/view-data/${id}`)
    return result.data.data;
}