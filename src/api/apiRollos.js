import { doRequestAxios } from "./apiAxios";


const entity= '/rollos';

export const getAllRollos = async()=>{
    const service = '/';
    const method = 'get';

    return await doRequestAxios(service,entity,method);
    
}

export const createNewRollo = async(formData)=>{
    const service = '/';
    const method = 'postForm';

    return await doRequestAxios(service,entity,method,formData);
    
}


export const getOneRollo = async(idRollo)=>{
    const service = `/${idRollo}`;
    const method = 'get';

    return await doRequestAxios(service,entity,method);
    
}

export const updateRollo = async(idRollo)=>{
    const service = `/${idRollo}`;
    const method = 'put';

    return await doRequestAxios(service,entity,method);
    
}

export const deleteRollo = async(idRollo)=>{
    const service = `/${idRollo}`;
    const method = 'delete';

    return await doRequestAxios(service,entity,method);
    
}