import { Mesh } from "@babylonjs/core/Meshes/mesh";


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
}


export class poolSetConfiguration {

    /* list of table pockets positions */

    killBox : { [id : string] : stateMeshObject };
    ballsInitialsConfiguration : { [id : string] : stateMeshObject};
    whiteBallInitialPosition : stateMeshObject;
    /* */


    constructor() { 
        this.killBox = {};
        this.ballsInitialsConfiguration = {};
        this.whiteBallInitialPosition = new stateMeshObject();
    }
}


export class PoolLoader {
   
    poolConfig : poolSetConfiguration;


    balls : {[idMesh : string] : Mesh};
    pockets : {[idMesh : string] : Mesh};

    constructor()
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
        console.log(idMesh);
        return idMesh;
    }
}