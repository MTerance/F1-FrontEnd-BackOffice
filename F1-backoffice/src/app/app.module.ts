import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './header/header.component';
import { PoolBuilderComponent } from './activity/minigames/pool/pool-builder/pool-builder.component';
import { DartBuilderComponent } from './activity/minigames/dart/dart-builder/dart-builder.component';
import { UnoBuilderComponent } from './activity/minigames/uno/uno-builder/uno-builder.component';
import { PanelComponentComponent } from './components/panel-component/panel-component.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HeaderComponent,
    PoolBuilderComponent,
    DartBuilderComponent,
    UnoBuilderComponent,
    PanelComponentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
