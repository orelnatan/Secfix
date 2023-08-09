import { IUser } from "../models";

export interface AuthState {
   user: IUser | null;
   inProgress: boolean;
}
