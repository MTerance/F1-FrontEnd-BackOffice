import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssetManagerRoutingModule } from './asset-manager-routing.module';
import { AddAssetsComponent } from './add-assets/add-assets.component';
import { SharedModule } from '../shared/shared.module';
import { DndDirective } from '../directives/dnd.directive';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AddAssetsComponent
  ],
  imports: [
    CommonModule,
    AssetManagerRoutingModule,
    SharedModule,
    FormsModule
  ],
  exports:[AddAssetsComponent]
})

export class AssetManagerModule { }
