import {NgModule} from '@angular/core';
import {ClientComponent} from './layout/client.component';
import {SharedModule} from '../shared/shared.module';
import {ClientSideMenuComponent} from './layout/side-menu/side-menu.component';
import {ClientHeaderComponent} from './layout/header/header.component';
import {ClientFooterComponent} from './layout/footer/footer.component';
import {ClientRoutingModule} from "./client-routing.module";

@NgModule({
  declarations: [
    ClientComponent,
    ClientFooterComponent,
    ClientHeaderComponent,
    ClientSideMenuComponent
  ],
  imports: [
    ClientRoutingModule
  ]
})
export class ClientModule {
}
