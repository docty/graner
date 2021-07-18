import axios from 'axios';
import { loginURL } from './constant';


export const login = async (properties:IView ) => {
    const {data} = properties;
     
    await axios.post(loginURL, data).then(res => {
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
    password: string;
}