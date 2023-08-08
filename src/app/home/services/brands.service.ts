import { Injectable }  from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, of as observableOf } from 'rxjs';  

import { environment } from '@secfix/env/environment';
import { GlobalEventTypes } from '@secfix/core/models';
import { Interceptor } from '@secfix/shared/global-events';
import { IBrand } from '@secfix/home/models';

import { EntitiesAbstractService } from './entities-abstract.service';

@Interceptor([{ type: GlobalEventTypes.Logout, action: "dispose" }], [HttpClient])
@Injectable()
export class BrandsService implements EntitiesAbstractService {
    private _brands: Array<IBrand> | null;

    constructor(
        private readonly httpClient: HttpClient
    ) {}
                
    fetchAll(): Observable<IBrand[]> {
        return this._brands ? observableOf(this._brands) : this.httpClient.get<IBrand[]>(environment.apis.home.brands.all)
        .pipe(
            map((_brands: IBrand[]): IBrand[] => {
                this._brands = _brands;
                
                return _brands;
            })
        )
    }

    getSingleEntity(brandId: number): Observable<IBrand> {
        return this._brands ? observableOf(this._brands.find(brand => brandId == brand.id)!) :
        this.fetchAll()
        .pipe(
            map((_brands: IBrand[]): IBrand => {
                this._brands = _brands;

                return _brands.find(brand => brandId == brand.id)!
            })
        )
    }

    dispose(): void {
        this._brands = null;
    }
}