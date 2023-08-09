import { HttpErrorResponse } from '@angular/common/http';
import { Action } from '@ngrx/store';

import { ILogin, IUser } from '@secfix/auth/models';

export enum AuthActionTypes {
    LOGIN = "[AUTH] Login",
    LOGOUT = "[AUTH] Logout",
    SUCCESS = "[AUTH] Success",
    FAILURE = "[AUTH] Failure"
}

export class Login implements Action {
    readonly type = AuthActionTypes.LOGIN;

    constructor(public payload: {
		login: ILogin
	}){}
}

export class Logout implements Action {
    readonly type = AuthActionTypes.LOGOUT;

    constructor(){}
}

export class Success implements Action {
    readonly type = AuthActionTypes.SUCCESS;

    constructor(public payload: {
		user: IUser
	}){}
}

export class Failure implements Action {
    readonly type = AuthActionTypes.FAILURE;

    constructor(public payload: {
        error: HttpErrorResponse
    }){}
}

export type Actions = Login | Logout | Success | Failure;