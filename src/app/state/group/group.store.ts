import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';
import { Group } from 'src/app/model/group';

export interface GroupState {
  groups: Group[];
}

export function createInitialState(): GroupState {
  return {
    groups: [
      {
        id: '1',
        name: 'D&D',
        type: 'SHEET'
      },
      {
        id: '2',
        name: 'FATE',
        type: 'SHEET'
      },
      {
        id: '3',
        name: 'PokeUESC',
        type: 'IMAGE'
      },
      {
        id: '4',
        name: 'Usar algum dia',
        type: 'IMAGE'
      }
    ]
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'group' })
export class GroupStore extends Store<GroupState> {

  constructor() {
    super(createInitialState());
  }

}
