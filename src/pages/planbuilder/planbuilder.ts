import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Alert } from 'ionic-angular';

/**
 * Generated class for the PlanbuilderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@IonicPage()
@Component({
  selector: 'page-planbuilder',
  templateUrl: 'planbuilder.html'
})
export class PlanbuilderPage {
  skipMsg: string = "Skip";
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PlanbuilderPage');
  }

  skip() {
    alert('Skip!');
  }
}
