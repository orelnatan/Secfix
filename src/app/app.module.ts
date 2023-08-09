import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { LayoutModule } from '@secfix/shared/layout';

import { AppRoutingModule } from './app-routing.module';
import { AppRootComponent } from './app-root.component';
import { GlobalEventsModule } from './shared/global-events';
import { AppStoreModule } from './store';

@NgModule({
  declarations: [
    AppRootComponent
  ],
  imports: [
    BrowserAnimationsModule,
    HttpClientModule,
    AppStoreModule,
    AppRoutingModule,
    LayoutModule,
    GlobalEventsModule
  ],
  bootstrap: [AppRootComponent]
})
export class AppModule {}
