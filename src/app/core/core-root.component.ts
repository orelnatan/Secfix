import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from '@secfix/store';
import { CoreActions } from '@secfix/core/store';
import { AuthActions } from '@secfix/auth/store';

@Component({
  selector: 'core-root',
  template: `
     <root-layout #logout="logout" (logout)="dispatchLogout()">
        <layout-header header-primary>
            <app-navbar (logout)="logout.show()"></app-navbar>
        </layout-header>

        <router-outlet></router-outlet>
    </root-layout>
  `,
})
export class CoreRootComponent implements OnInit {
    constructor(
      private readonly store$: Store<AppState>,
    ) {}

    ngOnInit(): void {
        this.store$.dispatch(new CoreActions.AutoLogin());
    }

    dispatchLogout(): void {
        this.store$.dispatch(new AuthActions.Logout());
    }
}



