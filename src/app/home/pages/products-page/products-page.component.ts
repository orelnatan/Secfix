import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { AppState } from '@secfix/store';
import { HomeActions, HomeSelectors } from '@secfix/home/store';
import { ProductsService } from '@secfix/home/services';
import { IProduct } from '@secfix/home/models';

const PARAM_NAME: string = "familyId";

@Component({
  selector: 'products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss']
})
export class ProductsPageComponent implements OnInit {
    products$: Observable<IProduct[]>;

    inProgress$: Observable<boolean>;

    constructor(
        private readonly store$: Store<AppState>,
        private readonly activatedRoute: ActivatedRoute
    ) {
        this.products$ = <Observable<IProduct[]>>this.store$.select(
            HomeSelectors.getEntities
        );

        this.inProgress$ = this.store$.select(
            HomeSelectors.getInProgress()
        );
    }

    ngOnInit(): void {
        this.store$.dispatch(new HomeActions.FetchAll(
            { service: ProductsService, parentId: this.familyId }
        ));
    }

    get familyId(): number {
        return Number(this.activatedRoute.snapshot.paramMap.get(PARAM_NAME));
    }
}
