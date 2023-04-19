import axios from "axios";
import { backendURL } from "../assets/constants";

const entity= '/albums';

export const getAllAlbums = async()=>{
    const service = '/allAlbums';
    try {
        const result = await axios.get(`${backendURL}${entity}${service}`);
        console.log(result);
        return result
    } catch (error) {
        console.log(error);
    }
}

export const postAlbum = async()=>{
    const service = '/';
    try {
        const result = await axios.post(`${backendURL}${entity}${service}`);
        console.log(result);
        return result
    } catch (error) {
        console.log(error);
    }
}

export const getMyAlbumsByIdPhotoUser = async(idPhotoUser,searchParams)=>{
    const service = `/myAlbums/${idPhotoUser}`;
    try {
        const result = await axios.get(`${backendURL}${entity}${service}`);
        console.log(result);
        return result
    } catch (error) {
        console.log(error);
    }
}

export const getOneAlbum = async(idAlbum)=>{
    const service = `/${idAlbum}`;
    try {
        const result = await axios.get(`${backendURL}${entity}${service}`);
        console.log(result);
        return result
    } catch (error) {
        console.log(error);
    }
}

export const updateAlbum = async(idAlbum)=>{
    const service = `/${idAlbum}`;
    try {
        const result = await axios.put(`${backendURL}${entity}${service}`);
        console.log(result);
        return result
    } catch (error) {
        console.log(error);
    }
}

export const deleteAlbum = async(idAlbum)=>{
    const service = `/${idAlbum}`;
    try {
        const result = await axios.delete(`${backendURL}${entity}${service}`);
        console.log(result);
        return result
    } catch (error) {
        console.log(error);
    }
}