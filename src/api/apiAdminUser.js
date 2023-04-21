
import { doRequestAxios } from "./apiAxios";

const entity= '/photoUser';

export const getVerifyAlbums = async()=>{
    const service = '/verificarAlbumes';
    const method = 'get';

    return await doRequestAxios(service,entity,method);
    
}