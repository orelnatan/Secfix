import { Component, Input } from '@angular/core';

@Component({
    selector: 'crumbs-navbar',
    templateUrl: './crumbs-navbar.component.html',
    styleUrls: ['./crumbs-navbar.component.scss'],
})
export class CrumbsNavbarComponent {
    @Input() name: string;

}