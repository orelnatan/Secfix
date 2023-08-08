import { Component, Input } from '@angular/core';

@Component({
  selector: 'modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
    @Input() title: string;
    @Input() subTitle: string;
    @Input() underSubTitle: string;
    @Input() titleColor: string;

    @Input() excludeActions: boolean;
}
