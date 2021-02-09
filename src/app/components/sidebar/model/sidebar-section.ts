import { SidebarGroupedContent } from "./sidebar-grouped-content";

export interface SidebarSection {
  headerText: string;
  isExpanded: boolean;
  groups: SidebarGroupedContent[];
}
