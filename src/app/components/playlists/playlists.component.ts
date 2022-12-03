import { Component } from '@angular/core';

@Component({
  selector: 'app-playlists',
  templateUrl: './playlists.component.html',
  styleUrls: ['./playlists.component.sass']
})
export class PlaylistsComponent {

   playlistId:string = "6CHeafntix4NbfoETn5gE7"
   playlistUrl:string = "https://open.spotify.com/embed/playlist/" + this.playlistId + "?utm_source=generator&theme=0"


}
