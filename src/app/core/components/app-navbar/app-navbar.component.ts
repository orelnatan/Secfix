import { Component, EventEmitter, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { AppState } from '@secfix/store';
import { AuthSelectors } from '@secfix/auth/store';
import { IUser } from '@secfix/auth/models';

@Component({
  selector: 'app-navbar',
  templateUrl: './app-navbar.component.html',
  styleUrls: ['./app-navbar.component.scss'],
})
export class AppNavbarComponent {
  @Output() logout: EventEmitter<void> = new EventEmitter();
  
  user$: Observable<IUser>;

  constructor(
    private readonly store$: Store<AppState>,
  ) {
    this.user$ = this.store$.select(
        AuthSelectors.getUser
    );
  }
}
