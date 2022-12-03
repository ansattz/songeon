import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.sass']
})
export class BackgroundComponent implements OnInit {

   urlVideo:string = ""  
   ngOnInit(){
      this.urlVideo = "https://mylivewallpapers.com/wp-content/uploads/Nature/PREVIEW-Pond-Silent-Summer.mp4"
   }

}
