import { NgModule } from '@angular/core';
import { CounterService } from './counter.service';
import {DataService} from './data.service';

@NgModule({
    providers: [
      CounterService,
      DataService
    ],
})
export class SharedModule { }
