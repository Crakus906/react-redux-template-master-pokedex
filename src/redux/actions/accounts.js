import { createAction } from 'redux-actions';
import createVariable from '@/utils/createActionTypes';

export const ACCOUNTS = createVariable('ACCOUNTS', 'create', 'update', 'delete');

export const createAccount = createAction(ACCOUNTS.CREATE, () => 'Andrey');
