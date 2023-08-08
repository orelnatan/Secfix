import { Component, Input } from '@angular/core';

@Component({
   selector: 'product-spec-item',
   templateUrl: './product-spec-item.component.html',
   styleUrls: ['./product-spec-item.component.scss']
})
export class ProductSpecItemComponent {
    @Input() title: string;
    @Input() value: string | number;
}
