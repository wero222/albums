import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ManagerService } from '../manager.service';
import { PhotoList, Photos } from '../models/albums';

@Component({
  selector: 'app-albums-detail',
  templateUrl: './albums-detail.component.html',
  styleUrls: ['./albums-detail.component.css'],
})
export class AlbumsDetailComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private managerService: ManagerService
  ) {}

  photos?: PhotoList;

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if (id != null) {
      this.managerService.getById(id).subscribe((res) => {
        this.photos = res;
      });
    }
  }
}
