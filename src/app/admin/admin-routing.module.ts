import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './layout/admin.component';
import { AddProductComponent } from '../pages/product/add-product/add-product.component';
import { ManageProductComponent } from '../pages/product/manage-product/manage-product.component';
import { LoginComponent } from '../pages/login/login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '', component: AdminComponent, children: [
      { path: 'addProduct', component: AddProductComponent },
      { path: 'manageProduct', component: ManageProductComponent },
    ]
  }
];

export const declarations = [
  LoginComponent,
  AdminComponent,
  AddProductComponent,
  ManageProductComponent
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
}
