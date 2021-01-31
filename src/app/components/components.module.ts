import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopbarComponent } from './topbar/topbar.component';
import { ButtonModule } from 'primeng/button';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SidebarSectionComponent } from './sidebar/sidebar-section/sidebar-section.component';

@NgModule({
  declarations: [TopbarComponent, SidebarComponent, SidebarSectionComponent],
  imports: [
    CommonModule,
    ButtonModule
  ],
  exports: [
    TopbarComponent,
    SidebarComponent
  ]
})
export class ComponentsModule { }
