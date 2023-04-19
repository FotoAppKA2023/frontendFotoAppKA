
import { doRequestAxios } from "./apiAxios";


const entity= '/albums';

export const getAllAlbums = async()=>{
    const service = '/allAlbums';
    const method = 'get';

    return await doRequestAxios(service,entity,method);
    
}

export const postAlbum = async()=>{
    const service = '/';
    const method = 'post';

    return await doRequestAxios(service,entity,method);
    
}

export const getMyAlbumsByIdPhotoUser = async(idPhotoUser,searchParams)=>{
    const service = `/myAlbums/${idPhotoUser}`;
    const method = 'get';

    return await doRequestAxios(service,entity,method);
    
}

export const getOneAlbum = async(idAlbum)=>{
    const service = `/${idAlbum}`;
    const method = 'get';

    return await doRequestAxios(service,entity,method);
    
}

export const updateAlbum = async(idAlbum)=>{
    const service = `/${idAlbum}`;
    const method = 'put';

    return await doRequestAxios(service,entity,method);
    
}

export const deleteAlbum = async(idAlbum)=>{
    const service = `/${idAlbum}`;
    const method = 'delete';

    return await doRequestAxios(service,entity,method);
    
}