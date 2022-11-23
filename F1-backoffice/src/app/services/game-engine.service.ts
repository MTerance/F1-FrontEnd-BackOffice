import { ElementRef, Injectable } from '@angular/core';
import { Engine, FilesInput,PhysicsImpostor,CannonJSPlugin, FreeCamera, GizmoManager, HemisphericLight, MeshBuilder, Scene, SceneLoader, StandardMaterial, Texture, Tools, Vector3, Vector4, AbstractMesh, PhysicsViewer } from 'babylonjs';
import { OBJFileLoader } from 'babylonjs-loaders';
import * as CANNON from 'cannon-es';
import { tonemapPixelShader } from 'babylonjs/Shaders/tonemap.fragment';
import { AssetManagerModule } from '../asset-manager/asset-manager.module';
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
  physicsViewer ?: PhysicsViewer;

  constructor() { }
  CreateCanvas(canvas : ElementRef<HTMLCanvasElement>) {

    this.engine = new Engine(canvas.nativeElement, true);
    this.scene =  new Scene(this.engine);
    this.gizmoManager = new GizmoManager(this.scene);

    this.gizmoManager.positionGizmoEnabled = true;
    
    const camera = new FreeCamera("camera1", new Vector3(0, 5, -10), this.scene);

    camera.setTarget(Vector3.Zero());

    camera.attachControl(canvas.nativeElement, true);


    window.CANNON = CANNON;
    const gravity = -9.81; // m/s^2
    const gravityVector = new Vector3(0, gravity, 0);
    const physicsPlugin = new CannonJSPlugin();
    this.scene.enablePhysics(gravityVector, physicsPlugin);


    const light = new HemisphericLight("light", new Vector3(0, 1, 0), this.scene);

     // import the pool table
     this.physicsViewer = new PhysicsViewer(this.scene);

     const that = this;
     
      SceneLoader.ImportMesh("PoolTable", "assets/pool/", "poolTable.glb", this.scene, (meshes) => {
        meshes.forEach((mesh) => { console.log(mesh.name); });
        this.gizmoManager?.attachToMesh(meshes[1]);
        console.log(meshes[1].name);
        const poolTable = meshes[1];
        poolTable!.setParent(null);
        poolTable!.scaling = new Vector3(0.05, 0.05, 0.05);
        poolTable!.rotation = new Vector3(0, 0, 0);
        poolTable!.position = new Vector3(0, 1, 0);
        poolTable.physicsImpostor = new PhysicsImpostor(poolTable, PhysicsImpostor.MeshImpostor, { mass: 0, restitution: 0.2 }, this.scene);
        that.physicsViewer!.showImpostor(poolTable.physicsImpostor!);
        /*
        meshes.forEach((mesh) => {
          mesh.physicsImpostor = new PhysicsImpostor(mesh, PhysicsImpostor.MeshImpostor, { mass: 0, restitution: 0.9 }, this.scene);

          mesh.receiveShadows = true;
          
        });
        */

    //        this.physicsViewer.showImpostor(meshes[0].physicsImpostor);
      });
/*
      importedMesh.then((result) => {

 //       console.log(result.meshes[0].name);
        result.meshes.every((mesh) => {
          console.log(mesh.name);
        });
      });
     */ 

      //     console.log(this.scene.getMeshById((x : AbstractMesh) => x.name == "PoolTable"));
/*
const poolTable = this.scene.getMeshByName("__root__");
      poolTable!.setParent(null);
      poolTable!.scaling = new Vector3(0.05, 0.05, 0.05);
      poolTable!.physicsImpostor = new PhysicsImpostor(poolTable!, PhysicsImpostor.BoxImpostor, { mass: 100, friction: 0.9 }, this.scene);
      poolTable!.checkCollisions = true;
     // poolTable!.receiveShadows = true;
      this.physicsViewer!.showImpostor(poolTable!.physicsImpostor!);
*/





      const ground = MeshBuilder.CreateGround("ground", { width: 10, height: 10 }, this.scene);
      ground.physicsImpostor = new PhysicsImpostor(ground, PhysicsImpostor.PlaneImpostor, { mass: 0, friction: 1 }, this.scene);
      ground.checkCollisions = true;
      this.physicsViewer.showImpostor(ground.physicsImpostor!);
    // import the ball
//      
     // 
    //  


    const faceUvMaterial = [];

    faceUvMaterial[0] = new Vector4(0, 0, 0.33, 0.16);

    const sphere = MeshBuilder.CreateSphere("sphere", {diameter: 0.4,frontUVs : faceUvMaterial[0] }, this.scene);


    const textureBallPool = new Texture("./assets/pool/1Ball.png", this.scene) ;
    textureBallPool.coordinatesMode = Texture.SPHERICAL_MODE;
    const materialBallPool = new StandardMaterial("textureBallPool", this.scene);
    materialBallPool.diffuseTexture = textureBallPool;
    sphere.material = materialBallPool;
    sphere.physicsImpostor = new PhysicsImpostor(sphere, PhysicsImpostor.SphereImpostor, { mass: 1, friction: 0.9 }, this.scene);
    //this.physicsViewer.showImpostor(sphere.physicsImpostor!);
    sphere.position = new Vector3(0, 10, 0);
    sphere.checkCollisions = true;
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
