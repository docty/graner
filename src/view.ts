import axios from 'axios';
import { userURL } from './constant';

/**
 * A View displays all available user or individual user.
 *
 * @method view
 * @param {Object} properties - The message.
 * @param {String} properties.userId - This sets the Id of the user
 * @param {Function} properties.response - Callback to get the error or success message
 */

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