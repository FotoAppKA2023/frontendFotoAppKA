
import { doRequestAxios } from "./apiAxios";


const entity= '/camaras';

export const getAllCamaras = async()=>{
    const service = '/';
    const method = 'get';

    return await doRequestAxios(service,entity,method);
    
}

export const postNewCamara = async()=>{
    const service = '/';
    const method = 'post';

    return await doRequestAxios(service,entity,method);
    
}

export const getOneCamara = async(idCamara)=>{
    const service = `/getOneCamara`;
    const method = 'get';
    const myData = {idCamara}

    return await doRequestAxios(service,entity,method,myData);
    
}

export const updateCamara = async(idCamara)=>{
    const service = `/${idCamara}`;
    const method = 'put';

    return await doRequestAxios(service,entity,method);
    
}

export const deleteCamara = async(idCamara)=>{
    const service = `/${idCamara}`;
    const method = 'delete';

    return await doRequestAxios(service,entity,method);
    
}