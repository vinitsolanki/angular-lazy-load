import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ClientComponent} from './layout/client.component';
import {AddProductComponent} from '../pages/product/add-product/add-product.component';
import {ManageProductComponent} from '../pages/product/manage-product/manage-product.component';

const routes: Routes = [
  {
    path: 'client', component: ClientComponent, children: [
      {path: 'addProduct', component: AddProductComponent},
      {path: 'manageProduct', component: ManageProductComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule {
}
