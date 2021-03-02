import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';
import { Image } from '../../model/image';

export interface ImageState {
  images: Image[];
}

export function createInitialState(): ImageState {
  return {
    images: [
      {
        id: '1',
        name: 'Pikachu capiroto',
        bytes: null,
        groupId: '3'
      }, {
        id: '2',
        name: 'NPC 1',
        bytes: null,
        groupId: '3'
      },
      {
        id: '3',
        name: 'Biel desenho',
        bytes: null,
        groupId: '4'
      }, {
        id: '4',
        name: 'Paladino cyberpunk',
        bytes: null,
        groupId: '4'
      }
    ]
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'image' })
export class ImageStore extends Store<ImageState> {

  constructor() {
    super(createInitialState());
  }

}
