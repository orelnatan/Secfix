import { Injectable }  from '@angular/core';
import { TitleCasePipe } from '@angular/common';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subscriber, Subscription, first, firstValueFrom, last, lastValueFrom, map, of as observableOf, of, switchMap, take } from 'rxjs';

import { AppState } from '@secfix/store';
import { BreadcrumbResolver, ICrumb } from '@secfix/shared/breadcrumbs';

import { EntityType, HomeActions, HomeSelectors } from '../store';
import { BrandsService } from '../services';
import { IBrand } from '../models';

@Injectable()
export class BrandCrumbResolver implements BreadcrumbResolver {
    brand$: Observable<IBrand>;

    inProgress$: Observable<boolean>;

    constructor(
        private readonly store$: Store<AppState>,
        private readonly titleCasePipe: TitleCasePipe
    ) {
        this.brand$ = <Observable<IBrand>>this.store$.select(
            HomeSelectors.getEntity(EntityType.Brand)
        );

        this.inProgress$ = this.store$.select(
            HomeSelectors.getInProgress(EntityType.Brand)
        );
    }

    resolve(routeSnapshot: ActivatedRouteSnapshot, stateSnapshot: RouterStateSnapshot): Observable<Promise<ICrumb>> {
        this.getBrand(routeSnapshot.params?.['brandId']);

        return observableOf(
            new Promise<ICrumb>((resolve: (value: ICrumb | PromiseLike<ICrumb>) => void): void => {
                const subscription: Subscription = this.inProgress$.subscribe((inProgress: boolean) => {
                    inProgress ? null : firstValueFrom(this.brand$).then((brand: IBrand): void => {
                        resolve({
                            name: this.titleCasePipe.transform(brand?.name) 
                        } as ICrumb)

                        subscription.unsubscribe();
                    })
                })     
           })
        )
    }

    getBrand(id: number): void {
        this.store$.dispatch(new HomeActions.GetSingle({ 
            service: BrandsService,
            type: EntityType.Brand,
            parentId: id,
          }
      ));
    }
}

// Worked!!
// return observableOf(
//     new Promise<ICrumb>((resolve: (value: ICrumb | PromiseLike<ICrumb>) => void): void => {
//         this.inProgress$.subscribe((inProgress: boolean) => {
//             inProgress ? null : firstValueFrom(this.brand$).then((brand: IBrand): void => {
//                 resolve({
//                     name: this.titleCasePipe.transform(brand?.name) 
//                 } as ICrumb)
//             })
//         })     
//    })
// )


// return observableOf(
//     new Promise<ICrumb>((resolve: (value: ICrumb | PromiseLike<ICrumb>) => void): void => {
//         const subscription: Subscription = this.inProgress$.subscribe((inProgress: boolean) => {
//             inProgress ? null : firstValueFrom(this.brand$).then((brand: IBrand): void => {
//                 resolve({
//                     name: this.titleCasePipe.transform(brand?.name) 
//                 } as ICrumb)

//                 subscription.unsubscribe();
//             })
//         })     
//    })
// )

// return observableOf(
//     new Promise<ICrumb>((resolve) => {
//         this.inProgress$.pipe(take(2)).subscribe((value: boolean) => {
//             firstValueFrom(this.brand$).then((brand: IBrand) => {
//                 value ? null : resolve({
//                     name: brand.name  
//                 } as ICrumb)
//             })
//         })
//     })
// )