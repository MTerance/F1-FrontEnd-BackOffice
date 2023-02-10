import { Mesh } from '@babylonjs/core/Meshes/mesh';
import { MiniGameState } from "../IMiniGame";
import{IMiniGame} from "../IMiniGame";



export enum PoolGameState {
    NONE,
    WAIT,
    POSITION_BALL,
    DIRECTION_BALL,
    POWER_BALL,
    WAITING_SHOT_RESULT_AND_CHECK_RULES,
    CHECK_RULES,
    ENDGAME
};


export class PoolBall {
    
        mesh !: Mesh;
        id !: number;
        position !: number;
        color !: number;
        isPotted : boolean;
    
        constructor() {
            this.isPotted = false;
        }
}

export class PoolTable {

    killBox : Mesh[];

    constructor() {
        this.killBox = [];
    }
}



export class PoolGameProcess {

    gamePhases : PoolGameState[];
    currentPhase : PoolGameState;


    constructor() {
        this.gamePhases = [];
        this.currentPhase = PoolGameState.NONE;
    }

    SetupGameProcess() : void {
        this.gamePhases.push(PoolGameState.WAIT);
        this.gamePhases.push(PoolGameState.POSITION_BALL);
        this.gamePhases.push(PoolGameState.DIRECTION_BALL);
        this.gamePhases.push(PoolGameState.POWER_BALL);
        this.gamePhases.push(PoolGameState.WAITING_SHOT_RESULT_AND_CHECK_RULES);
        this.gamePhases.push(PoolGameState.CHECK_RULES);
        this.gamePhases.push(PoolGameState.ENDGAME);
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