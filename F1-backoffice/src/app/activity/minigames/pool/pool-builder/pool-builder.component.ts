import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { GameEngineService } from 'src/app/services/game-engine.service';
import { PoolLoader } from '../poolLoader';

@Component({
  selector: 'app-pool-builder',
  templateUrl: './pool-builder.component.html',
  styleUrls: ['./pool-builder.component.scss']
})


export class PoolBuilderComponent implements OnInit {

  @ViewChild('canvas3D', {static : true})

  canvasRef ?:  ElementRef<HTMLCanvasElement>;
  poolLoader : PoolLoader;

  constructor(private readonly gameEngineService : GameEngineService) {

    this.poolLoader = new PoolLoader();
   }

  ngOnInit(): void {
    this.gameEngineService.CreateCanvas(this.canvasRef!);
    this.gameEngineService.CreateExampleScene();
  }

  ngAfterViewInit() {
    this.gameEngineService.StartRenderLoop();
  }

  testDisplaySphere() {
   // this.gameEngineService.testDisplayGizmoSphere();
    this.gameEngineService.SetGizmoSphereOnMeshById("sphere");
  }

  addNewPocketTablePosition() {
   var nameMesh = this.poolLoader.AddNewPocketTable();
   var mesh = this.gameEngineService.createGizmoModel(nameMesh);
   this.poolLoader.pockets[nameMesh] = mesh;
   this.gameEngineService.SetGizmoSphereOnMeshById(nameMesh);
   console.log(mesh);
  }

  addNewBallPosition() {
    var nameMesh = this.poolLoader.AddNewBallPosition();
    var mesh = this.gameEngineService.createGizmoModel(nameMesh);
    this.poolLoader.balls[nameMesh] = mesh;
    this.gameEngineService.SetGizmoSphereOnMeshById(nameMesh);
  }
}
