import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './partials/header/header.component';
import { PlaylistComponent } from './pages/playlist/playlist.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, PlaylistComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Youtube Playlist';
}
