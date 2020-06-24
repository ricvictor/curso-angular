import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Component1Component } from './component1/component1.component';
import { Module1Module } from './module1/module1.module';
import { Component1Service } from './component1/component1.service';

@NgModule({
  declarations: [
    AppComponent,
    Component1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Module1Module
  ],
  providers: [ Component1Service ],
  bootstrap: [AppComponent]
})
export class AppModule { }
