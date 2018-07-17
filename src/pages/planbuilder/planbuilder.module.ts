import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PlanbuilderPage } from './planbuilder';

@NgModule({
  declarations: [
    PlanbuilderPage,
  ],
  imports: [
    IonicPageModule.forChild(PlanbuilderPage),
  ],
})
export class PlanbuilderPageModule {}
