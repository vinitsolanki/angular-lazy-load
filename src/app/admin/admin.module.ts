import { NgModule } from '@angular/core';
import { AdminComponent } from './layout/admin.component';
import { AdminRoutingModule, AdminDeclarations } from './admin-routing.module';
import { AdminSideMenuComponent } from './layout/side-menu/side-menu.component';
import { AdminHeaderComponent } from './layout/header/header.component';
import { AdminFooterComponent } from './layout/footer/footer.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { DatePipe } from '@angular/common';

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
    NgxDatatableModule
  ], providers: [DatePipe]
})
export class AdminModule {
}
