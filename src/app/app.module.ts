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
import { ModalComponent } from './components/modal/modal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from './shared/shared.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { GameComponent } from './activity/games/soccer/game/game.component';
import { SoccerFieldBuilderComponent } from './activity/games/soccer/soccer-field-builder/soccer-field-builder.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HeaderComponent,
    PoolBuilderComponent,
    DartBuilderComponent,
    UnoBuilderComponent,
    PanelComponentComponent,
    ModalComponent,
    GameComponent,
    SoccerFieldBuilderComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
