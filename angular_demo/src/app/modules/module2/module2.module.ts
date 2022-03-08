import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Component2Component } from 'src/app/components/component2/component2.component';



@NgModule({
  declarations: [
    Component2Component
  ],
  imports: [
    CommonModule
  ],
  exports: [
    Component2Component
  ]
})
export class Module2Module { }
