import { AfterContentInit, Component, ViewEncapsulation } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { PlaylistService } from 'src/app/services/playlist/playlist.service';


@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.sass'],
  encapsulation: ViewEncapsulation.None
})
export class PlayerComponent implements AfterContentInit {
   
   constructor(public sanitizer: DomSanitizer,
              public play: PlaylistService){}

   // call setWeatherPlayer when playlistUrl is populated
   ngAfterContentInit(): void {
      this.play.shareUrl$.subscribe((playlistUrl) => this.setPlayer(playlistUrl))
   }

   player:any
   setPlayer(playlistUrl:string){
      var playerDiv = document.querySelector('.playlist.box') as HTMLElement
      if(PlaylistService.itsFavPlaylist){
         playerDiv.style.backgroundImage = 'radial-gradient(#cdcb35, rgba(39, 36, 36, 0.5607843137))'
         playerDiv.style.display = 'flex'
      }else{
         playerDiv.style.backgroundImage = 'radial-gradient(#7d35a2, rgba(39, 36, 36, 0.5607843137))'
         playerDiv.style.display = 'flex'
      }
      var iframe = 
      `
         <iframe class="player"
            src="${playlistUrl}"
            width="300" 
            height="380" 
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
            loading="lazy">
         </iframe>
      `
      this.player= this.sanitizer.bypassSecurityTrustHtml(iframe)
   }
}
