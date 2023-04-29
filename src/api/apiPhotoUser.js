import { doRequestAxios } from "./apiAxios";


const entity= '/photoUser';

export const getAllPhotoUser = async()=>{
    const service = '/';
    const method = 'get';

    return await doRequestAxios(service,entity,method);
    
}

export const createNewPhotoUser = async()=>{
    const service = '/';
    const method = 'post';

    return await doRequestAxios(service,entity,method);
    
}


export const getOnePhotoUser = async(idPhotoUser)=>{
    //const service = `/${idPhotoUser}`;
    const service = `/getOnePhotoUser`;
    const method = 'get';
    const myData = {idPhotoUser};

    return await doRequestAxios(service,entity,method,myData);
    
}

export const updatePhotoUser = async(idPhotoUser)=>{
    const service = `/${idPhotoUser}`;
    const method = 'put';

    return await doRequestAxios(service,entity,method);
    
}

export const deletePhotoUser = async(idPhotoUser)=>{
    const service = `/${idPhotoUser}`;
    const method = 'delete';

    return await doRequestAxios(service,entity,method);
    
}