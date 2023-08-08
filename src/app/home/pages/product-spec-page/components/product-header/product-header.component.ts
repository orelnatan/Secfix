import { Component, Input } from '@angular/core';

@Component({
   selector: 'product-header',
   templateUrl: './product-header.component.html',
   styleUrls: ['./product-header.component.scss']
})
export class ProductHeaderComponent {
    @Input() name: string;
    @Input() image: string;
    @Input() description: string;

    @Input() loading: boolean;
}
