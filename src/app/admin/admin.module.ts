import { NgModule } from '@angular/core';
import { AdminComponent } from './layout/admin.component';
import { AdminSideMenuComponent } from './layout/side-menu/side-menu.component';
import { AdminHeaderComponent } from './layout/header/header.component';
import { AdminFooterComponent } from './layout/footer/footer.component';
import { AgGridModule } from 'ag-grid-angular';
import { AdminRoutingModule, AdminDeclarations } from './admin-routing.module';

@NgModule({
  declarations: [
    AdminComponent,
    AdminFooterComponent,
    AdminHeaderComponent,
    AdminSideMenuComponent,
    ...AdminDeclarations
  ],
  imports: [
    AdminRoutingModule,
    AgGridModule.withComponents([])
  ]
})
export class AdminModule {
}
