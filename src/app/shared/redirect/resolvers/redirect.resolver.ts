import { Injectable }  from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve, Router } from '@angular/router';

import { IRedirect } from '../models';

@Injectable()
export class RedirectResolver implements Resolve<IRedirect> {
    constructor(
        private readonly router: Router
    ){}

    resolve(routeSnapshot: ActivatedRouteSnapshot, stateSnapshot: RouterStateSnapshot): IRedirect {    
        return {
            route: this._getPreviousNavigationUrl(this.router) || this._getDefaultNavigationUrl(routeSnapshot)
        };
    }

    private _getPreviousNavigationUrl(router: Router): string {
        return router.getCurrentNavigation()?.previousNavigation ? router.serializeUrl(
            router.getCurrentNavigation()?.previousNavigation?.finalUrl!
        ) : null!; 
    }

    private _getDefaultNavigationUrl(routeSnapshot: ActivatedRouteSnapshot): string {
        return routeSnapshot?.routeConfig?.data?.['redirect']?.route;
    }
}