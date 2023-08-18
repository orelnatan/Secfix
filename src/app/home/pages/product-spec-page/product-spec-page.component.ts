import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { AppState } from '@secfix/store';
import { EntityType, HomeActions, HomeSelectors } from '@secfix/home/store';
import { ProductsService } from '@secfix/home/services';
import { IProduct } from '@secfix/home/models';

const FAMILY_PARAM_NAME: string = "familyId";
const PRODUCT_PARAM_NAME: string = "productId";

@Component({
  selector: 'product-spec-page',
  templateUrl: './product-spec-page.component.html',
  styleUrls: ['./product-spec-page.component.scss']
})
export class ProductSpecPageComponent implements OnInit {
    product$: Observable<IProduct>;

    inProgress$: Observable<boolean>;

    constructor(
        private readonly store$: Store<AppState>,
        private readonly activatedRoute: ActivatedRoute
    ) {
        this.product$ = <Observable<IProduct>>this.store$.select(
            HomeSelectors.getEntity(EntityType.Product)
        );

        this.inProgress$ = this.store$.select(
            HomeSelectors.getInProgress(EntityType.Product)
        );
    }

    ngOnInit(): void {
        this.store$.dispatch(new HomeActions.GetSingle({ 
              service: ProductsService,
              type: EntityType.Product,
              parentId: this.familyId,
              childId: this.productId,
            }
        ));
    }

    get familyId(): number {
        return Number(this.activatedRoute.snapshot.paramMap.get(FAMILY_PARAM_NAME));
    }

    get productId(): number {
        return Number(this.activatedRoute.snapshot.paramMap.get(PRODUCT_PARAM_NAME));
    }
}
