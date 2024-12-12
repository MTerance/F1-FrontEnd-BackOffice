import { ElementRef, Injectable } from '@angular/core';
import { Mesh } from "@babylonjs/core/Meshes/mesh";
import { Engine, FilesInput,PhysicsImpostor,CannonJSPlugin, FreeCamera, GizmoManager, HemisphericLight, MeshBuilder, Scene, SceneLoader, StandardMaterial, Texture, Tools, Vector3, Vector4, AbstractMesh, PhysicsViewer } from '@babylonjs/core';
import "@babylonjs/loaders/glTF";
import { OBJFileLoader } from '@Babylonjs/loaders/OBJ';
import * as CANNON from 'cannon-es';
import { AdvancedDynamicTexture, TextBlock } from '@babylonjs/gui';
import { ActionManager } from '@babylonjs/core/Actions/actionManager';

//import { DebugLayer } from  '@babylonjs/core/Debug/debugLayer';
//import { Inspector }from '@babylonjs/inspector';

//import "babylonjs/loaders/glTF";
//import "babylonjs/loaders/glTF";

export enum GizmoType {
  Sphere,
  Cylinder,
  Cube,
  Mesh
}

SceneLoader.RegisterPlugin(new OBJFileLoader());

@Injectable({
  providedIn: 'root'
})

export class GameEngineService {

  engine ?: Engine;
  scene ?: Scene;
  gizmoManager ?: GizmoManager;
  physicsViewer ?: PhysicsViewer;
  ui?: AdvancedDynamicTexture;

  constructor() { }
  CreateCanvas(canvas : ElementRef<HTMLCanvasElement>) {

    this.engine = new Engine(canvas.nativeElement, true);
    this.scene =  new Scene(this.engine);
    this.gizmoManager = new GizmoManager(this.scene);

    this.gizmoManager.positionGizmoEnabled = true;
    this.gizmoManager.scaleGizmoEnabled = false;
    this.gizmoManager.boundingBoxGizmoEnabled = false;
    //this.gizmoManager.usePointerToAttachGizmos = false;

    this.InitCamera(canvas);
    this.InitPhysicsEngine();
    this.CreateTestUI();
    this.CreateAmbienLight();
    }


     private InitCamera(canvas : ElementRef<HTMLCanvasElement>)
    {
      const camera = new FreeCamera("camera1", new Vector3(0, 5, -10), this.scene);

      camera.setTarget(Vector3.Zero());
  
      camera.attachControl(canvas.nativeElement, true);
  
    }



    private InitPhysicsEngine()
    {
      if (this.scene != undefined)
        {
          window.CANNON = CANNON;
          const gravity = -9.81; // m/s^2
          const gravityVector = new Vector3(0, gravity, 0);
          const physicsPlugin = new CannonJSPlugin();
          this.scene.enablePhysics(gravityVector, physicsPlugin);
          this.physicsViewer = new PhysicsViewer(this.scene);
        }
    }


    private  CreateAmbienLight()
    {
      if (this.scene != undefined)
        {
          const light = new HemisphericLight("light", new Vector3(0, 1, 0), this.scene);
          light.intensity = 0.7;
        }
    }

    private  CreateTestUI()
    {
      this.ui = AdvancedDynamicTexture.CreateFullscreenUI("UI", true, this.scene);

      var test = new TextBlock();
      test.text = "Hello World";
      test.color = "white";
      test.fontSize = 24;
      this.ui.addControl(test);
    }

    GetFullScreenUI() : AdvancedDynamicTexture {
      return this.ui!;
    }

    Init() {

    }


    LoadMesh(nameAsset: string, filePath:string, fileName: string, position: Vector3 = new Vector3(0, 0, 0)) {
      SceneLoader.ImportMesh(nameAsset, filePath, fileName, this.scene, (meshes) => {
        meshes.forEach((mesh) => { 
          console.log(mesh.name); 
          mesh.position = position;
        });
      });
    }





