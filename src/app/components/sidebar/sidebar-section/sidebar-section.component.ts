import { Component, Input, OnInit } from '@angular/core';
import { SidebarGroupedContent } from '../model/sidebar-grouped-content';
import { SidebarSectionType } from '../model/sidebar-section';

@Component({
  selector: 'app-sidebar-section',
  templateUrl: './sidebar-section.component.html',
  styleUrls: ['./sidebar-section.component.scss']
})
export class SidebarSectionComponent implements OnInit {

  @Input()
  isExpanded = false;

  @Input()
  headerText: string;

  @Input()
  type: SidebarSectionType;

  @Input()
  groups: SidebarGroupedContent[];

  constructor() { }

  ngOnInit(): void {
  }

  clickHeader() {
    // TODO
  }

  createGroup() {
    // TODO
  }

  toggleExpanded() {
    this.isExpanded = !this.isExpanded;
  }

}
