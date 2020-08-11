import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ColorPaletteComponent } from './components/color-palette/color-palette.component';
import {LockGuard} from "./guard/lock.guard"

import { ServiceLock } from './services/service.lock';
import { SettingHeaderComponent } from './components/setting-header/setting-header.component';
 
@NgModule({
  declarations: [AppComponent, ColorPaletteComponent, SettingHeaderComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    LockGuard,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },ServiceLock 
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
