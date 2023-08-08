import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { ProductsService } from '@secfix/home/services';
import { IProduct } from '@secfix/home/models';

const FAMILY_PARAM_NAME: string = "familyId";
const PRODUCT_PARAM_NAME: string = "productId";

@Component({
  selector: 'product-spec-page',
  templateUrl: './product-spec-page.component.html',
  styleUrls: ['./product-spec-page.component.scss']
})
export class ProductSpecPageComponent {
    product$: Observable<IProduct> = this.productsService.getSingleEntity(this.familyId, this.productId);

    constructor(
        private readonly productsService: ProductsService,
        private readonly activatedRoute: ActivatedRoute
    ) {}

    get productId(): number {
        return Number(this.activatedRoute.snapshot.paramMap.get(PRODUCT_PARAM_NAME));
    }

    get familyId(): number {
        return Number(this.activatedRoute.snapshot.paramMap.get(FAMILY_PARAM_NAME));
    }
}
