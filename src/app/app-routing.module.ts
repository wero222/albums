import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumsDetailComponent } from './albums-detail/albums-detail.component';
import { AlbumsListComponent } from './albums-list/albums-list.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'albums/:id', component: AlbumsDetailComponent },
  { path: 'albums', component: AlbumsListComponent },
  { path: 'home', component: HomeComponent },
  { path: '', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
