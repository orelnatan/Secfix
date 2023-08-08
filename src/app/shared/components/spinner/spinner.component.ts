import { Component, Input } from '@angular/core';

@Component({
  selector: 'spinner',
  template: `
    <mat-spinner [diameter]="diameter" [strokeWidth]="strokeWidth"></mat-spinner>
  `,
  styles: ['mat-spinner { margin: 0 auto }']
})
export class SpinnerComponent {
    @Input() diameter: number;
    @Input() strokeWidth: number;
    @Input() color: string;
}
