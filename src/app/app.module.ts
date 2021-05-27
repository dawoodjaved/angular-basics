import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { AddItemsComponent } from './components/add-items/add-items.component'
import { ShowItemsComponent } from './components/show-items/show-items.component';
import { RouterModule, Routes } from '@angular/router'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AddItemsComponent,
    ShowItemsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
