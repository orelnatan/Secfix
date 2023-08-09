import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { AppState } from '@secfix/store';
import { AuthActions, AuthSelectors } from '@secfix/auth/store';
import { ILogin } from '@secfix/auth/models';

@Component({
  selector: 'login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {
  login: ILogin = {
    "username": "Graves Oneal",
    "email": "gravesoneal@quordate.com",
    "password": "78freweb5d4654"
  } as ILogin;
  
  inProgress$: Observable<boolean>;

  constructor(
    private readonly store$: Store<AppState>,
  ) {
        this.inProgress$ = this.store$.select(
            AuthSelectors.getInProgress
        );
    }

  handleSubmit(login: ILogin): void {
    this.store$.dispatch(new AuthActions.Login(
        { login: { ...login } }
    ));
  }
}
