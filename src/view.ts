import axios from 'axios';
import { baseURL } from './constant';


export const view = async (properties: IView) => {
    const result =  await axios.get(baseURL);
    properties.response(result.data);
}

interface IView {
    response: (e: any) => void;
}