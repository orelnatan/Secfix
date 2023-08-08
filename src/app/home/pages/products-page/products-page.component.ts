import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { ProductsService } from '@secfix/home/services';
import { IProduct } from '@secfix/home/models';

const PARAM_NAME: string = "familyId";

@Component({
  selector: 'products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss']
})
export class ProductsPageComponent {
    products$: Observable<IProduct[]> = this.productsService.fetchAll(this.familyId);

    constructor(
        private readonly productsService: ProductsService,
        private readonly activatedRoute: ActivatedRoute
    ) {}

    get familyId(): number {
        return Number(this.activatedRoute.snapshot.paramMap.get(PARAM_NAME));
    }
}
