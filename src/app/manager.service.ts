import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AlbumList, Albums, PhotoList } from './models/albums';

@Injectable({
  providedIn: 'root',
})
export class ManagerService {
  constructor(private http: HttpClient) {}

  search(): Observable<AlbumList> {
    return this.http.get<AlbumList>(
      'https://jsonplaceholder.typicode.com/albums'
    );
  }

  getById(id: string): Observable<PhotoList> {
    return this.http.get<PhotoList>(
      'https://jsonplaceholder.typicode.com/photos?albumId=' + id
    );
  }
}
