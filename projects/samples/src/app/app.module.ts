import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FirstOrganizationalChartComponent } from './first-organizational-chart/first-organizational-chart.component';
import { BasicPrimitivesModule } from 'projects/ngx-basic-primitives/src/public-api';

@NgModule({
  declarations: [
    AppComponent,
    FirstOrganizationalChartComponent
  ],
  imports: [
    BrowserModule,
    BasicPrimitivesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
