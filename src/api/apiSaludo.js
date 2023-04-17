
import axios from "axios";
import { backendURL } from "../assets/constants";



export const getSaludo = async()=>{
    try {
        const result = await axios.get(backendURL);
        console.log(result);
        return result
    } catch (error) {
        console.log(error);
    }
}