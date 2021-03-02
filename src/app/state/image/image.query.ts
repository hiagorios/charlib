import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { ImageStore, ImageState } from './image.store';

@Injectable({ providedIn: 'root' })
export class ImageQuery extends Query<ImageState> {

  constructor(protected store: ImageStore) {
    super(store);
  }

}
