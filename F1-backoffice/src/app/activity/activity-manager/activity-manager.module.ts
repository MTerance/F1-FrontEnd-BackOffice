import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ActivityManagerRoutingModule } from './activity-manager-routing.module';
import { PoolBuilderComponent } from '../minigames/pool/pool-builder/pool-builder.component';
import { DartBuilderComponent } from '../minigames/dart/dart-builder/dart-builder.component';
import { UnoBuilderComponent } from '../minigames/uno/uno-builder/uno-builder.component';

const routes: Routes = [
  {path: 'pool-activity',
component: PoolBuilderComponent,
children:[{path: 'pool-activity',component:PoolBuilderComponent}]
},
{path: 'dart-activity',
component: DartBuilderComponent,
children:[{path: 'dart-activity',component:DartBuilderComponent}]
},
{path: 'uno-activity',
component: UnoBuilderComponent,
children:[{path: 'uno-activity',component:UnoBuilderComponent}]
}
];

@NgModule({
  declarations: [],
  imports: [
    [RouterModule.forChild(routes)],
  ],
  exports: [RouterModule]
})
export class ActivityManagerModule {}
