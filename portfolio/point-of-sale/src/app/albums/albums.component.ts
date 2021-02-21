import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlbumsApiService } from '../shared/services/albums-api.service';

@Component({
  selector: 'albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css'],
})
export class AlbumsComponent implements OnInit {
  constructor(
    private albumsService: AlbumsApiService,
    private router: Router
  ) {}

  getAlbums() {
    this.albumsService.getAllAlbums().subscribe((data: any) => {
      console.log(data);
    });
  }

  ngOnInit(): void {
    this.getAlbums();
  }
}