    CreateExampleScene() {

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
        poolTable.physicsImpostor = new PhysicsImpostor(poolTable, PhysicsImpostor.MeshImpostor, { mass: 0, restitution: 0.5 }, this.scene);
        that.physicsViewer!.showImpostor(poolTable.physicsImpostor!);
      });
      const ground = MeshBuilder.CreateGround("ground", { width: 10, height: 10 }, this.scene);
      ground.physicsImpostor = new PhysicsImpostor(ground, PhysicsImpostor.PlaneImpostor, { mass: 0, friction: 1 }, this.scene);
      ground.checkCollisions = true;
   //   if (this.physicsViewer)
        this.physicsViewer?.showImpostor(ground.physicsImpostor!);
    // import the ball
    const faceUvMaterial = [];

    faceUvMaterial[0] = new Vector4(0, 0, 0.33, 0.16);

    const sphere = MeshBuilder.CreateSphere("sphere", {diameter: 0.33,frontUVs : faceUvMaterial[0] }, this.scene);


    const textureBallPool = new Texture("./assets/pool/1Ball.png", this.scene) ;
    textureBallPool.coordinatesMode = Texture.SPHERICAL_MODE;
    const materialBallPool = new StandardMaterial("textureBallPool", this.scene);
    materialBallPool.diffuseTexture = textureBallPool;
    sphere.material = materialBallPool;
    sphere.physicsImpostor = new PhysicsImpostor(sphere, PhysicsImpostor.SphereImpostor, { mass: 1, friction: 0.9 }, this.scene);
   // this.physicsViewer?.showImpostor(sphere.physicsImpostor!);
    sphere.position = new Vector3(0, 10, 0);
    sphere.checkCollisions = true;

    //this.gizmoManager?.onAttachedToMeshObservable.
    //this.gizmoManager?.attachToMesh(sphere);
    console.log( sphere.uniqueId);
    console.log( sphere.id);    

    }
    testDisplayGizmoSphere() {

     var sphere = this.scene?.getMeshById("sphere");
      if (sphere)
        this.gizmoManager?.attachToMesh(sphere);
    }

    SetGizmoSphereOnMeshById(idMesh : string)
    {
      var mesh = this.scene?.getMeshById(idMesh)
      if (mesh)
        this.gizmoManager?.attachToMesh(mesh);
    }

    CreatePlane(nameplane : string = "plane")
    {
      var plane = MeshBuilder.CreatePlane(nameplane, {width: 5, height: 5}, this.scene);
    }

    LoadModel(file : File) {
      console.log(file.name);      
      SceneLoader.ImportMesh("", "", file, this.scene, (meshes) => {
        this.gizmoManager?.attachToMesh(meshes[0]);
      });
  }


  // create model with gizmo attached to it
    createGizmoModel(idModel : string, gizmoType : GizmoType) : Mesh
    {
      let mesh !: Mesh;
      switch (gizmoType) {
        case GizmoType.Sphere:
          mesh = MeshBuilder.CreateSphere(idModel, {diameter: 0.33, }, this.scene);
          mesh.physicsImpostor = new PhysicsImpostor(mesh, PhysicsImpostor.SphereImpostor, { mass: 0, friction: 1 }, this.scene);
          break;
        case GizmoType.Cylinder:
          mesh = MeshBuilder.CreateCylinder(idModel, {diameter: 0.33, height: 0.33 }, this.scene);
          mesh.physicsImpostor = new PhysicsImpostor(mesh, PhysicsImpostor.CylinderImpostor, { mass: 0, friction: 1 }, this.scene);
          break;
        case GizmoType.Mesh:
          SceneLoader.ImportMesh(idModel,"directory", "filename", this.scene, (meshes) => {
            mesh = meshes[1] as Mesh;
            mesh.physicsImpostor = new PhysicsImpostor(mesh,PhysicsImpostor.MeshImpostor,{ mass: 0, friction: 0.9 }, this.scene);
           });
          break;
        case GizmoType.Cube:
        default:
          mesh = MeshBuilder.CreateBox(idModel, {width: 0.33, height: 0.33, depth: 0.33 }, this.scene);
          mesh.physicsImpostor = new PhysicsImpostor(mesh, PhysicsImpostor.BoxImpostor, { mass: 0, friction: 0.9 }, this.scene);
          break;
      }
      mesh.checkCollisions = true;
      mesh.position = new Vector3(0,6,0);
      return mesh;
    }

    deleteMeshById(idMesh : string) : boolean
    {
      let mesh = this.scene?.getMeshById(idMesh);
      if (mesh)
      {
        mesh.dispose();
        return true;
      }
    return false;

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
