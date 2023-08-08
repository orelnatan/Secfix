import { Directive } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

import { LoaderModalComponent } from '../modals';

@Directive({
    selector: '[loader]',
    exportAs: 'loader'
})
export class LoaderDirective {    
    private matDialogRef: MatDialogRef<LoaderModalComponent>;

    constructor(
        private readonly matDialog: MatDialog,
    ) {}

    show(): void {
        this.matDialogRef = this.matDialog.open(LoaderModalComponent, {
            disableClose: true,
            panelClass: "loader-modal"
        })
    }

    hide(): void {
        this.matDialogRef?.close();
    }
}