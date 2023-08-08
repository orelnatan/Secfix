import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { BrandsService } from '@secfix/home/services';
import { IBrand } from '@secfix/home/models';

@Component({
    selector: 'brands-page',
    templateUrl: './brands-page.component.html',
    styleUrls: ['./brands-page.component.scss']
})
export class BrandsPageComponent {
    brands$: Observable<IBrand[]> = this.brandsService.fetchAll();

    constructor(
        private readonly brandsService: BrandsService
    ) {}
}
