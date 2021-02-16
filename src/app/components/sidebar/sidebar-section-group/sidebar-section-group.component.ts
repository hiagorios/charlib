import { Component, Input, OnInit } from '@angular/core';

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

  isCreating = false;

  constructor() { }

  ngOnInit(): void {
  }

  createSheet(): void {
    this.isCreating = true;
    // TODO
  }

  toggleExpanded(): void {
    this.isExpanded = !this.isExpanded;
  }

}
