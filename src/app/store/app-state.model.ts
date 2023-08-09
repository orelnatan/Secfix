import { AuthState } from "@secfix/auth/store";
import { CoreState } from "@secfix/core/store";

export interface AppState {
    auth: AuthState,
    core: CoreState
}
