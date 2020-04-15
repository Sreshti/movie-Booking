import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent} from './login/login.component';
import { UserDetailComponent} from './user-detail/user-detail.component';
import { MovieDetailComponent} from './movie-detail/movie-detail.component';
import { UpdateAdminComponent} from './update-admin/update-admin.component';
import { UpdateMovieComponent} from './update-movie/update-movie.component';
import { LogoutComponent} from './logout/logout.component';



const routes: Routes = [{ path: 'login', component: LoginComponent },
{ path: 'User', component: UserDetailComponent },
{ path: 'movie', component: MovieDetailComponent },
{ path: 'Adddetail', component: UpdateAdminComponent },
{ path: 'addMovie', component: UpdateMovieComponent },
{ path: 'logout', component: LogoutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
