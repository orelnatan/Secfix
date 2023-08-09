import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, map, mergeMap, tap, } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { MatSnackBar } from '@angular/material/snack-bar';

import { StorageKeys } from '@secfix/core/models';
import { SecfixLocalStorageService } from '@secfix/core/services';
import { AuthenticationService } from '@secfix/auth/services';

import * as AuthActions from './auth.actions';
import { IUser } from '../models';

@Injectable()
export class AuthEffects {
    constructor(
        private readonly actions$: Actions,
        private readonly authenticationService: AuthenticationService,
        private readonly secfixLocalStorageService: SecfixLocalStorageService,
        private readonly activatedRoute: ActivatedRoute,
        private readonly matSnackbar: MatSnackBar,
        private readonly router: Router
    ) {}

    readonly login$ = createEffect(() => {
        return this.actions$.pipe(
            ofType<AuthActions.Login>(
                AuthActions.AuthActionTypes.LOGIN
            ),
            mergeMap((action: AuthActions.Login): Observable<AuthActions.Success | AuthActions.Failure> => {
                return this.authenticationService.login(action.payload.login).pipe(
                    map((user: IUser): AuthActions.Success => {
                        this.secfixLocalStorageService.store(StorageKeys.User, user);

                        return new AuthActions.Success({ user });
                    }),
                    catchError(error => of(
                        new AuthActions.Failure({ error }))),
                )
            })  
        )
    })

    readonly logout$ = createEffect(() => {
        return this.actions$.pipe(
            ofType<AuthActions.Logout>(
                AuthActions.AuthActionTypes.LOGOUT
            ),
            tap((): void => { 
                this.secfixLocalStorageService.clear();
                this.router.navigate(['/auth']);
            })
        )
    }, { dispatch: false })

    readonly success$ = createEffect(() => {
        return this.actions$.pipe(
            ofType<AuthActions.Success>(
                AuthActions.AuthActionTypes.SUCCESS
            ),
            tap((): void => { 
                this.router.navigate([this.activatedRoute.snapshot.queryParams['returnUrl'] || "/home"]);
            })
        )
    }, { dispatch: false })

    readonly failure$ = createEffect(() => {
        return this.actions$.pipe(
            ofType<AuthActions.Failure>(
                AuthActions.AuthActionTypes.FAILURE
            ),
            tap((action: AuthActions.Failure): void => { 
                this.matSnackbar.open(action.payload.error.error.message, 'X', {
                    panelClass: ["snak-error-state"]
                });
            })
        )
    }, { dispatch: false })
}
