import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { FamiliesService } from '@secfix/home/services';
import { IFamily } from '@secfix/home/models';

const PARAM_NAME: string = "categoryId";

@Component({
  selector: 'families-page',
  templateUrl: './families-page.component.html',
  styleUrls: ['./families-page.component.scss']
})
export class FamiliesPageComponent {
  families$: Observable<IFamily[]> = this.familiesService.fetchAll(this.categoryId);

  constructor(
      private readonly familiesService: FamiliesService,
      private readonly activatedRoute: ActivatedRoute
  ) {}

  get categoryId(): number {
    return Number(this.activatedRoute.snapshot.paramMap.get(PARAM_NAME));
  }
}
