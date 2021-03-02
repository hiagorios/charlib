import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { ImageStore } from './image.store';

@Injectable({ providedIn: 'root' })
export class ImageService {

  constructor(private imageStore: ImageStore, private http: HttpClient) {
  }


}
