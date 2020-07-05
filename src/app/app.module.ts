import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EagerComponent } from './pages/eager/eager.component';
import { ParentComponent } from './pages/SharingDataExample/parent.component';
import { SiblingComponent } from './pages/SharingDataExample/sibling.component';
import { SharedModule } from './shared/shared.module';
import { LazyModule } from './pages/lazy/lazy.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    EagerComponent,
    ParentComponent,
    SiblingComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,  //https://stackoverflow.com/questions/47236963/no-provider-for-httpclient/47484882#47484882
    AppRoutingModule,
    SharedModule,
    LazyModule,
    NgxDatatableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
