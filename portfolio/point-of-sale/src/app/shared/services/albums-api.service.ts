import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Album } from '../models/album.interface';

@Injectable({
  providedIn: 'root',
})
export class AlbumsApiService {
  constructor(private http: HttpClient) {}

  albums: Album[] = [];
  apiUrl: string = 'http://localhost:3000/albums';

  getAllAlbums(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
