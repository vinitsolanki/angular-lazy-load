import { NgModule } from '@angular/core';

import { routing } from './lazy.routing';
import {SharedModule} from '../../shared/shared.module';
import {LazyComponent} from './lazy.component';

@NgModule({
  imports: [
    SharedModule,
    routing
  ],
  declarations: [LazyComponent]
})
export class LazyModule {}
