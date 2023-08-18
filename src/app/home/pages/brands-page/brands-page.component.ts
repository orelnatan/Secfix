import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { AppState } from '@secfix/store';
import { HomeActions, HomeSelectors } from '@secfix/home/store';
import { BrandsService } from '@secfix/home/services';
import { IBrand } from '@secfix/home/models';

@Component({
    selector: 'brands-page',
    templateUrl: './brands-page.component.html',
    styleUrls: ['./brands-page.component.scss']
})
export class BrandsPageComponent implements OnInit {
    brands$: Observable<IBrand[]>;

    inProgress$: Observable<boolean>;

    constructor(
        private readonly store$: Store<AppState>
    ) {
        this.brands$ = <Observable<IBrand[]>>this.store$.select(
            HomeSelectors.getEntities
        );

        this.inProgress$ = this.store$.select(
            HomeSelectors.getInProgress()
        );
    }

    ngOnInit(): void {
        this.store$.dispatch(new HomeActions.FetchAll(
            { service: BrandsService }
        ));
    }
}
