import { Mesh } from "@babylonjs/core/Meshes/mesh";


export class poolConfiguration {

    /* list of table pockets positions */
    killBox : Mesh[];
    /* */


    constructor() { 
        this.killBox = [];
    }

}


export class PoolLoader {
   

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
}