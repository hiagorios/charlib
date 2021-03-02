import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { SheetStore, SheetState } from './sheet.store';

@Injectable({ providedIn: 'root' })
export class SheetQuery extends Query<SheetState> {

  constructor(protected store: SheetStore) {
    super(store);
  }

}
