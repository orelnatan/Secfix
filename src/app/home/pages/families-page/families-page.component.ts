import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { AppState } from '@secfix/store';
import { HomeActions, HomeSelectors } from '@secfix/home/store';
import { FamiliesService } from '@secfix/home/services';
import { IFamily } from '@secfix/home/models';

const PARAM_NAME: string = "categoryId";

@Component({
  selector: 'families-page',
  templateUrl: './families-page.component.html',
  styleUrls: ['./families-page.component.scss']
})
export class FamiliesPageComponent implements OnInit {
  families$: Observable<IFamily[]>;

  inProgress$: Observable<boolean>;

  constructor(
      private readonly store$: Store<AppState>,
      private readonly activatedRoute: ActivatedRoute
  ) {
    this.families$ = <Observable<IFamily[]>>this.store$.select(
        HomeSelectors.getEntities
    );

    this.inProgress$ = this.store$.select(
        HomeSelectors.getInProgress()
    );
  }

  ngOnInit(): void {
    this.store$.dispatch(new HomeActions.FetchAll(
        { service: FamiliesService, parentId: this.categoryId }
    ));
  }

  get categoryId(): number {
    return Number(this.activatedRoute.snapshot.paramMap.get(PARAM_NAME));
  }
}
