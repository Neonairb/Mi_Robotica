import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MainPageComponent } from './main-page/main-page.component';



@NgModule({
  declarations: [
    HeaderComponent,
    MainPageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LayoutModule { }
