import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '@secfix/core/guards';

import { AuthRootComponent } from './auth-root.component';

const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: '', component: AuthRootComponent, children:
        [
            { 
                path: 'login',
                loadChildren: () => import('./pages/login-page').then(login => login.LoginPageModule),
                canActivateChild: [AuthGuard],
                data: {
                    blockWhileAuthenticated: true,
                    crumbs: [
                        {
                            path: "login",
                            name: "Login"
                        }
                    ]
                },
            },
            { 
                path: 'registration',
                loadChildren: () => import('./pages/registration-page').then(registration => registration.RegistrationPageModule),
                data: {
                    crumbs: [
                        {
                            path: "registration",
                            name: "Registration"
                        }
                    ]
                }
            }
        ]
    },
];

@NgModule({
    imports: [ RouterModule.forChild(routes), ],
    exports: [ RouterModule ]
})
  
export class AuthRoutingModule {}