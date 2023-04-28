import axios from "axios";
import { backendURL } from "../assets/constants";

export const doRequestAxios = async (service, entity, method, data) => {
  try {
    let result = null;
    
    switch (method) {
      case "get":
        result = await axios.get(`${backendURL}${entity}${service}`);
        break;
      case "postForm":
        console.log('Enviando formulario via axios:..',data);
        result = await axios.post(`${backendURL}${entity}${service}`,data,{
          headers: {
            "Content-Type": "multipart/form-data"
          }
        });
        break;
      case "post":
        result = await axios.post(`${backendURL}${entity}${service}`,data);
        break
      case "put":
        result = await axios.put(`${backendURL}${entity}${service}`);
        break;
      case "delete":
        result = await axios.delete(`${backendURL}${entity}${service}`);
        break;
      default:
        break;
    }

    return result;
  } catch (error) {
    return error;
  }
};
