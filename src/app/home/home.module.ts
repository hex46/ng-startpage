import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { SearchComponent } from './search/search.component';
import { DateComponent } from './date/date.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NavigationHomeComponent } from './navigation-home/navigation-home.component';


@NgModule({
  declarations: [
    SearchComponent,
    DateComponent,
    NavigationHomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule
  ]
})
export class HomeModule { }
