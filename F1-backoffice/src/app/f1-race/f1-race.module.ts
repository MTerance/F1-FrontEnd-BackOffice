import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrackComponent } from './track/track.component';
import { CarComponent } from './car/car.component';
import { F1RaceRoutingModule } from './f1-race-routing';



@NgModule({
  declarations: [
    TrackComponent,
    CarComponent
  ],
  imports: [
    CommonModule,
    F1RaceRoutingModule,
  ]
})
export class F1RaceModule { }
