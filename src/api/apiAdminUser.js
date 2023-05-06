

import { doRequestAxios } from "./apiAxios";

const entity= '/adminUser';

export const getVerifyAlbums = async()=>{
    const service = '/verificarAlbumes';
    const method = 'get';

    return await doRequestAxios(service,entity,method);
    
}

export const loginAdminUser = async(dataLogin)=>{
    const service = '/loginAdminUser';
    const method = 'post';

    return await doRequestAxios(service,entity,method,dataLogin);
}