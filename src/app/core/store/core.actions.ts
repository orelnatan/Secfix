import { Action } from '@ngrx/store';

export enum CoreActionTypes {
    AUTO_LOGIN = "[CORE] Auto Login",
}

export class AutoLogin implements Action {
    readonly type = CoreActionTypes.AUTO_LOGIN;

    constructor(){}
}

export type Actions = AutoLogin;