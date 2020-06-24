import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModuleComponent1Component } from './module-component1/module-component1.component';
import { Module1Component } from './module1.component';



@NgModule({
  declarations: [ModuleComponent1Component, Module1Component, ],
  imports: [
    CommonModule,
  ],
  exports: [
    Module1Component
  ],
})
export class Module1Module { }
