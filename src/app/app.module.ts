import { PersonComponent } from './../components/person/person.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ComponentsModule } from './../components/components.module';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from './../pages/home/home';
import { ListPage } from './../pages/list/list';
import { EqualityPage } from './../pages/equality/equality';
import { PlayerPage } from './../pages/player/player';
import { TeamPage } from './../pages/team/team';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    EqualityPage,
    PlayerPage,
    TeamPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, ComponentsModule.name),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    EqualityPage,
    PlayerPage,
    TeamPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
