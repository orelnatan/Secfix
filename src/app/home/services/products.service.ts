import { Injectable }  from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, Observable, of as observableOf } from 'rxjs';   

import { environment } from '@secfix/env/environment';
import { GlobalEventTypes } from '@secfix/core/models';
import { Interceptor } from '@secfix/shared/global-events';
import { IProduct } from '@secfix/home/models';

import { EntitiesAbstractService } from './entities-abstract.service';

@Interceptor([{ type: GlobalEventTypes.Logout, action: "dispose" }], [HttpClient])
@Injectable()
export class ProductsService implements EntitiesAbstractService {
    private _products: Record<number, IProduct[]> = {};

    constructor(
        private readonly httpClient: HttpClient,
    ) {}
                
    fetchAll(familyId: number): Observable<IProduct[]> {
        let httpParams: HttpParams = new HttpParams();
        httpParams = httpParams.append("familyId", familyId);
        
        return this._products[familyId] ? observableOf(this._products[familyId]) : this.httpClient.get<IProduct[]>(environment.apis.home.products.byFamilyId, {
            params: httpParams
        }).pipe(
            map((_products: IProduct[]): IProduct[] => {
                this._products[familyId] = _products;
                
                return _products;
            })
        );
    }

    getSingleEntity(familyId: number, productId: number): Observable<IProduct> {
        return this._products[familyId] ? observableOf(this._products[familyId].find(product => productId == product.id)!) :
        this.fetchAll(familyId)
        .pipe(
            map((_products: IProduct[]): IProduct => {
                this._products[familyId] = _products;
                
                return _products.find(product => productId == product.id)!;
            })
        );
    }

    dispose(): void {
        this._products = {};
    }
}