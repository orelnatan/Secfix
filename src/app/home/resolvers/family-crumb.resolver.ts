import { Injectable }  from '@angular/core';
import { TitleCasePipe } from '@angular/common';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, Subscriber } from 'rxjs';

import { BreadcrumbResolver, ICrumb } from '@secfix/shared/breadcrumbs';

import { FamiliesService } from '../services';
import { IFamily } from '../models';

@Injectable()
export class FamilyCrumbResolver implements BreadcrumbResolver {
    constructor(
        private readonly familiesService: FamiliesService,
        private readonly titleCasePipe: TitleCasePipe
    ) {}

    resolve(routeSnapshot: ActivatedRouteSnapshot, stateSnapshot: RouterStateSnapshot): Observable<Promise<ICrumb>> {
        return new Observable((observer: Subscriber<Promise<ICrumb>>): void => {
            observer.next(
               new Promise<ICrumb>((resolve: (value: ICrumb | PromiseLike<ICrumb>) => void): void => {
                   this.familiesService
                   .getSingleEntity(
                        routeSnapshot.params?.['categoryId'], routeSnapshot.params?.['familyId']
                    )
                   .subscribe((family: IFamily): void => {
                       resolve({
                           name: this.titleCasePipe.transform(family.name) 
                       } as ICrumb)
                   })
               })
           )
       })
    }
}