import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { AppRoutingModule } from './app-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { MenuComponent } from './components/menu/menu.component';
import { AppComponent } from './app.component';
import { BackgroundComponent } from './components/background/background.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    BackgroundComponent,
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
    DragDropModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
