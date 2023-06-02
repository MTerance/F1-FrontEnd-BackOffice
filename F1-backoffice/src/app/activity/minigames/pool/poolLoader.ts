import { Vector3 } from "@babylonjs/core";
import { Mesh } from "@babylonjs/core/Meshes/mesh";
import { filter } from "rxjs";
import { GameEngineService } from "src/app/services/game-engine.service";


export class stateMeshObject {

    xPosition : number;
    yPosition : number;
    zPosition : number;

    xScale : number;
    yScale : number;
    zScale : number;    

    constructor()
    {
        this.xPosition = 0;
        this.yPosition = 0;
        this.zPosition = 0;
        this.xScale = 0;
        this.yScale = 0;
        this.zScale = 0;        
    }

    setRelativePositionToTarget( x : number,y : number,z : number)
    {

    }

    setPositionFromScale(position : Vector3)
    {
        this.xPosition = position.x;
        this.yPosition = position.y;
        this.zPosition = position.z;
    }

    setScaleFromScale(scale : Vector3)
    {
        this.xScale = scale.x;
        this.yScale = scale.y;
        this.zScale = scale.z;
    }


}


export class poolSetConfiguration {

    /* pool Table properties */
    meshFileName : string;
    poolTableProperties : stateMeshObject ;
    /* list of table pockets positions */

    killBox : { [id : string] : stateMeshObject };
    ballsInitialsConfiguration : { [id : string] : stateMeshObject};
    whiteBallInitialPosition : stateMeshObject;
    /* */


    constructor() { 
        this.killBox = {};
        this.ballsInitialsConfiguration = {};
        this.whiteBallInitialPosition = new stateMeshObject();
        this.meshFileName = "";
        this.poolTableProperties = new stateMeshObject();
    }
}


export class PoolLoader {
   
    poolConfig : poolSetConfiguration;


    balls : {[idMesh : string] : Mesh};
    pockets : {[idMesh : string] : Mesh};

    constructor(private readonly gameEngineService : GameEngineService)
    {
        this.poolConfig = new poolSetConfiguration();
        this.balls = {};
        this.pockets = {}
    }

    SetupKillBox() : Mesh[] {

        var killBox : Mesh[];

        killBox = [];

        return killBox;
    }

    SetupInitPositionOfWhiteball() : void {

    }

    SetupInitPositionOfBalls() : void {

    }

    SetupPoolTable() : void {
        this.SetupKillBox();
        this.SetupInitPositionOfWhiteball();
        this.SetupInitPositionOfBalls();
    }

    SetupPoolGame() : void {     
        this.SetupPoolTable();
    }

    AddNewBallPosition() : string {

        var nameMesh = "ball_";
        var count = 1;
        var idMesh = "";
        do
        {
            var idMesh = nameMesh + count;
            count++;
        }
        while ((idMesh in this.poolConfig.ballsInitialsConfiguration));
        this.poolConfig.ballsInitialsConfiguration[idMesh] = new stateMeshObject();
        console.log(idMesh);
        return idMesh;
    }

    hasBalls() : boolean {
        let count = 0;
        for (var ball in this.balls)
        {
            if (this.balls.hasOwnProperty(ball))
            count++;
        }
        if (count > 0)
            return true;
        return false;
    }


    hasPockets() : boolean {
        let count = 0;
        for (var pocket in this.pockets)
        {
            if (this.pockets.hasOwnProperty(pocket))
            count++;
        }
        if (count > 0)
            return true;
        return false 
    }

    deletePocketTable(idMesh : string) : boolean {
        delete this.poolConfig.killBox[idMesh];
        delete this.pockets[idMesh];
        return true;
    }

    deleteBallPosition(idMesh : string) : boolean {
        delete this.poolConfig.ballsInitialsConfiguration[idMesh];
        delete this.balls[idMesh];
        return true;
    }

    AddNewPocketTable() : string
    {
        var nameMesh = "pocket_";
        var count = 1;
        var idMesh = "";

        do
        {
            var idMesh = nameMesh + count;
            count++;
        }
        while ((idMesh in this.poolConfig.killBox));
        this.poolConfig.killBox[idMesh] = new stateMeshObject();
        console.log( this.poolConfig.killBox);
        console.log(idMesh);
        return idMesh;
    }

    updatePoolConfiguration()
    {
        for (let pock in this.pockets) {
            this.pockets[pock].position =  
            this.transformToRelativePosition(this.gameEngineService.GetMeshById("PoolTable")?.position as Vector3,
            this.pockets[pock].position);
        }

        for (let ball in this.balls) {
            //ball.
            this.balls[ball].position =
            this.transformToRelativePosition(this.gameEngineService.GetMeshById("PoolTable")?.position as Vector3,
            this.balls[ball].position);
        }
    }

    transformToRelativePosition(positionTarget : Vector3 ,positionSource : Vector3) : Vector3
    {
        var relativePosition : Vector3 = new Vector3();
        
        relativePosition.x = positionTarget.x - positionSource.x;
        relativePosition.y = positionTarget.y - positionSource.y;
        relativePosition.z = positionTarget.z - positionSource.z;

        return relativePosition;
    }

    transformToAbsolutePosition(positionTarget : Vector3 ,positionSource : Vector3) : Vector3
    {
        var absolutePosition : Vector3 = new Vector3();
        
        absolutePosition.x = positionTarget.x + positionSource.x;
        absolutePosition.y = positionTarget.y + positionSource.y;
        absolutePosition.z = positionTarget.z + positionSource.z;

        return absolutePosition;
    }
    
}


type Rule<T> = (input: T) =>boolean;

const All = <T>(...rules: Rule<T>[]) => (input : T) => rules.every((rule) => rule(input));

const Some = <T>(...rules: Rule<T>[]) => (input : T) => rules.some((rule) => rule(input));

const One = <T>(...rules: Rule<T>[]) => (input : T) => rules.filter((r) => r(input)).length === 1;

const None =  <T>(...rules: Rule<T>[]) => (input : T) => rules.filter((r) => r(input)).length === 0;

const ruleRunner =  
    <T,R>(rules: [R,Rule<T>][])=>
        (input: T) => 
            rules.filter(([_,rule]) => rule(input)).map((output,_) => output);










            