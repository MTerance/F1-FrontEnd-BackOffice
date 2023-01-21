import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { GameEngineService } from 'src/app/services/game-engine.service';

@Component({
  selector: 'app-pool-builder',
  templateUrl: './pool-builder.component.html',
  styleUrls: ['./pool-builder.component.scss']
})


export class PoolBuilderComponent implements OnInit {

  @ViewChild('canvas3D', {static : true})

  canvasRef ?:  ElementRef<HTMLCanvasElement>;

  constructor(private readonly gameEngineService : GameEngineService) { }

  ngOnInit(): void {
    this.gameEngineService.CreateCanvas(this.canvasRef!);
    this.gameEngineService.CreateExampleScene();
  }

  ngAfterViewInit() {
    this.gameEngineService.StartRenderLoop();
  }

  testDisplaySphere() {
    this.gameEngineService.testDisplayGizmoSphere();
  }

}
