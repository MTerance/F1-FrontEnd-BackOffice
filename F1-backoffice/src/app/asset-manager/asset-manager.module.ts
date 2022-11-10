import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssetManagerRoutingModule } from './asset-manager-routing.module';
import { AddAssetsComponent } from './add-assets/add-assets.component';


@NgModule({
  declarations: [
    AddAssetsComponent
  ],
  imports: [
    CommonModule,
    AssetManagerRoutingModule
  ]
})
export class AssetManagerModule { }
