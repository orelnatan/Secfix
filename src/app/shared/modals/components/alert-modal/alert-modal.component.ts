import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { IAlertData, AlertType, IAction } from './models';

@Component({
  selector: 'alert-modal',
  templateUrl: './alert-modal.component.html',
  styleUrls: ['./alert-modal.component.scss'],
})
export class AlertModalComponent {
    colors: Record<AlertType, string> = {
      success: "#228B22",
      failure: "#FF6060",
      info: "#1D72F3",
      warning: "#FFC007",
      blank: "#000000",
    }

    constructor(
      public matDialogRef: MatDialogRef<AlertModalComponent>,
      @Inject(MAT_DIALOG_DATA) public data: IAlertData,
    ) {}

    handleAction(action: IAction): void {
      this.matDialogRef.close({
         name: action.name,
         task: action.task || (() => {})
      })
    }
}
