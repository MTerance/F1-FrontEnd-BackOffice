import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GameEngineService } from 'src/app/services/game-engine.service';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.scss']
})
export class TrackComponent implements OnInit {


@ViewChild('canvas3D', {static : true})

 canvasRef ?:  ElementRef<HTMLCanvasElement>;

  constructor(private readonly gameEngineService : GameEngineService) { }

  ngOnInit(): void {
    this.gameEngineService.CreateCanvas(this.canvasRef!);
  }

  ngAfterViewInit() {
    this.gameEngineService.StartRenderLoop();
  }

  fileBrowseHandler(eventTarget : Event) {
    const file = (eventTarget.target as HTMLInputElement).files![0];
      console.log(file.name);
      this.gameEngineService.LoadModel(file);
    }  
}
