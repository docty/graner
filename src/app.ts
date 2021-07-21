import { view } from './view';
import { create } from './create';
import { update } from './update';
import { deleteUser } from './delete';
import { login } from './login';
import { verifyURL } from './constant';
import axios, { AxiosRequestConfig } from 'axios';


const initization = async function(option: IOption) {
    if(!option)  throw new Error("Please provide API-KEY");

    const config: AxiosRequestConfig = {
        url: verifyURL,
        headers: {
            apikey: option.apiKey
        },
        method: 'GET'
    }
    
    await axios(config).then(() => {
        window['graner'] = {
            'create': create,
            'view'  : view,
            'update': update,
            'delete': deleteUser,
            'login' : login
        }
    });
}

window['graner'] =  {
    init: initization
}


interface IOption {
    apiKey : string;
}