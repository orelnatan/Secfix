import { Injectable }  from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Data } from '@angular/router';

import { BreadcrumbsService } from '../services';
import { ICrumb } from '../models';

const get = require('lodash.get');

@Injectable()
export class BreadcrumbPathResolver implements Resolve<string> {
    constructor(
        private readonly breadcrumbsService: BreadcrumbsService,
    ) {}

    resolve(
        routeSnapshot: ActivatedRouteSnapshot, 
        stateSnapshot: RouterStateSnapshot,
    ): string {
        const data: Data = this._resolveRouteData(routeSnapshot);
        const path: string = this._resolveCrumbPath(routeSnapshot);
        
        const crumb: ICrumb = this._resolveCrumbData(data);
        const index: number = this._resolveCrumbIndex(routeSnapshot);
        const name: string = this._resolveCrumbName(data, crumb);
        
        this._createNewBreadcrumb(crumb, index, name, path);
        
        return routeSnapshot.url[0]?.path;
    }


    private _resolveRouteData(snapshot: ActivatedRouteSnapshot): Data {
        return snapshot?.routeConfig?.data!
    }

    private _resolveCrumbPath(snapshot: ActivatedRouteSnapshot): string {
        return snapshot.url[0]?.path;
    }

    private _resolveCrumbData(data: Data): ICrumb {
        return data?.['breadcrumb'];
    }

    private _resolveCrumbIndex(snapshot: ActivatedRouteSnapshot): number {
        return get(snapshot, "_lastPathIndex");
    }

    private _resolveCrumbName(data: Data, crumb: ICrumb): string {
        return get(data, crumb?.name) || crumb?.name;
    }

    private _createNewBreadcrumb(crumb: ICrumb, pathIndex: number, name: string, path: string): void {
        this.breadcrumbsService.addCrumb({ ...crumb, pathIndex, name, path });
    }
}