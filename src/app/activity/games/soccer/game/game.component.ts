import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GameEngineService } from 'src/app/services/game-engine.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent  implements OnInit {

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
}
