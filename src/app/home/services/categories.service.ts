import { Injectable }  from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, Observable, of as observableOf } from 'rxjs';   

import { environment } from '@secfix/env/environment';
import { GlobalEventTypes } from '@secfix/core/models';
import { Interceptor } from '@secfix/shared/global-events';
import { ICategory } from '@secfix/home/models';

import { EntitiesAbstractService } from './entities-abstract.service';

@Interceptor([{ type: GlobalEventTypes.Logout, action: "dispose" }], [HttpClient])
@Injectable()
export class CategoriesService implements EntitiesAbstractService {
    private _categories: Record<number, ICategory[]> = {};

    constructor(
        private readonly httpClient: HttpClient,
    ) {}
                
    fetchAll(brandId: number): Observable<ICategory[]> {
        let httpParams: HttpParams = new HttpParams();
        httpParams = httpParams.append("brandId", brandId);
        
        return this._categories[brandId] ? observableOf(this._categories[brandId]) : this.httpClient.get<ICategory[]>(environment.apis.home.categories.byBrandId, {
            params: httpParams
        }).pipe(
            map((_categories: ICategory[]): ICategory[] => {
                this._categories[brandId] = _categories;
                
                return _categories;
            })
        );
    }

    getSingleEntity(brandId: number, categoryId: number): Observable<ICategory> {
        return this._categories[brandId] ? observableOf(this._categories[brandId].find(category => categoryId == category.id)!) :
        this.fetchAll(brandId)
        .pipe(
            map((_categories: ICategory[]): ICategory => {
                this._categories[brandId] = _categories;
                
                return _categories.find(category => categoryId == category.id)!;
            })
        );
    }

    dispose(): void {
        this._categories = {};
    }
}