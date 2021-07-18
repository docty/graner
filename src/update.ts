import axios from 'axios';
import { userURL } from './constant';


export const update = async (properties: IUpdate) => {
    const {data, response} = properties;
    const result =  await axios.patch(`${userURL}/${data.userId}`, data);
    response(result.data, null);
    
}

interface IUpdate {
    data: IData;
    response: (success:any, error:any) => void;
}

interface IData {
    fullName: string;
    password: string;
    userId: string;
}