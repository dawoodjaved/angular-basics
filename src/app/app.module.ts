import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { AddItemsComponent } from './components/add-items/add-items.component'
import { ShowItemsComponent } from './components/show-items/show-items.component';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { FourZeroFourComponent } from './components/four-zero-four/four-zero-four.component'

import {MatFormFieldModule} from '@angular/material/form-field';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ReactiveFormsBasicsComponent } from './components/reactive-forms-basics/reactive-forms-basics.component';

import {AuthGuard} from './Guards/auth.guard';
import { ItemDetailsComponent } from './users/components/item-details/item-details.component';


const routes: Routes = [
  { path: 'home', component: ShowItemsComponent },
  { path: 'add-items', component: AddItemsComponent, canActivate: [AuthGuard] },
  { path: 'reactive-forms', component: ReactiveFormsBasicsComponent},
  { path: 'users', loadChildren: () => import('./users/users.module').then(m => m.UsersModule) },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: '404', component: FourZeroFourComponent}, 
  {path: '**', redirectTo: '/404'}
];
@NgModule({
  
  declarations: [
    AppComponent,
    HeaderComponent,
    AddItemsComponent,
    ShowItemsComponent,
    FourZeroFourComponent,
    ReactiveFormsBasicsComponent,
    ItemDetailsComponent, 
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
