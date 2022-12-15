import { Component, TemplateRef, ViewEncapsulation } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { BackgroundService } from 'src/app/services/background/background.service';
import { PlaylistService } from 'src/app/services/playlist/playlist.service';
import { PositionService } from 'src/app/services/position/position.service';
import {ThemesService} from 'src/app/services/themes/themes.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass'],
  encapsulation: ViewEncapsulation.None

})
export class MenuComponent {
   modalRef?: BsModalRef
   showFiller:boolean = false
   searchInput:string = ""

   constructor(private pos: PositionService,
              private play: PlaylistService,
              private bg: BackgroundService,
              private modalService: BsModalService){}

   // Get position and set playist by local weather
   positionBtn(){
      this.pos.userPosition()
   }

   // Get favorite playlist
   favoriteBtn(){
      this.play.setFavoritePlaylist()
   }

   // Choose background
   chooseBackgroundBtn(path:string){
      this.bg.setUrlForBackground(path)
   }

   // Search playlists
   openSearch(template: TemplateRef<any>){
      this.modalRef = this.modalService.show(template)
   }

   searchPlaylistBtn(){
      if(this.searchInput.length >= 48){
         this.play.setSearchPlaylist(
            String(new URL(this.searchInput).pathname.split('/').pop()))         
         this.searchInput = ""
         this.modalRef?.hide()
      }else {
         alert("Invalid URL")
         this.searchInput = ""
      }
   }
}
