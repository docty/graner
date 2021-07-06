import axios from 'axios';


export const view = async (properties: IView) => {
    const result =  await axios.get('http://127.0.0.1:1337');
    properties.response(result.data);
}
window['graner'] = {
    'view': view
}

interface IView {
    response: (e: any) => void;
}