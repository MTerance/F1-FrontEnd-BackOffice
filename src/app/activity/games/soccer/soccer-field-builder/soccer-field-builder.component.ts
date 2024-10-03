import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GameEngineService, GizmoType } from 'src/app/services/game-engine.service';


@Component({
  selector: 'app-soccer-field-builder',
  templateUrl: './soccer-field-builder.component.html',
  styleUrls: ['./soccer-field-builder.component.scss']
})

export class SoccerFieldBuilderComponent implements OnInit {

  @ViewChild('canvas3D', {static : true})
  canvasRef ?:  ElementRef<HTMLCanvasElement>;

  constructor(private readonly gameEngineService : GameEngineService) {
    
  }

  ngOnInit(): void {
    this.gameEngineService.CreateCanvas(this.canvasRef!);
    // this.gameEngineService.CreateExampleScene();
  }

  ngAfterViewInit() {
    this.gameEngineService.StartRenderLoop();
  }


  updateGamePosition() : void  {
    // CornerKick position * 4
    // FreeKick position * 4
    // PenaltyKick position * 2
    // KickOff position * 1
  }

  updateGameLimitZone() : void {
    // throw in wall *2
    //Corner wall * 6
    //Goal * 2
    //GoalKeeperZone * 2
  }

  addNewLimitZone() : void {
    var mesh = this.gameEngineService.createGizmoModel("limitZone", GizmoType.Cube ,"SoccerField");
    this.gameEngineService.SetGizmoSphereOnMeshById("limitZone");
  }

  addNewGamePosition() : void {
    var mesh = this.gameEngineService.createGizmoModel("gamePosition", GizmoType.Sphere ,"SoccerField");
    this.gameEngineService.SetGizmoSphereOnMeshById("gamePosition");
  }

  displayZoneFields() : void {
    //display all the zones
  }
}
