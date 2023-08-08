import { Injectable }  from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { ICrumb } from '@secfix/shared/breadcrumbs';

@Injectable()
export abstract class BreadcrumbResolver implements Resolve<Observable<Promise<ICrumb>>> {
    abstract resolve(routeSnapshot: ActivatedRouteSnapshot, stateSnapshot: RouterStateSnapshot): Observable<Promise<ICrumb>>
}