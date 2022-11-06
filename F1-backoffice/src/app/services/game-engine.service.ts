import { ElementRef, Injectable } from '@angular/core';
import { Engine, FreeCamera, HemisphericLight, MeshBuilder, Scene, Vector3 } from 'babylonjs';

@Injectable({
  providedIn: 'root'
})
export class GameEngineService {

  engine ?: Engine;
  scene ?: Scene;

  constructor() { }
  CreateCanvas(canvas : ElementRef<HTMLCanvasElement>) {

    this.engine = new Engine(canvas.nativeElement, true);
    this.scene =  new Scene(this.engine);
    const camera = new FreeCamera("camera1", new Vector3(0, 5, -10), this.scene);

    camera.setTarget(Vector3.Zero());

    camera.attachControl(canvas.nativeElement, true);

    const light = new HemisphericLight("light", new Vector3(0, 1, 0), this.scene);

    light.intensity = 0.7;

    const sphere = MeshBuilder.CreateSphere("sphere", {diameter: 2, segments: 32}, this.scene);

    sphere.position.y = 1;
    const ground = MeshBuilder.CreateGround("ground", {width: 6, height: 6}, this.scene);

    }

    StartRenderLoop() {
      this.engine?.runRenderLoop(() => {
        this.scene?.render();
      });

      window.addEventListener('resize', () => {
        this.engine?.resize();
      });
    }
  }
