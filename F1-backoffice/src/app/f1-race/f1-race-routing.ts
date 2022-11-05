import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CarComponent } from "./car/car.component";
import { TrackComponent } from "./track/track.component";


const routes: Routes = [

    {path:'track',
     component:TrackComponent,
    children:[{path: 'track',component:TrackComponent}] },
    {path:'car',
     component:CarComponent,
    children:[{path: 'car',component:CarComponent}] },    
   // {path:'', redirectTo:'track', pathMatch:'full'},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class F1RaceRoutingModule {}