import { Component, Input, OnInit } from '@angular/core';
import { GroupType } from 'src/app/model/group-type';

@Component({
  selector: 'app-sidebar-section-group',
  templateUrl: './sidebar-section-group.component.html',
  styleUrls: ['./sidebar-section-group.component.scss']
})
export class SidebarSectionGroupComponent implements OnInit {

  @Input()
  isExpanded = false;

  @Input()
  name: string;

  @Input()
  content: string;

  @Input()
  type: GroupType;

  isAdding = false;

  constructor() { }

  ngOnInit(): void {
  }

  addHandler(): void {
    this.isAdding = true;
  }

  toggleExpanded(): void {
    this.isExpanded = !this.isExpanded;
  }

  isSheetGroup(): boolean {
    return this.type === 'SHEET';
  }

}
