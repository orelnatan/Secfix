import { Injectable, }  from '@angular/core';
import { Observable, Subscriber } from 'rxjs';

import { Interceptor } from '@secfix/shared/global-events';

import { Secfix, GlobalEventTypes, StorageKeys, StorageValues } from '../models';

const LOCAL_STORAGE_NAME: string = "Secfix";

@Interceptor([{ type: GlobalEventTypes.Logout, action: "clear" }])
@Injectable()
export class SecfixLocalStorageService {
    private _storage: Secfix;

    constructor() {
        this._storage = JSON.parse(
            localStorage.getItem(LOCAL_STORAGE_NAME)!
        ) || {};
    }

    public retrieve<T extends StorageValues>(key: StorageKeys): Observable<T> {
        return new Observable((observer: Subscriber<T>): void => {
            observer.next(this._storage[key] as T);
        })
    }

    public store(key: StorageKeys, value: StorageValues): void {
        this._storage[key] = value;

        this._update(this._storage);
    }

    public clear(): void {
        this._storage = {} as Secfix;

        this._update(this._storage);
    }

    private _update(storage: Secfix): void {
        localStorage.removeItem(LOCAL_STORAGE_NAME);

        localStorage.setItem(LOCAL_STORAGE_NAME, JSON.stringify(storage));
    }
}