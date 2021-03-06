import axios from 'axios';
import { userURL } from './constant';


export const create = async (properties:IView ) => {
    const {data} = properties;
     
    await axios.post(userURL, data).then(res => {
        properties.response(res, null);
    }).catch(err => {
        properties.response(null, err);
    });  
}


interface IView {
    data: IData;
    response: (success:any, error:any) => void;
}

interface IData {
    email: string;
    fullName: string;
    password: string;
}