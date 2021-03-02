import { Component, Input, OnInit } from '@angular/core';
import { GroupType } from 'src/app/model/group-type';
import { SidebarGroupedContent } from '../model/sidebar-grouped-content';

@Component({
  selector: 'app-sidebar-section',
  templateUrl: './sidebar-section.component.html',
  styleUrls: ['./sidebar-section.component.scss']
})
export class SidebarSectionComponent implements OnInit {

  isExpanded = true;

  @Input()
  headerText: string;

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
