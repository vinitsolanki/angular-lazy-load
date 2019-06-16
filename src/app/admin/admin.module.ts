import { NgModule } from '@angular/core';
import { AdminComponent } from './layout/admin.component';
import { AdminRoutingModule, declarations } from './admin-routing.module';
import { SharedModule } from '../shared/shared.module';
import { AdminSideMenuComponent } from './layout/side-menu/side-menu.component';
import { AdminHeaderComponent } from './layout/header/header.component';
import { AdminFooterComponent } from './layout/footer/footer.component';
import { LoginComponent } from '../pages/login/login.component';
import { AddProductComponent } from '../pages/product/add-product/add-product.component';

@NgModule({
  declarations: [
    AdminComponent,
    AdminFooterComponent,
    AdminHeaderComponent,
    AdminSideMenuComponent,
    ...declarations
  ],
  imports: [
    AdminRoutingModule
  ]
})
export class AdminModule {
}
