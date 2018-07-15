import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { LandingPage } from '../landing/landing';
import { HomePage } from '../home/home';

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  isenabled:boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  goBack():void {
    this.navCtrl.setRoot(LandingPage);
    console.log('Cancel Signup page.');
  }

  updateToDo($event){
    if($event.checked == true){
      this.isenabled = true;
    }else {
    this.isenabled = false;
    }
    alert($event.checked)
  }

  createAccount(): void {
    this.navCtrl.setRoot(HomePage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

}
