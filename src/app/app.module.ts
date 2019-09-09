import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AdContainerComponent } from './ad-container/ad-container.component';
import { AdContentComponent } from './ad-content/ad-content.component';
import { AdIntroComponent } from './ad-intro/ad-intro.component';

@NgModule({
  declarations: [
    AppComponent,
    AdContainerComponent,
    AdContentComponent,
    AdIntroComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [AdContentComponent, AdIntroComponent]
})
export class AppModule { }
