import { Component, OnInit } from '@angular/core';
import { Album } from '../shared/models/album.interface';
import { AlbumsApiService } from '../shared/services/albums-api.service';

@Component({
  selector: 'albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css'],
})
export class AlbumsComponent implements OnInit {
  constructor(private albumsService: AlbumsApiService) {}

  get albums(): Album[] {
    return this.albumsService.albums;
  }

  getAlbums() {
    this.albumsService.getAllAlbums().subscribe((data: any) => {
      data.forEach((a: any) => {
        const album = {
          id: a.id,
          artistName: a.artistname,
          albumName: a.albumname,
          albumArtSource: a.albumartsource,
          price: a.price,
        };
        this.albumsService.albums.push(album);
      });
    });
  }

  ngOnInit(): void {
    this.getAlbums();
  }
}
