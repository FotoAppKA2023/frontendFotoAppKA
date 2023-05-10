import { doRequestAxios } from "./apiAxios";


const entity= '/scaners';

export const getAllScaners = async()=>{
    const service = '/';
    const method = 'get';

    return await doRequestAxios(service,entity,method);
    
}

export const createNewScaner = async(formData)=>{
    const service = '/';
    const method = 'postForm';

    return await doRequestAxios(service,entity,method,formData);
    
}


export const getOneScaner = async(idScaner)=>{
    const service = `/${idScaner}`;
    const method = 'get';

    return await doRequestAxios(service,entity,method);
    
}

export const updateScaner = async(idScaner)=>{
    const service = `/${idScaner}`;
    const method = 'put';

    return await doRequestAxios(service,entity,method);
    
}

export const deleteScaner = async(idScaner)=>{
    const service = `/${idScaner}`;
    const method = 'delete';

    return await doRequestAxios(service,entity,method);
    
}