import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './guards';
import { CoreRootComponent } from './core-root.component';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '', component: CoreRootComponent, children:
        [
            { 
                path: 'home',
                loadChildren: () => import('../home/home.module').then(home => home.HomeModule),
                canActivateChild: [AuthGuard],
                data: {
                    crumbs: [
                        {
                            path: "home",
                            name: "Home"
                        }
                    ]
                }
            },
            { 
                path: 'auth',
                loadChildren: () => import('../auth/auth.module').then(auth => auth.AuthModule),
                data: {
                    crumbs: [
                        {
                            path: "auth",
                            name: "Auth",
                        }
                    ]
                }
            },
        ]
    },
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
  
export class CoreRoutingModule {}