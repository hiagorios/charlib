import { Group } from './group';

export interface Image {
  id: string;
  name: string;
  bytes: string;
  groupId: Group['id'];
}

