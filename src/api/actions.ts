import instance from "./axios"

export const getRootData = async () => {
    return (await instance.get('/v1/view-root')).data
}