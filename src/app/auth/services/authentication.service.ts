import { Injectable }  from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';  

import { environment } from '@secfix/env/environment';
import { IUser } from '@secfix/shared/models';

import { ILogin } from '../models';

@Injectable()
export class AuthenticationService {
    constructor(
        private readonly httpClient: HttpClient,
    ) {}

    login(login: ILogin): Observable<IUser> {
        return this.httpClient.post<IUser>(environment.apis.auth.login, {
            ... login
        })
    }

}
