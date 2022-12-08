import { Component, OnInit } from '@angular/core';
import {ThemesService} from './services/themes/themes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit{
   constructor(public getTheme: ThemesService){}
   ngOnInit(): void {
      this.getTheme.getThemes()
   }
}
