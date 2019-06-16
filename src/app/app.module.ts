import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EagerComponent } from './pages/eager/eager.component';
import { ParentComponent } from './pages/SharingDataExample/parent.component';
import { SiblingComponent } from './pages/SharingDataExample/sibling.component';
import { SharedModule } from './shared/shared.module';
import { LazyModule } from './pages/lazy/lazy.module';

@NgModule({
  declarations: [
    AppComponent,
    EagerComponent,
    ParentComponent,
    SiblingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    LazyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
