import axios from 'axios';
import { userURL } from './constant';


export const deleteUser = async (properties: IDelete) => {
    const result =  await axios.delete(`${userURL}/${properties.data.userId}`);
    properties.response(result.data, null);
}

interface IDelete {
    data: IData;
    response: (success:any, error:any) => void;
}

interface IData {
    userId: string;
}