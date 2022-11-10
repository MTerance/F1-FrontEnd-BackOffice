import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'f1-race', loadChildren:() => 
import('./f1-race/f1-race.module')
.then((m) => m.F1RaceModule), pathMatch:'prefix'},
{path: 'asset-manager',loadChildren:() =>
import('./asset-manager/asset-manager.module')
.then((m) => m.AssetManagerModule),pathMatch:'prefix'},
{path:'', redirectTo:'f1-race', pathMatch:'full'},
{path:'**', redirectTo:'f1-race'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
