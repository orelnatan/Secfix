import { Injectable }  from '@angular/core';
import { TitleCasePipe } from '@angular/common';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, Subscriber } from 'rxjs';

import { BreadcrumbResolver, ICrumb } from '@secfix/shared/breadcrumbs';

import { CategoriesService } from '../services';
import { ICategory } from '../models';

@Injectable()
export class CategoryCrumbResolver implements BreadcrumbResolver {
    constructor(
        private readonly categoriesService: CategoriesService,
        private readonly titleCasePipe: TitleCasePipe
    ) {}

    resolve(routeSnapshot: ActivatedRouteSnapshot, stateSnapshot: RouterStateSnapshot): Observable<Promise<ICrumb>> {
        return new Observable((observer: Subscriber<Promise<ICrumb>>): void => {
            observer.next(
               new Promise<ICrumb>((resolve: (value: ICrumb | PromiseLike<ICrumb>) => void): void => {
                   this.categoriesService
                   .getSingleEntity(
                        routeSnapshot.params?.['brandId'], routeSnapshot.params?.['categoryId']
                    )
                   .subscribe((category: ICategory): void => {
                       resolve({
                           name: this.titleCasePipe.transform(category.name) 
                       } as ICrumb)
                   })
               })
           )
       })
    }
}