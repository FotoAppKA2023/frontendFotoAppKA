import axios from "axios";
import { backendURL } from "../assets/constants";

const entity= '/photoUser';

export const getVerifyAlbums = async()=>{
    const service = '/verificarAlbumes';
    try {
        const result = await axios.get(`${backendURL}${entity}${service}`);
        console.log(result);
        return result
    } catch (error) {
        console.log(error);
    }
}