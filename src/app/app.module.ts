import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NoFrameworkModule } from 'angular6-json-schema-form';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    NoFrameworkModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
