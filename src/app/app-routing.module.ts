import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EagerComponent } from './pages/eager/eager.component';
import { SiblingComponent } from './pages/SharingDataExample/sibling.component';
// import { AdminModule } from './admin/admin.module';

const routes: Routes = [
  {
    path: 'eager',
    component: EagerComponent
  },
  {
    path: 'lazy',
    loadChildren: () => import('./pages/lazy/lazy.module').then(m => m.LazyModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(module => module.AdminModule),
    // loadChildren: './admin/admin.module#AdminModule'
    // loadChildren: () => AdminModule //This way is working but AdminModule will be included in main.js while rendering js files
  },
  {
    path: 'data-sharing',
    component: SiblingComponent
  },
  // {
  //   path: 'parent',
  //   component: LayoutComponent,
  //   children: [
  //     {
  //       path: 'lazy',
  //       loadChildren: './pages/lazy/lazy.module#LazyModule'
  //     }
  //   ]
  // },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
