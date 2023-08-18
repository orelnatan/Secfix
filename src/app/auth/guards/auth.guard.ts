import { Injectable, } from '@angular/core';
import { Router, UrlTree, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subscriber } from 'rxjs';

import { AppState } from '@secfix/store';
import { AuthSelectors } from '@secfix/auth/store';

import { IUser } from '../models';

const BLOCK_WHILE_AUTHENTICATED: boolean = false;
const REDIRECT_TO_WHILE_NOT_AUTHENTICATED: string = "/auth";
const REDIRECT_TO_WHILE_AUTHENTICATED: string = "/home";

@Injectable()
export class AuthGuard implements CanActivateChild {
    constructor(
        private readonly store$: Store<AppState>,
        private readonly router: Router
    ) {}

    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> {
        const blockWhileAuthenticated: boolean = route.data['blockWhileAuthenticated'] || BLOCK_WHILE_AUTHENTICATED;
        const redirectToWhileNotAuthenticated: string = route.data['redirectToWhileNotAuthenticated'] || REDIRECT_TO_WHILE_NOT_AUTHENTICATED;
        const redirectToWhileAuthenticated: string = route.data['redirectToWhileAuthenticated'] || REDIRECT_TO_WHILE_AUTHENTICATED;

        return new Observable((observer: Subscriber<boolean | UrlTree>): void => {
            this.store$.select(AuthSelectors.getUser).subscribe((user: IUser): void => {
                if(!blockWhileAuthenticated) { 
                    // Block while not authenticated(default)
                    observer.next(user ? true : this.router.createUrlTree([redirectToWhileNotAuthenticated], { 
                        queryParams: { returnUrl: state.url }
                    })); 
                } else { 
                    // Block while authenticated
                    observer.next(!user ? true : this.router.createUrlTree([redirectToWhileAuthenticated])); 
                }
            })
        })
    }
}