import { Component } from '@angular/core';

@Component({
  selector: 'loader-modal',
  template: `
    <modal [excludeActions]="true">
        <ng-container content>
            <spinner [diameter]="65" [strokeWidth]="5"></spinner>
        </ng-container>
    </modal>
  `,
})
export class LoaderModalComponent {}
