import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http'; 
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UpdateAdminComponent } from './update-admin/update-admin.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { UpdateMovieComponent } from './update-movie/update-movie.component';
import { NavComponent } from './nav/nav.component';
import { LogoutComponent } from './logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UpdateAdminComponent,
    UserDetailComponent,
    MovieDetailComponent,
    UpdateMovieComponent,
    NavComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
