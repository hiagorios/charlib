import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TopbarComponent } from './topbar.component';

@NgModule({
  declarations: [
    TopbarComponent
  ],
  imports: [
    CommonModule,
    ButtonModule
  ],
  exports: [
    TopbarComponent
  ]
})
export class TopbarModule { }
