import { Injectable, OnDestroy }  from '@angular/core';
import { TitleCasePipe } from '@angular/common';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subscriber, map } from 'rxjs';

import { AppState } from '@secfix/store';
import { BreadcrumbResolver, ICrumb } from '@secfix/shared/breadcrumbs';

import { EntityType, HomeActions, HomeSelectors } from '../store';
import { CategoriesService } from '../services';
import { ICategory } from '../models';

@Injectable()
export class CategoryCrumbResolver implements BreadcrumbResolver {
    category$: Observable<ICategory>;

    inProgress$: Observable<boolean>;

    constructor(
        private readonly store$: Store<AppState>,
        private readonly titleCasePipe: TitleCasePipe
    ) {
        this.category$ = <Observable<ICategory>>this.store$.select(
            HomeSelectors.getEntity(EntityType.Category)
        );

        this.inProgress$ = this.store$.select(
            HomeSelectors.getInProgress(EntityType.Category)
        );
    }

    resolve(routeSnapshot: ActivatedRouteSnapshot, stateSnapshot: RouterStateSnapshot): Observable<Promise<ICrumb>> {
        this.getCategory(routeSnapshot.params?.['brandId'], routeSnapshot.params?.['categoryId']);

        return new Observable((observer: Subscriber<Promise<ICrumb>>): void => {
            observer.next(
               new Promise<ICrumb>((resolve: (value: ICrumb | PromiseLike<ICrumb>) => void): void => {
                    this.inProgress$.subscribe((inProgress: boolean) => {
                        inProgress ? null : this.category$.subscribe((category: ICategory): void => {
                            resolve({
                                name: this.titleCasePipe.transform(category?.name) 
                            } as ICrumb)
                        })
                    })     
               })
           )
       })
    }

    getCategory(brandId: number, categoryId: number): void {
        this.store$.dispatch(new HomeActions.GetSingle({ 
            service: CategoriesService,
            type: EntityType.Category,
            parentId: brandId,
            childId: categoryId
          }
      ));
    }
}