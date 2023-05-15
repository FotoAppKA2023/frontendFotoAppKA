
import { doRequestAxios } from "./apiAxios";


const entity= '/albums';

export const getAllAlbums = async()=>{
    const service = '/allAlbums';
    const method = 'get';
    //const data='';

    return await doRequestAxios(service,entity,method);
    
}

export const postAlbum = async(album)=>{
    const service = '/';
    const method = 'postForm';
    const formData = new FormData();


    Object.entries(album).forEach(([key, value]) => {
        formData.append(key, value);
        console.log(key,value);
    })

    //formData.append('title',album.title);
    //formData.append('description',album.description);
    

    /*for (let i=0; i<album.images.length; i++){
        formData.append(`file${i}`,album.images[i]);
    }*/

    for (let i=0; i<album.images.length; i++){
        formData.append(`files`,album.images[i]);
    }
    
    
    /*for( let key in album){
        formData.append(key, album[key])
        //console.log('Key:',key);
        //console.log(`album[${key}]:..`,album[key])
    }*/
    console.log('datos album:..',album);
    //console.log('datos Formulario:..',formData.entries());
    for (const pair of formData.entries()) {
        console.log(`Imprimiendo datos del formData:.. ${pair[0]}, ${pair[1]}`);
      }
    return await doRequestAxios(service,entity,method,formData);
    
}

export const getMyAlbumsByIdPhotoUser = async(idPhotoUser,searchParams)=>{
    const service = `/myAlbums`;
    const method = 'get';
    const myData = {idPhotoUser,searchParams};

    return await doRequestAxios(service,entity,method,myData);
    
}

export const getOneAlbum = async(idAlbum)=>{
    const service = `/getOneAlbum`;
    const method = 'get';
    const myData = {idAlbum};

    return await doRequestAxios(service,entity,method,myData);
    
}

export const updateAlbum = async(idAlbum)=>{
    const service = `/updateAlbum`;
    const method = 'put';
    const myData = {idAlbum};

    return await doRequestAxios(service,entity,method,myData);
    
}

export const deleteAlbum = async(idAlbum)=>{
    const service = `/deleteAlbum`;
    const method = 'delete';
    const myData = {idAlbum};

    return await doRequestAxios(service,entity,method,myData);
    
}