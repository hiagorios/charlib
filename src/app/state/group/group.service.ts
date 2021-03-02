import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { GroupStore } from './group.store';

@Injectable({ providedIn: 'root' })
export class GroupService {

  constructor(private groupStore: GroupStore, private http: HttpClient) {
  }


}
