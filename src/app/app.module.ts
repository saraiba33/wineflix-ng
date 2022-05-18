import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderComponent } from './header/header.component';
import { HeroContentComponent } from './hero-content/hero-content.component';
import { ControlButtonsComponent } from './control-buttons/control-buttons.component';
import { HeroComponent } from './hero/hero.component';
import { WineClassComponent } from './wine-class/wine-class.component';
import { DrinkAgainComponent } from './drink-again/drink-again.component';
import { CategoriesComponent } from './categories/categories.component';
import { NavLinksComponent } from './nav-links/nav-links.component';
import { UserAvatarComponent } from './user-avatar/user-avatar.component';
import { PlayButtonComponent } from './play-button/play-button.component';
import { MoreInfoButtonComponent } from './more-info-button/more-info-button.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, HeroContentComponent, ControlButtonsComponent, HeroComponent, WineClassComponent, DrinkAgainComponent, CategoriesComponent, NavLinksComponent, UserAvatarComponent, PlayButtonComponent, MoreInfoButtonComponent],
  imports: [BrowserModule, FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
