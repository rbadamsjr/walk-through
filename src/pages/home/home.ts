import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { PlanbuilderPage } from '../planbuilder/planbuilder';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {

  }

  newPlan() { 
    let alert = this.alertCtrl.create({
      title: 'New Plans',
      message: '',
      buttons: [
        {
          text: 'Search',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Use Wizard',
          handler: () => {
            console.log('Buy clicked');
          }
        }
      ]
    });
    alert.present();
  }
  
}
