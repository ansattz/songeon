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
      this.backgroundByPlaylist = "../../../assets/background/chilling-alone.mp4"
   }

   ngAfterContentInit(): void {
      this.bg.shareUrl$.subscribe((path) => this.backgroundByPlaylist = path)
   }
}
