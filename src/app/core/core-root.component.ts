import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Interceptor, GlobalEventsService } from '@secfix/shared/global-events';

import { GlobalEventTypes } from './models';

@Interceptor([
    { type: GlobalEventTypes.Logout, action: "exitApp" },
    { type: GlobalEventTypes.InProgress, action: "loading" }
])
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
export class CoreRootComponent {
    constructor(
      private readonly router: Router,
      private readonly globalEventsService: GlobalEventsService
    ) {}

    dispatchLogout(): void {
        this.globalEventsService.dispatch(
            GlobalEventTypes.Logout
        )
    }

    exitApp(): void {
        this.router.navigate(['/auth']);
    }
}



