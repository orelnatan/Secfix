import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
   { 
      path: '',
      redirectTo: '',
      pathMatch: 'full'
   },
   { 
      path: '',
      loadChildren: () => import('./core/core.module').then(core => core.CoreModule)
   },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
