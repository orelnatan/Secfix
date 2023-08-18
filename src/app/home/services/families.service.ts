import { Injectable }  from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, Observable, of as observableOf } from 'rxjs';   

import { environment } from '@secfix/env/environment';
import { GlobalEventTypes } from '@secfix/core/models';
import { Interceptor } from '@secfix/shared/global-events';
import { IFamily } from '@secfix/home/models';

import { EntitiesAbstractService } from './entities-abstract.service';

@Injectable()
export class FamiliesService implements EntitiesAbstractService {
    private _families: Record<number, IFamily[]> = {};

    constructor(
        private readonly httpClient: HttpClient,
    ) {}
                
    fetchAll(categoryId: number): Observable<IFamily[]> {
        let httpParams: HttpParams = new HttpParams();
        httpParams = httpParams.append("categoryId", categoryId);
        
        return this._families[categoryId] ? observableOf(this._families[categoryId]) : this.httpClient.get<IFamily[]>(environment.apis.home.families.byCategoryId, {
            params: httpParams
        }).pipe(
            map((_families: IFamily[]): IFamily[] => {
                this._families[categoryId] = _families;
                
                return _families;
            })
        );
    }

    getSingleEntity(categoryId: number, familyId: number): Observable<IFamily> {
        return this._families[categoryId] ? observableOf(this._families[categoryId].find(family => familyId == family.id)!) :
        this.fetchAll(categoryId)
        .pipe(
            map((_families: IFamily[]): IFamily => {
                this._families[categoryId] = _families;
                
                return _families.find(family => familyId == family.id)!;
            })
        );
    }

    dispose(): void {
        this._families = {};
    }
}