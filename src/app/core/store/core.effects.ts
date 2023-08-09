import { Injectable } from '@angular/core';
import { map, mergeMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { SecfixLocalStorageService } from '@secfix/core/services';
import { StorageKeys } from '@secfix/core/models';
import { AuthActions } from '@secfix/auth/store';
import { IUser } from '@secfix/auth/models';

import * as CoreActions from './core.actions';

@Injectable()
export class CoreEffects {
    constructor(
        private readonly actions$: Actions,
        private readonly secfixLocalStorageService: SecfixLocalStorageService,
    ) {}

    readonly autoLogin$ = createEffect(() => {
        return this.actions$.pipe(
            ofType<CoreActions.AutoLogin>(
                CoreActions.CoreActionTypes.AUTO_LOGIN
            ),
            mergeMap((): Observable<AuthActions.Success> => {
                return this.secfixLocalStorageService.retrieve<IUser>(StorageKeys.User).pipe(
                    map((user: IUser): AuthActions.Success => {
                        return new AuthActions.Success({ user });
                    })
                )
            })  
        )
    })
}
