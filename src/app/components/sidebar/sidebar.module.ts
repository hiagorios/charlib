import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { CreateSheetComponent } from './sidebar-section-group/create-sheet/create-sheet.component';
import { SidebarSectionGroupComponent } from './sidebar-section-group/sidebar-section-group.component';
import { SidebarSectionComponent } from './sidebar-section/sidebar-section.component';
import { SidebarComponent } from './sidebar.component';

@NgModule({
  declarations: [
    SidebarComponent,
    SidebarSectionComponent,
    SidebarSectionGroupComponent,
    CreateSheetComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    DialogModule,
    InputTextModule,
    DropdownModule
  ],
  exports: [
    SidebarComponent
  ]
})
export class SidebarModule { }
