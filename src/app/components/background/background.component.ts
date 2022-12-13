import { AfterContentInit, OnInit, Component } from '@angular/core';
import { BackgroundService } from 'src/app/services/background/background.service';


@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.sass']
})
export class BackgroundComponent implements OnInit, AfterContentInit{
   constructor(private bg: BackgroundService){}

   backgroundByPlaylist!:string

   ngOnInit(): void {
      this.backgroundByPlaylist = "https://mylivewallpapers.com/wp-content/uploads/Lifestyle/PREVIEW-Day-Dream.mp4"
   }

   ngAfterContentInit(): void {
      this.bg.shareUrl$.subscribe((url) => this.backgroundByPlaylist = url)
   }
}
