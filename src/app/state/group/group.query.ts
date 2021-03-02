import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { SidebarGroupedContent } from 'src/app/components/sidebar/model/sidebar-grouped-content';
import { Group } from 'src/app/model/group';
import { Image } from 'src/app/model/image';
import { Sheet } from 'src/app/model/sheet';
import { ImageQuery } from '../image/image.query';
import { SheetQuery } from '../sheet/sheet.query';
import { GroupStore, GroupState } from './group.store';

@Injectable({ providedIn: 'root' })
export class GroupQuery extends Query<GroupState> {

  groups$ = this.select('groups');

  constructor(
    protected store: GroupStore,
    protected imagesQuery: ImageQuery,
    protected sheetsQuery: SheetQuery
  ) {
    super(store);
  }

  sidebarGroups$ = combineLatest([
    this.select('groups'),
    this.sheetsQuery.select('sheets'),
    this.imagesQuery.select('images')
  ]
 ).pipe(map(joinSheetsAndImages));

}

function joinSheetsAndImages([groups, sheets, images]: [Group[], Sheet[], Image[]]) {
  let sidebarGroups: SidebarGroupedContent[] = createSidebarGroups(groups, sheets);
  sidebarGroups = sidebarGroups.concat(createSidebarGroups(groups, images));
  return sidebarGroups;
}

function createSidebarGroups(groups: Group[], content: Sheet[] | Image[]) {
  const sidebarGroups: SidebarGroupedContent[] = [];
  content.forEach(item => {
    const sidebarGroup = sidebarGroups.find(g => g.id === item.groupId);
    if (sidebarGroup) {
      sidebarGroup.content.push(item.name);
    } else {
      const group = groups.find(g => g.id === item.groupId);
      sidebarGroups.push({
        ...group,
        content: [item.name]
      });
    }
  });
  return sidebarGroups;
}
