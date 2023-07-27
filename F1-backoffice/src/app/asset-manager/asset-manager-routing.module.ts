import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAssetsComponent } from './add-assets/add-assets.component';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  {path: 'add-assets',
component: AddAssetsComponent,
children: [{path:'add-assets', component: AddAssetsComponent}]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssetManagerRoutingModule { }
