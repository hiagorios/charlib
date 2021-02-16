import { SidebarGroupedContent } from './sidebar-grouped-content';

export type SidebarSectionType = 'SHEET' | 'IMAGE';
export interface SidebarSection {
  headerText: string;
  isExpanded?: boolean;
  type: SidebarSectionType;
  groups: SidebarGroupedContent[];
}
