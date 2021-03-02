import { Component, OnInit } from '@angular/core';
import { GroupQuery } from 'src/app/state/group/group.query';
import { SidebarGroupedContent } from './model/sidebar-grouped-content';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  sheetSectionContent: SidebarGroupedContent[];
  imageSectionContent: SidebarGroupedContent[];

  constructor(private groupQuery: GroupQuery) { }

  ngOnInit(): void {
    this.groupQuery.sidebarGroups$.subscribe(groups => {
      this.sheetSectionContent = groups.filter(g => g.type === 'SHEET');
      this.imageSectionContent = groups.filter(g => g.type === 'IMAGE');
    });
  }

}
