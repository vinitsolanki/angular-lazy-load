import { NgModule } from '@angular/core';
import { AdminComponent } from './layout/admin.component';
import { AdminRoutingModule, declarations } from './admin-routing.module';
import { AdminSideMenuComponent } from './layout/side-menu/side-menu.component';
import { AdminHeaderComponent } from './layout/header/header.component';
import { AdminFooterComponent } from './layout/footer/footer.component';
import { AgGridModule } from 'ag-grid-angular';


@NgModule({
  declarations: [
    AdminComponent,
    AdminFooterComponent,
    AdminHeaderComponent,
    AdminSideMenuComponent,
    ...declarations
  ],
  imports: [
    AdminRoutingModule,
    AgGridModule.withComponents([])
  ]
})
export class AdminModule {
}
