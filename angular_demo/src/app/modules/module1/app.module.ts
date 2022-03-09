import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from 'src/app/components/component1/app.component';
import { Module2Module } from '../module2/module2.module';
import { ReversePipe } from 'src/app/pipes/reverse.pipe'

@NgModule({
  declarations: [
    AppComponent,
    ReversePipe
  ],
  imports: [
    BrowserModule,
    Module2Module,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
