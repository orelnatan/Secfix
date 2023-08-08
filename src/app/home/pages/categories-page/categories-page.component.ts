import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { CategoriesService } from '@secfix/home/services';
import { ICategory } from '@secfix/home/models';

const PARAM_NAME: string = "brandId";

@Component({
    selector: 'categories-page',
    templateUrl: './categories-page.component.html',
    styleUrls: ['./categories-page.component.scss']
})
export class CategoriesPageComponent {
    categories$: Observable<ICategory[]> = this.categoriesService.fetchAll(this.brandId);

    constructor(
        private readonly categoriesService: CategoriesService,
        private readonly activatedRoute: ActivatedRoute
    ) {}

    get brandId(): number {
        return Number(this.activatedRoute.snapshot.paramMap.get(PARAM_NAME));
    }
}
