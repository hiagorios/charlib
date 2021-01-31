import { SidebarGroupedContent } from "./sidebar-grouped-content";

export interface SidebarSection {
  headerText: string;
  isOpen: boolean;
  groups: SidebarGroupedContent[];
}
