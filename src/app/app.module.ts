import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RoutingModule,routingComponents } from "app/extraModules/routing.module";
import { SecretComponent } from './secret/secret.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AnimationsModule } from "app/extraModules/animations.module";

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    SecretComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RoutingModule,
    BrowserAnimationsModule,
    AnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
