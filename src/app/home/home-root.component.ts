import { Component } from '@angular/core';

@Component({
  selector: 'home-root',
  template: `
    <root-layout>
        <layout-header header-primary>
            <utils-navbar></utils-navbar>
        </layout-header>

        <layout-header header-secondary>
            <crumbs-navbar></crumbs-navbar>
        </layout-header>

        <layout-sidebar side-primary>
            <side-navbar></side-navbar>
        </layout-sidebar>

        <router-outlet></router-outlet>
    </root-layout>
  `,
})
export class HomeRootComponent {}