import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';

import {firebase} from 'firebase/database';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = LoginPage;
    
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, db: AngularFireDatabase) {
    platform.ready().then(() => {

      statusBar.styleDefault();
      splashScreen.hide();

     
    });

  }
}
