import { AlertType } from './alert-type.enum';

import { IAction } from "./iaction.interface";

export interface IAlertData {
    type: AlertType;
    title?: string;
    subTitle?: string;
    content?: string;
    actions?: Array<IAction>;
}

