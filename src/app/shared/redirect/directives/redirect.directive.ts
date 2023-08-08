import { Directive, HostListener } from "@angular/core";
import { Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

import { RedirectService } from "../services";

@UntilDestroy()
@Directive({
  selector: '[redirect]',
  exportAs: 'redirect'
})
export class RedirectDirective {
    @HostListener("click") onClick(): void {
        this.url ? this.router.navigateByUrl(this.url) : null;
    }

    public url: string;

    constructor(
        private readonly redirectService: RedirectService,
        private readonly router: Router
    ) {
        this.redirectService.url$.pipe(untilDestroyed(this))
        .subscribe((url: string) => {
            this.url = url;
        })
    }
}