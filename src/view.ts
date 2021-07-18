import axios from 'axios';
import { userURL } from './constant';


export const view = async (properties: IView) => {
    if(!properties.data?.userId) {
        const result =  await axios.get(userURL);
        return properties.response(result.data, null);
    }
    const result =  await axios.get(`${userURL}/${properties.data.userId}`);
    properties.response(result.data, null);
}

interface IView {
    response: (success:any, error:any) => void;
    data?: IData;
}

interface IData {
    userId?: string;
}