import axios from "axios";
import { backendURL } from "../assets/constants";


export const doRequestAxios = async (service, entity, method, data,token) => {
  const tokenPhotoUser= window.localStorage.getItem('tokenPhotoUser');
  console.log('tokenPhotoUser: ',tokenPhotoUser);
  if(tokenPhotoUser){
    axios.defaults.headers.common['Authorization'] = tokenPhotoUser;
  }
  try {
    let result = null;
    switch (method) {
      case "get":
        console.log('dataAxios:..',data);
        result = await axios.get(`${backendURL}${entity}${service}`,{params:data});
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
        result = await axios.put(`${backendURL}${entity}${service}`,data);
        break;
      case "delete":
        result = await axios.delete(`${backendURL}${entity}${service}`,data);
        break;
      default:
        break;
    }

    return result;
  } catch (error) {
    console.log('error axios:..',error)
    return error;
  }
};
