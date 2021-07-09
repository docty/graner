import axios from 'axios';
import { updateURL } from './constant';


export const update = async (properties: IUpdate) => {
    const {data} = properties;
    const result =  await axios.put(updateURL, data)
    properties.success(result.data);
}

interface IUpdate {
    data: IData;
    success: (e:any) => void
}

interface IData {
    fullName: string;
    password: string;
}