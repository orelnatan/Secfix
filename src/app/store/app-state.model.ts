import { AuthState } from "@secfix/auth/store";
import { CoreState } from "@secfix/core/store";
import { HomeState } from "@secfix/home/store";

export interface AppState {
    core: CoreState,
    auth: AuthState,
    home: HomeState
}
