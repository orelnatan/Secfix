import { Injectable }  from '@angular/core';
import { Router, Event as RouterNavigationEvent, NavigationEnd, ActivatedRouteSnapshot as Snapshot, Params } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

import { ICrumb } from '../models';

@UntilDestroy()
@Injectable({ 
    providedIn: "root"
})
export class BreadcrumbsService {
    private _crumbs$: BehaviorSubject<ICrumb[]> = new BehaviorSubject<ICrumb[]>([]);
    
    constructor(
        private readonly router: Router,
    ) {       
        this.router.events.pipe(untilDestroyed(this))
        .subscribe((event: RouterNavigationEvent): void => {
            if(event instanceof NavigationEnd) {
                const snapshots: Array<Snapshot> = this._resolveRouterSnapshotsTree(this.router);
                const crumbs: Array<ICrumb> = this._buildActiveCrumbsTree(snapshots)

                this._crumbs$.next(crumbs);
            }
        })
    }
    
    public get crumbs$(): BehaviorSubject<ICrumb[]> {
        return this._crumbs$;
    }

    private _buildActiveCrumbsTree(snapshots: Array<Snapshot>): Array<ICrumb> {
        const tree: Array<ICrumb> = [];

        snapshots.forEach((snapshot: Snapshot, sindex: number): void => {
            const params: Params = snapshot.params;
            const crumbs: Array<ICrumb> = snapshot?.routeConfig?.data?.["crumbs"];
           
            crumbs?.forEach((crumb: ICrumb, cindex: number): void => {
                const id: number = parseInt(`${sindex}${cindex}`);

                const path: string = params[crumb.path] || crumb.path;
                const name: string = crumb.name || "";

                const async: Promise<ICrumb> = snapshot.data[crumb.resolve!];
                
                tree.push({ ...crumb, id, path, name, async });
            });
        })
        return tree;
    }

    private _resolveRouterSnapshotsTree(router: Router): Array<Snapshot> {
        const snapshots: Array<Snapshot> = [];
        
        let snapshot: Snapshot = router.routerState.snapshot.root;
        do {
            if(snapshot.url[0]) { snapshots.push(snapshot) }

            snapshot = snapshot.firstChild!;
        } while (snapshot);
        
        return snapshots;
    }
}
