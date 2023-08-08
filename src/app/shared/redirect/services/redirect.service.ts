import { Injectable } from "@angular/core";
import { Router, Event as RouterNavigationEvent, NavigationEnd, ActivatedRouteSnapshot as Snapshot, Params } from '@angular/router';
import { BehaviorSubject } from "rxjs";
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

import { IRedirect } from "../models";

@UntilDestroy()
@Injectable({ 
    providedIn: "root"
})
export class RedirectService {
    private _url$: BehaviorSubject<string> = new BehaviorSubject<string>("");

    constructor(
        private readonly router: Router,
    ) {       
        this.router.events.pipe(untilDestroyed(this))
        .subscribe((event: RouterNavigationEvent): void => {
            if(event instanceof NavigationEnd) {
                const snapshot: Snapshot = this._findLowestSnapshotWithRedirectRoute();
                
                const redirect: IRedirect = snapshot?.data?.["redirect"];
                const params: Params = snapshot?.params;

                this._url$.next(this._routeToPathString(params, redirect?.route));
            }
        })
    }

    public get url$(): BehaviorSubject<string> {
        return this._url$;
    }

    private _routeToPathString(params: Params, route: string): string {
        return (route?.split("/") || []).map((route: string): void => {
            return params[route] || route
        }).join("/");
    }

    private _findLowestSnapshotWithRedirectRoute(): Snapshot {
        const snapshots: Array<Snapshot> = this._resolveRouterSnapshotsTree(
            this.router).filter(
                (snapshot: Snapshot): string => {
                    return snapshot?.data?.['redirect']?.route
            }
        );
        return snapshots[snapshots.length - 1];
    }

    private _resolveRouterSnapshotsTree(router: Router): Array<Snapshot> {
        const snapshots: Array<Snapshot> = [];
        
        let snapshot: Snapshot = router.routerState.snapshot.root;
        do {
            snapshots.push(snapshot)

            snapshot = snapshot.firstChild!;
        } while (snapshot);

        return snapshots;
    }
}