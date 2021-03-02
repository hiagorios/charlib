import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';
import { SheetType } from 'src/app/enum/SheetType';
import { Sheet } from 'src/app/model/sheet';

export interface SheetState {
   sheets: Sheet[];
}

export function createInitialState(): SheetState {
  return {
    sheets: [
      {
        id: '1',
        name: 'Carlos Magno',
        type: SheetType.DD3_5E,
        groupId: '1'
      },
      {
        id: '2',
        name: 'Muriel',
        type: SheetType.DD5E,
        groupId: '1'
      },
      {
        id: '3',
        name: 'Chico Bruno',
        type: SheetType.FATE,
        groupId: '2'
      },
      {
        id: '4',
        name: 'Dremmor',
        type: SheetType.FATE,
        groupId: '2'
      },
      {
        id: '5',
        name: 'Arthur',
        type: SheetType.FATE,
        groupId: '2'
      }
    ]
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'sheet' })
export class SheetStore extends Store<SheetState> {

  constructor() {
    super(createInitialState());
  }

}
