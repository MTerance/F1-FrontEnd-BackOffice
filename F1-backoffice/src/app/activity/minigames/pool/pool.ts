import { Mesh } from "babylonjs/index";
import { MiniGameState } from "../IMiniGame";
import{IMiniGame} from "../IMiniGame";



export enum PoolGameState {
    CHANGE_DIRECTION,
    ADJUST_POWER,
    WAITING_FOR_BALL,
    CHANGE_PLAYER,
};




export class PoolTable {

    killBox : Mesh[];

    constructor() {
        this.killBox = [];
    }
}



export class Pool implements IMiniGame {

    stateMiniGame : MiniGameState;

    public constructor() {
        this.stateMiniGame = MiniGameState.LOADING;
    }

    Load(): void {
        throw new Error("Method not implemented.");
    }

    Run(): void {
        throw new Error("Method not implemented.");
    }

    Pause(): void {
        throw new Error("Method not implemented.");
    }

    GetState(): MiniGameState { 
        return this.stateMiniGame; 
    }


    PrepareChangeDirection(): void {
        // load orbit camera

        // set target camera to white ball

        // set camera position to white ball

        throw new Error("Method PrepareChangeDirection not implemented.");
    }   

    PrepareAdjustPower(): void {

        // set camera position to white ball

        // set target camera to white ball

        // display UI

        // display power bar

        // display pool cue
        throw new Error("Method PrepareAdjustPower not implemented.");
    }

    PrepareWaitingForBall(): void {

        // set tatget camera to pool table

        // set camera position to pool table

        // hide UI

        // hide power bar

        throw new Error("Method PrepareWaitingForBall not implemented.");
    }

    PrepareChangePlayer(): void {
        throw new Error("Method PrepareChangePlayer not implemented.");
    }


}