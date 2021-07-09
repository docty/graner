import { view } from './view';
import { create } from './create';
import { update } from './update';
import { deleteUser } from './delete';

window['graner'] = {
    'create': create,
    'view': view,
    'update': update,
    'delete': deleteUser
}