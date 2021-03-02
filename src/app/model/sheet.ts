import { SheetType } from '../enum/SheetType';
import { Group } from './group';

export interface Sheet {
  id: string;
  name: string;
  type: SheetType;
  groupId: Group['id'];
}
