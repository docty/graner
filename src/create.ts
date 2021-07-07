import axios from 'axios';
import { createURL } from './constant';


export const create = async (properties:IView ) => {
    const {data} = properties;
     
    const response = await axios.post(createURL, data);
    properties.success(response.data);
}


interface IView {
    data: IData;
    success: (e:any) => void
}

interface IData {
    email: string;
    fullName: string;
    password: string;
}