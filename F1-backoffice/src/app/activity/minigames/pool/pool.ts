import { Mesh } from '@babylonjs/core/Meshes/mesh';
import { GameEngineService } from 'src/app/services/game-engine.service';
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

export enum TypePoolBall {
    WHITE,
    BLACK,
    FULL,
    STRIPE
}

export class PoolBall {
    
    mesh !: Mesh;
    id !: number;
    position !: number;
    numero !: number;
    color !: number;
    type !: TypePoolBall;
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

export class Asset3D {

        id ?: number;
        name ?: string;
        nameFile ?: string;
        path ?: string;
        type ?: string;
}

export class PoolGameInformation {

    poolTableAsset ?: Asset3D;
    poolBallsAssets ?: Asset3D[];
    poolWhiteBallAsset ?: Asset3D;
    poolBlackBallAsset ?: Asset3D;
}



export class Pool implements IMiniGame {

    stateMiniGame : MiniGameState;
    gameEngineService : GameEngineService;

    public constructor(gameEngineService : GameEngineService) {
        this.stateMiniGame = MiniGameState.LOADING;
        this.gameEngineService = gameEngineService;
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

    CreateMainUIDisplay(){
       var ui = this.gameEngineService.GetFullScreenUI();
       // 
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