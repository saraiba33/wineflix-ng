import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderComponent } from './header/header.component';
import { HeroContentComponent } from './hero-content/hero-content.component';
import { ControlButtonsComponent } from './control-buttons/control-buttons.component';
import { HeroComponent } from './hero/hero.component';
import { WineClassComponent } from './wine-class/wine-class.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, HeroContentComponent, ControlButtonsComponent, HeroComponent, WineClassComponent],
  imports: [BrowserModule, FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
