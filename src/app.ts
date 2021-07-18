import { view } from './view';
import { create } from './create';
import { update } from './update';
import { deleteUser } from './delete';
import { login } from './login';

window['graner'] = {
    'create': create,
    'view'  : view,
    'update': update,
    'delete': deleteUser,
    'login' : login
}