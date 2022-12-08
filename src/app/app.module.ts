import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { AppRoutingModule } from './app-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';

import { BackgroundComponent } from './components/background/background.component';
import { MenuComponent } from './components/menu/menu.component';
import { AppComponent } from './app.component';
import { PlayerComponent } from './components/player/player.component';


@NgModule({
  declarations: [
    AppComponent,
    BackgroundComponent,
    MenuComponent,
    PlayerComponent,
  ],
  imports: [
    BrowserModule,
    MatSidenavModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatIconModule,
    HttpClientModule,
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
