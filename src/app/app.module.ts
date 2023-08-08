import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LayoutModule } from '@secfix/shared/layout';

import { AppRoutingModule } from './app-routing.module';
import { AppRootComponent } from './app-root.component';

@NgModule({
  declarations: [
    AppRootComponent
  ],
  imports: [
    BrowserAnimationsModule,
    AppRoutingModule,
    LayoutModule,
  ],
  bootstrap: [AppRootComponent]
})
export class AppModule {}
