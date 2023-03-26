import { Component, OnInit } from '@angular/core';
import { ManagerService } from '../manager.service';
import { AlbumList, Albums } from '../models/albums';

@Component({
  selector: 'app-albums-list',
  templateUrl: './albums-list.component.html',
  styleUrls: ['./albums-list.component.css'],
})
export class AlbumsListComponent implements OnInit {
  constructor(private managerService: ManagerService) {}

  albums?: AlbumList;

  ngOnInit(): void {
    this.getAlbums();
  }

  getAlbums() {
    this.managerService.search().subscribe((res) => {
      this.albums = res;
    });
  }
}
