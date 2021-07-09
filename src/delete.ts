import axios from 'axios';
import { deleteURL } from './constant';


export const deleteUser = async (properties: IDelete) => {
    const result =  await axios.delete(deleteURL)
    properties.success(result.data);
}

interface IDelete {
    data: IData;
    success: (e:any) => void
}

interface IData {
    id: string;
}