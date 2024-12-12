import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { SearchComponent } from './pages/search/search.component';
import { ProfilComponent } from './pages/profil/profil.component';
import { PlaylistComponent } from './pages/playlist/playlist.component';

export const routes: Routes = [
    {path: '', component: HomeComponent, title: 'Home'},
    {path: 'login', component: LoginComponent, title: 'Login'},
    {path: 'register', component: RegisterComponent, title: 'Register'},
    {path: 'search', component: SearchComponent, title: 'Search'},
    {path: 'profil', component: ProfilComponent, title: 'Search'},
    {path: 'playlist', component: PlaylistComponent, title: 'Playlist'},
    {path: '**', component: NotFoundComponent, title: 'Page Not Found'},
];
