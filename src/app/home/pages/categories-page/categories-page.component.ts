import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { AppState } from '@secfix/store';
import { HomeActions, HomeSelectors } from '@secfix/home/store';
import { CategoriesService } from '@secfix/home/services';
import { ICategory } from '@secfix/home/models';

const PARAM_NAME: string = "brandId";

@Component({
    selector: 'categories-page',
    templateUrl: './categories-page.component.html',
    styleUrls: ['./categories-page.component.scss']
})
export class CategoriesPageComponent implements OnInit {
    categories$: Observable<ICategory[]>;

    inProgress$: Observable<boolean>;

    constructor(
        private readonly store$: Store<AppState>,
        private readonly activatedRoute: ActivatedRoute
    ) {
        this.categories$ = <Observable<ICategory[]>>this.store$.select(
            HomeSelectors.getEntities
        );

        this.inProgress$ = this.store$.select(
            HomeSelectors.getInProgress()
        );
    }

    ngOnInit(): void {
        this.store$.dispatch(new HomeActions.FetchAll(
            { service: CategoriesService, parentId: this.brandId }
        ));
    }

    get brandId(): number {
        return Number(this.activatedRoute.snapshot.paramMap.get(PARAM_NAME));
    }
}
