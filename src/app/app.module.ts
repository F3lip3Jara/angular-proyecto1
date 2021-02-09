import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardPersonaComponent } from './card-persona/card-persona.component';
import { MenuLateralComponent } from './menu-lateral/menu-lateral.component';
import { InsPersonaComponent } from './ins-persona/ins-persona.component';

@NgModule({
  declarations: [
    AppComponent,
    CardPersonaComponent,
    MenuLateralComponent,
    InsPersonaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
