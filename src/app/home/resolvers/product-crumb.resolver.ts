import { Injectable }  from '@angular/core';
import { TitleCasePipe } from '@angular/common';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, Subscriber } from 'rxjs';

import { BreadcrumbResolver, ICrumb } from '@secfix/shared/breadcrumbs';

import { ProductsService } from '../services';
import { IProduct } from '../models';

@Injectable()
export class ProductCrumbResolver implements BreadcrumbResolver {
    constructor(
        private readonly productsService: ProductsService,
        private readonly titleCasePipe: TitleCasePipe
    ) {}

    resolve(routeSnapshot: ActivatedRouteSnapshot, stateSnapshot: RouterStateSnapshot): Observable<Promise<ICrumb>> {
        return new Observable((observer: Subscriber<Promise<ICrumb>>): void => {
            observer.next(
               new Promise<ICrumb>((resolve: (value: ICrumb | PromiseLike<ICrumb>) => void): void => {
                   this.productsService
                   .getSingleEntity(
                        routeSnapshot.params?.['familyId'], routeSnapshot.params?.['productId']
                    )
                   .subscribe((product: IProduct): void => {
                       resolve({
                           name: this.titleCasePipe.transform(product.name) 
                       } as ICrumb)
                   })
               })
           )
       })
    }
}