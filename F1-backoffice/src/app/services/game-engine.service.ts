import { ElementRef, Injectable } from '@angular/core';
import { Engine, FilesInput, FreeCamera, GizmoManager, HemisphericLight, MeshBuilder, Scene, SceneLoader, Tools, Vector3 } from 'babylonjs';
import { OBJFileLoader } from 'babylonjs-loaders';
import * as CANNON from 'cannon-es';
import { tonemapPixelShader } from 'babylonjs/Shaders/tonemap.fragment';
//import "babylonjs/loaders/glTF";
//import "babylonjs/loaders/glTF";

SceneLoader.RegisterPlugin(new OBJFileLoader());

@Injectable({
  providedIn: 'root'
})
export class GameEngineService {

  engine ?: Engine;
  scene ?: Scene;
  gizmoManager ?: GizmoManager;

  constructor() { }
  CreateCanvas(canvas : ElementRef<HTMLCanvasElement>) {

    this.engine = new Engine(canvas.nativeElement, true);
    this.scene =  new Scene(this.engine);
    this.gizmoManager = new GizmoManager(this.scene);

    this.gizmoManager.positionGizmoEnabled = true;
    

    const camera = new FreeCamera("camera1", new Vector3(0, 5, -10), this.scene);

    camera.setTarget(Vector3.Zero());

    camera.attachControl(canvas.nativeElement, true);

    const light = new HemisphericLight("light", new Vector3(0, 1, 0), this.scene);

    light.intensity = 0.7;
    }

    LoadModel(file : File) {
      console.log(file.name);      
      SceneLoader.ImportMesh("", "", file, this.scene, (meshes) => {
        this.gizmoManager?.attachToMesh(meshes[0]);
      });
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
