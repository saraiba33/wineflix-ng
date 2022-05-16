import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LogoComponent } from './logo/logo.component';
import { NavComponent } from './nav/nav.component';
import { AvatarComponent } from './avatar/avatar.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PlayButtonComponent } from './play-button/play-button.component';
import { MoreInfoButtonComponent } from './more-info-button/more-info-button.component';
import { HeroContentComponent } from './hero-content/hero-content.component';
import { DivContentComponent } from './div-content/div-content.component';
import { NewBadgeComponent } from './new-badge/new-badge.component';
import { ShowImageComponent } from './show-image/show-image.component';

@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    NavComponent,
    AvatarComponent,
    NavBarComponent,
    PlayButtonComponent,
    MoreInfoButtonComponent,
    HeroContentComponent,
    DivContentComponent,
    NewBadgeComponent,
    ShowImageComponent,
  ],
  imports: [BrowserModule, FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
