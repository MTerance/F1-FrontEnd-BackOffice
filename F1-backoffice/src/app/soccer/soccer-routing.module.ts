import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SoccerFieldBuilderComponent } from '../activity/games/soccer/soccer-field-builder/soccer-field-builder.component';

const routes: Routes = [
  {
    path: 'soccer-field-builder',
    component: SoccerFieldBuilderComponent,
    children:[{path: 'soccer-field-builder',component:SoccerFieldBuilderComponent}]
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SoccerRoutingModule { }
