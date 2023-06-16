import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CommonTypeComponent } from './common-type/common-type.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { RequestComponent } from './request/request.component';

@NgModule({
  declarations: [
    AppComponent,
    CommonTypeComponent,
   
    RequestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
