import { Component, Input, OnInit } from '@angular/core';
import { SidebarGroupedContent } from './model/sidebar-grouped-content';

@Component({
  selector: 'app-sidebar-section',
  templateUrl: './sidebar-section.component.html',
  styleUrls: ['./sidebar-section.component.scss']
})
export class SidebarSectionComponent implements OnInit {

  @Input()
  isOpen = false;

  @Input()
  headerText: string = 'HEADER';

  @Input()
  groups: SidebarGroupedContent[];

  constructor() { }

  ngOnInit(): void {
  }

}
