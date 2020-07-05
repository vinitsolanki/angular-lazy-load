import { NgModule } from '@angular/core';

import { routing } from './lazy.routing';
import {SharedModule} from '../../shared/shared.module';
import {LazyComponent} from './lazy.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

@NgModule({
  imports: [
    SharedModule,
    routing,
    NgxDatatableModule
  ],
  declarations: [LazyComponent]
})
export class LazyModule {}
