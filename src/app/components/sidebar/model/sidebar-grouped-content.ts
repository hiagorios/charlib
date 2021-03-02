import { Group } from 'src/app/model/group';
import { GroupType } from 'src/app/model/group-type';

export interface SidebarGroupedContent {
  id: Group['id'];
  name: string;
  type: GroupType;
  isExpanded?: boolean;
  content: string[];
}
